"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanConnection = {
  planId: string;
  active: boolean;
  type: string;
  status?: string;
};

export type Member = {
  id: string;
  auth: { email: string };
  planConnections: PlanConnection[];
  customFields?: Record<string, string>;
};

type MemberstackContextType = {
  member: Member | null;
  isPaid: boolean;
  isLoading: boolean;
  openLogin: () => Promise<void>;
  openSignup: () => Promise<void>;
  logout: () => Promise<void>;
};

// ─── Context ──────────────────────────────────────────────────────────────────

const MemberstackContext = createContext<MemberstackContextType | null>(null);

// ─── Singleton SDK Instance ───────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let msInstance: any = null;

async function getMemberstack() {
  if (typeof window === "undefined") return null;
  if (msInstance) return msInstance;

  const publicKey = process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY;
  if (!publicKey) {
    console.warn(
      "[MemberstackProvider] NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY is not set. " +
        "Copy .env.local.example to .env.local and add your key."
    );
    return null;
  }

  const { default: memberstackDom } = await import("@memberstack/dom");
  msInstance = memberstackDom.init({ publicKey });
  return msInstance;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function MemberstackProvider({ children }: { children: ReactNode }) {
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const ms = await getMemberstack();
        if (!ms || cancelled) return;

        const { data } = await ms.getCurrentMember();
        if (!cancelled) setMember(data ?? null);
      } catch {
        // Not logged in — this is expected
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Paid if member has at least one active plan connection
  const isPaid = Boolean(
    member?.planConnections?.some(
      (pc: PlanConnection) => pc.active && pc.status !== "CANCELED"
    )
  );

  const openLogin = useCallback(async () => {
    const ms = await getMemberstack();
    if (!ms) return;
    try {
      const { data } = await ms.openModal("LOGIN");
      if (data?.member) setMember(data.member);
    } catch {
      // User closed modal
    }
  }, []);

  const openSignup = useCallback(async () => {
    const ms = await getMemberstack();
    if (!ms) return;
    try {
      const { data } = await ms.openModal("SIGNUP");
      if (data?.member) setMember(data.member);
    } catch {
      // User closed modal
    }
  }, []);

  const logout = useCallback(async () => {
    const ms = await getMemberstack();
    if (!ms) return;
    await ms.logout();
    setMember(null);
  }, []);

  return (
    <MemberstackContext.Provider
      value={{ member, isPaid, isLoading, openLogin, openSignup, logout }}
    >
      {children}
    </MemberstackContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useMemberstack(): MemberstackContextType {
  const ctx = useContext(MemberstackContext);
  if (!ctx) {
    throw new Error("useMemberstack must be used within <MemberstackProvider>");
  }
  return ctx;
}

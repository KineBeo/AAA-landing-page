"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMemberstack } from "@/components/providers/MemberstackProvider";
import DashboardContent from "@/components/dashboard/DashboardContent";
import Navbar from "@/components/layout/Navbar";

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-sand-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sand-500 text-sm">Loading your dashboard…</p>
      </div>
    </div>
  );
}

function PaywallGate({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <div className="min-h-screen bg-sand-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-sand-900 mb-3">
          Upgrade to Access Courses
        </h1>
        <p className="text-sand-500 mb-8 leading-relaxed">
          You&apos;re logged in but haven&apos;t unlocked a paid plan yet. Upgrade
          to Pro to get instant access to all courses, live sessions, and
          certificates.
        </p>
        <button
          onClick={onUpgrade}
          className="btn-accent w-full text-base py-3.5 mb-3"
        >
          Upgrade to Pro — $29/month
        </button>
        <p className="text-xs text-sand-400">
          30-day money-back guarantee · Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { member, isPaid, isLoading, openSignup } = useMemberstack();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !member) {
      router.push("/");
    }
  }, [member, isLoading, router]);

  if (isLoading) return <LoadingScreen />;
  if (!member) return null;

  if (!isPaid) {
    return (
      <>
        <Navbar />
        <PaywallGate onUpgrade={openSignup} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <DashboardContent />
    </>
  );
}

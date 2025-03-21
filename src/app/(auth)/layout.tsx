import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center py-12">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-2xl font-bold">CRM Pro</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
} 
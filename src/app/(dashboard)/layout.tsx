import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header placeholder */}
      <header className="border-b">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-md bg-primary/80"></div>
            <span className="text-xl font-bold">CRM Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-muted/80"></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar placeholder */}
        <aside className="hidden w-64 border-r md:block">
          <nav className="flex flex-col gap-2 p-4">
            <div className="h-10 w-full rounded-md bg-muted/30"></div>
            <div className="h-10 w-full rounded-md bg-muted/30"></div>
            <div className="h-10 w-full rounded-md bg-muted/30"></div>
            <div className="h-10 w-full rounded-md bg-muted/30"></div>
            <div className="h-10 w-full rounded-md bg-muted/30"></div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 
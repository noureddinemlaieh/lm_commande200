import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <div className="h-10 w-32 rounded-md bg-primary/80"></div>
      </div>

      {/* Statistiques placeholder */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Statistique {i + 1}</p>
                <p className="text-2xl font-bold">120</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Graphique 1</h3>
          <div className="h-64 rounded-md bg-muted/30"></div>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Graphique 2</h3>
          <div className="h-64 rounded-md bg-muted/30"></div>
        </div>
      </div>

      {/* Tableau placeholder */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-medium">Activités récentes</h3>
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-md border p-3">
              <div className="h-10 w-10 rounded-full bg-muted/50"></div>
              <div className="flex-1">
                <p className="font-medium">Activité {i + 1}</p>
                <p className="text-sm text-muted-foreground">Description de l'activité {i + 1}</p>
              </div>
              <p className="text-sm text-muted-foreground">Il y a 2h</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
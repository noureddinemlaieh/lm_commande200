import React from "react";

export default function TachesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tâches</h1>
        <div className="h-10 w-32 rounded-md bg-primary/80"></div>
      </div>

      {/* Filtres et recherche placeholder */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
        <div className="h-10 w-64 rounded-md bg-muted/30"></div>
        <div className="h-10 w-48 rounded-md bg-muted/30"></div>
        <div className="h-10 w-48 rounded-md bg-muted/30"></div>
      </div>

      {/* Kanban board placeholder */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {["À faire", "En cours", "Terminé", "Annulé"].map((status, i) => (
          <div key={i} className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-muted/20 p-2">
              <h3 className="font-medium">{status}</h3>
              <div className="rounded-full bg-primary/20 px-2 py-0.5 text-sm">{(i === 2 ? 7 : i + 4)}</div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: (i === 2 ? 7 : i + 4) }).map((_, j) => (
                <div key={j} className="rounded-lg border bg-card p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div className={`rounded-full px-2 py-0.5 text-xs ${
                      i === 0 ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100" :
                      i === 1 ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" :
                      i === 2 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                    }`}>
                      {status}
                    </div>
                    <div className="h-6 w-6 rounded-full bg-muted/50"></div>
                  </div>
                  <h4 className="mb-1 font-medium">Tâche {j + 1}</h4>
                  <p className="mb-3 text-sm text-muted-foreground">Description de la tâche {j + 1}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">Échéance: 12/05/2025</div>
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full border-2 border-background bg-blue-300"></div>
                      <div className="h-6 w-6 rounded-full border-2 border-background bg-purple-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
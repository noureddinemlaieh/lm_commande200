import React from "react";

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Clients</h1>
        <div className="h-10 w-32 rounded-md bg-primary/80"></div>
      </div>

      {/* Filtres placeholder */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
        <div className="h-10 w-64 rounded-md bg-muted/30"></div>
        <div className="h-10 w-64 rounded-md bg-muted/30"></div>
        <div className="h-10 w-32 rounded-md bg-muted/30"></div>
      </div>

      {/* Tableau des clients placeholder */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="grid grid-cols-4 border-b p-4 font-medium">
          <div>Nom</div>
          <div>Email</div>
          <div>Entreprise</div>
          <div>Actions</div>
        </div>
        <div className="divide-y">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="grid grid-cols-4 items-center p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted/50"></div>
                <span>Client {i + 1}</span>
              </div>
              <div>client{i + 1}@example.com</div>
              <div>Entreprise {i + 1}</div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-md bg-blue-500/20"></div>
                <div className="h-8 w-8 rounded-md bg-amber-500/20"></div>
                <div className="h-8 w-8 rounded-md bg-red-500/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination placeholder */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Affichage de 1-10 sur 100 résultats</div>
        <div className="flex gap-1">
          <div className="h-10 w-10 rounded-md border bg-muted/10"></div>
          <div className="h-10 w-10 rounded-md border bg-primary/80"></div>
          <div className="h-10 w-10 rounded-md border bg-muted/10"></div>
          <div className="h-10 w-10 rounded-md border bg-muted/10"></div>
        </div>
      </div>
    </div>
  );
} 
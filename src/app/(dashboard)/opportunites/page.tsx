import React from "react";

export default function OpportunitesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Opportunités</h1>
        <div className="h-10 w-32 rounded-md bg-primary/80"></div>
      </div>

      {/* Pipeline placeholder */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-4 pb-4">
          {["Nouveau", "Contacté", "Proposition", "Négociation", "Gagné", "Perdu"].map((stage, i) => (
            <div key={i} className="w-80 shrink-0">
              <div className="mb-3 flex items-center justify-between rounded-lg bg-muted/20 p-3">
                <h3 className="font-medium">{stage}</h3>
                <div className="rounded-full bg-primary/20 px-3 py-1 text-sm">{i === 5 ? 6 : i + 3}</div>
              </div>
              <div className="space-y-3">
                {Array.from({ length: i === 5 ? 6 : i + 3 }).map((_, j) => (
                  <div key={j} className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-medium">Opportunité {j + 1}</h4>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                        {(Math.random() * 10000).toFixed(0)}€
                      </span>
                    </div>
                    <div className="mb-2 text-sm text-muted-foreground">Client {j + 1}</div>
                    <div className="h-1.5 w-full rounded-full bg-muted">
                      <div 
                        className="h-1.5 rounded-full bg-primary" 
                        style={{ width: `${Math.random() * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tableau récapitulatif placeholder */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-medium">Statistiques des opportunités</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold">23</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">Valeur totale</p>
            <p className="text-2xl font-bold">125 000€</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">Taux de conversion</p>
            <p className="text-2xl font-bold">32%</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-sm text-muted-foreground">Durée moyenne</p>
            <p className="text-2xl font-bold">48 jours</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
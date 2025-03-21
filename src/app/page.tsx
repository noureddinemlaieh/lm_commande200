import Link from "next/link";
import { LucideBarChart2, LucideUsers, LucideBriefcase, LucideTarget, LucideShield, LucideSmartphone } from "lucide-react";

export default function Home() {
  // Statistiques de l'entreprise
  const stats = [
    { value: "2,500+", label: "Clients actifs", change: "+12%" },
    { value: "98%", label: "Satisfaction client", change: "+5%" },
    { value: "45 min", label: "Temps de réponse moyen", change: "-15%" },
    { value: "99.9%", label: "Disponibilité", change: "+0.1%" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-xl font-bold">CRM Pro</span>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#fonctionnalites" className="text-sm font-medium">Fonctionnalités</Link>
            <Link href="#stats" className="text-sm font-medium">Statistiques</Link>
            <Link href="#tarifs" className="text-sm font-medium">Tarifs</Link>
            <Link href="#contact" className="text-sm font-medium">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Connexion
            </Link>
            <Link 
              href="/register" 
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-opacity-90"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Gérez vos relations clients en toute simplicité
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Une plateforme CRM complète et intuitive pour suivre vos clients, opportunités et tâches en un seul endroit. Optimisez votre workflow commercial et augmentez vos revenus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/register" 
                className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-opacity-90"
              >
                Essai gratuit de 14 jours
              </Link>
              <Link 
                href="#demo" 
                className="rounded-md border px-6 py-3 text-lg font-medium transition-colors hover:bg-muted"
              >
                Voir la démo
              </Link>
            </div>
          </div>
          
          {/* Statistiques */}
          <div id="stats" className="mt-20">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Résultats concrets pour votre entreprise
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`rounded-full px-2 py-1 text-xs font-medium ${
                      stat.change.startsWith('+') 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Des fonctionnalités pensées pour vous
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<LucideUsers className="h-6 w-6" />}
              title="Gestion des clients" 
              description="Centralisez toutes les informations de vos clients et prospects dans une interface intuitive et accessible."
            />
            <FeatureCard 
              icon={<LucideTarget className="h-6 w-6" />}
              title="Pipeline des opportunités" 
              description="Suivez vos opportunités commerciales de la prospection à la conversion avec notre pipeline visuel."
            />
            <FeatureCard 
              icon={<LucideBarChart2 className="h-6 w-6" />}
              title="Tableau des tâches" 
              description="Organisez et priorisez vos tâches quotidiennes pour ne jamais manquer une échéance importante."
            />
            <FeatureCard 
              icon={<LucideBriefcase className="h-6 w-6" />}
              title="Rapports avancés" 
              description="Analysez vos performances avec des rapports détaillés et prenez des décisions basées sur des données concrètes."
            />
            <FeatureCard 
              icon={<LucideSmartphone className="h-6 w-6" />}
              title="Compatible mobile" 
              description="Accédez à votre CRM en déplacement grâce à notre interface responsive optimisée pour tous les appareils."
            />
            <FeatureCard 
              icon={<LucideShield className="h-6 w-6" />}
              title="Personnalisable" 
              description="Adaptez votre CRM à vos besoins spécifiques avec notre système de modules et d'intégrations flexibles."
            />
          </div>
        </div>
      </section>

      {/* Démo */}
      <section id="demo" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Découvrez CRM Pro en action
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              Notre plateforme est conçue pour simplifier votre workflow et vous aider à développer votre activité.
            </p>
          </div>
          
          {/* Placeholder pour la démo */}
          <div className="mx-auto aspect-video max-w-5xl rounded-lg border bg-card shadow-lg">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="text-lg font-medium">Regarder la démo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Des formules adaptées à vos besoins
          </h2>
          
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Formule Starter */}
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-muted-foreground">Pour les petites entreprises</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">29€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Jusqu'à 500 contacts
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Gestion des clients
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Tableau des tâches
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  Rapports avancés
                </li>
              </ul>
              <Link 
                href="/register" 
                className="block w-full rounded-md border bg-card px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-muted"
              >
                Commencer l'essai gratuit
              </Link>
            </div>
            
            {/* Formule Pro */}
            <div className="rounded-lg border-2 border-primary bg-card p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4">
                <div className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Populaire
                </div>
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-muted-foreground">Pour les entreprises en croissance</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">79€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Jusqu'à 10 000 contacts
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Toutes les fonctionnalités Starter
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Rapports avancés
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Automatisations
                </li>
              </ul>
              <Link 
                href="/register" 
                className="block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-opacity-90"
              >
                Commencer l'essai gratuit
              </Link>
            </div>
            
            {/* Formule Enterprise */}
            <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">Pour les grandes entreprises</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">199€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Contacts illimités
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Toutes les fonctionnalités Pro
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  API avancée
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Support dédié 24/7
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="block w-full rounded-md border bg-card px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-muted"
              >
                Contacter les ventes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à améliorer votre gestion commerciale ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Rejoignez des milliers d'entreprises qui utilisent CRM Pro pour développer leur activité.
          </p>
          <Link 
            href="/register" 
            className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-opacity-90"
          >
            Commencer gratuitement
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-primary"></div>
                <span className="text-xl font-bold">CRM Pro</span>
              </div>
              <p className="text-muted-foreground">
                Solution CRM complète et modulaire pour toutes vos activités commerciales.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Produit</h3>
              <ul className="space-y-2">
                <li><Link href="#fonctionnalites">Fonctionnalités</Link></li>
                <li><Link href="#tarifs">Tarifs</Link></li>
                <li><Link href="#demo">Démo</Link></li>
                <li><Link href="/register">Essai gratuit</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Ressources</h3>
              <ul className="space-y-2">
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">Guides</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Entreprise</h3>
              <ul className="space-y-2">
                <li><Link href="#">À propos</Link></li>
                <li><Link href="#">Carrières</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Mentions légales</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 CRM Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Composant pour les cartes de fonctionnalités
function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

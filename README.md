# CRM Pro - Application de Gestion de la Relation Client

Une application CRM complète et modulaire développée avec Next.js, compatible avec les appareils mobiles et desktop.

## Caractéristiques

- **Responsive Design** : Interface adaptée à tous les appareils
- **Architecture modulaire** : Permet l'intégration de composants externes
- **Design System complet** : UI cohérente avec support de thème clair/sombre
- **Gestion de clients** : Suivi complet des informations clients
- **Pipeline d'opportunités** : Suivi du cycle de vente
- **Gestion des tâches** : Organisation des activités en tableau Kanban

## Technologies

- **Frontend** : Next.js, React, TypeScript, Tailwind CSS
- **État** : Zustand, Jotai
- **Base de données** : Neon (PostgreSQL serverless)
- **Déploiement** : Vercel
- **Versioning** : GitHub

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/crm-pro.git

# Accéder au répertoire
cd crm-pro

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Remplir les variables dans .env.local

# Lancer en développement
npm run dev
```

## Structure du projet

```
├── src/
│   ├── app/                 # App Router (Next.js 14+)
│   │   ├── (auth)/          # Routes d'authentification
│   │   ├── (dashboard)/     # Routes du tableau de bord
│   │   └── api/             # API Routes
│   ├── components/          # Composants React
│   │   ├── ui/              # Composants UI réutilisables
│   │   └── modules/         # Composants spécifiques aux modules
│   ├── hooks/               # Hooks personnalisés
│   ├── lib/                 # Bibliothèques et utilitaires
│   ├── services/            # Services (API, auth, etc.)
│   ├── store/               # État global (Zustand)
│   └── types/               # Types TypeScript
└── public/                  # Fichiers statiques
```

## Déploiement

L'application est configurée pour un déploiement continu sur Vercel. Chaque push sur la branche principale déclenche automatiquement un déploiement.

## Contribuer

1. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
2. Commiter les changements (`git commit -m 'Ajout de fonctionnalité'`)
3. Pousser sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
4. Créer une Pull Request

## Licence

MIT

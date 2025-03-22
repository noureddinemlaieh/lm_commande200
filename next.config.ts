/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Désactiver les optimisations qui pourraient causer des problèmes
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: []
  },
  env: {
    // Ajouter cette variable pour simuler un environnement Vercel en local
    VERCEL_ENV: process.env.NODE_ENV
  }
};

module.exports = nextConfig;

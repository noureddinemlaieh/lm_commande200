import { neon } from '@neondatabase/serverless';

// Cette fonction sera remplacée par la véritable connexion à Neon plus tard
export const getDatabase = () => {
  // Placeholder pour l'URL de connexion Neon (à remplacer par la vraie URL)
  const connectionString = process.env.DATABASE_URL || 'postgres://placeholder:placeholder@placeholder.neon.tech/neondb';

  // Retourne une instance de client Neon
  const db = neon(connectionString);
  
  return db;
}; 
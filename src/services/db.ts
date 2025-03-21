import { neon } from '@neondatabase/serverless';

// Fonction pour obtenir une connexion à la base de données Neon
export const getDatabase = () => {
  // Utiliser l'URL de connexion depuis les variables d'environnement
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    throw new Error('DATABASE_URL n\'est pas définie dans les variables d\'environnement');
  }

  // Retourne une instance de client Neon
  const db = neon(connectionString);
  
  return db;
}; 
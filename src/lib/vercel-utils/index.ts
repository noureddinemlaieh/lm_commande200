/**
 * Utilitaires pour gérer les fonctionnalités spécifiques à Vercel en développement local
 */

// Mock pour deploymentId qui cause des erreurs
export const getVercelDeploymentInfo = () => {
  // En environnement de développement, retourner des valeurs par défaut
  if (process.env.NODE_ENV === 'development') {
    return {
      deploymentId: 'dev-deployment',
      buildId: 'dev-build',
      url: 'http://localhost:3000'
    };
  }
  
  // En production, ces valeurs seront fournies par Vercel
  return {
    deploymentId: process.env.VERCEL_DEPLOYMENT_ID || 'unknown',
    buildId: process.env.VERCEL_BUILD_ID || 'unknown',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'unknown'
  };
};

// Vérifier si l'application est en cours d'exécution sur Vercel
export const isRunningOnVercel = () => {
  return !!process.env.VERCEL;
};

// Vérifier l'environnement Vercel (production, preview, development)
export const getVercelEnvironment = () => {
  return process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV || 'development';
}; 
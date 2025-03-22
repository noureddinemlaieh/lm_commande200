/**
 * Ce script applique un patch pour résoudre le problème de deploymentId
 * manquant en développement local
 */

// Patch global pour éviter l'erreur "Cannot read properties of undefined (reading 'deploymentId')"
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  if (typeof global !== 'undefined') {
    if (!global.__NEXT_DATA__) {
      global.__NEXT_DATA__ = {};
    }
    
    if (!global.__NEXT_DATA__.buildId) {
      global.__NEXT_DATA__.buildId = 'development';
    }
    
    if (!global.process) {
      global.process = {};
    }
    
    if (!global.process.env) {
      global.process.env = {};
    }
    
    global.process.env.VERCEL_DEPLOYMENT_ID = 'development';
    global.process.env.NEXT_PUBLIC_VERCEL_ENV = 'development';
  }
  
  console.log('✅ Vercel mock patch applied');
}

// CommonJS export
module.exports = {}; 
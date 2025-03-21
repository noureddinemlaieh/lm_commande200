import { NextResponse } from 'next/server';
import { getDatabase } from '@/services/db';

export async function GET() {
  try {
    const db = getDatabase();
    
    // Tester la connexion en exécutant une requête simple
    const result = await db`SELECT version()`;
    
    return NextResponse.json({
      success: true,
      message: 'Connexion à la base de données réussie',
      version: result[0].version
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur de connexion à la base de données',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 
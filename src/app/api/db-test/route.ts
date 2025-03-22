import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Tester la connexion en utilisant Prisma
    const usersCount = await prisma.user.count();
    
    return NextResponse.json({
      success: true,
      message: 'Connexion à la base de données via Prisma réussie',
      usersCount: usersCount
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
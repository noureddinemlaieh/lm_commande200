import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Suppression de toutes les données existantes (cascade)
    await prisma.user.deleteMany({});
    await prisma.client.deleteMany({});

    // Création d'utilisateurs de test
    const adminUser = await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      }
    });

    const regularUser = await prisma.user.create({
      data: {
        name: 'Regular User',
        email: 'user@example.com',
        role: 'user'
      }
    });

    // Création de clients de test
    const technoClient = await prisma.client.create({
      data: {
        name: 'Techno Solutions',
        email: 'contact@technosolutions.com',
        phone: '+33123456789',
        company: 'Techno Solutions SAS',
        address: '123 Avenue de l\'Innovation',
        city: 'Paris',
        zipCode: '75001',
        country: 'France',
        notes: 'Client important dans le secteur technologique'
      }
    });

    const ecoClient = await prisma.client.create({
      data: {
        name: 'Eco Initiatives',
        email: 'info@ecoinitiatives.org',
        phone: '+33987654321',
        company: 'Eco Initiatives Association',
        address: '45 Rue Verte',
        city: 'Lyon',
        zipCode: '69001',
        country: 'France',
        notes: 'Organisation à but non lucratif'
      }
    });

    // Création de contacts pour les clients
    await prisma.contact.create({
      data: {
        clientId: technoClient.id,
        name: 'Sophie Martin',
        email: 'sophie.martin@technosolutions.com',
        phone: '+33612345678',
        position: 'Directrice Technique'
      }
    });

    await prisma.contact.create({
      data: {
        clientId: ecoClient.id,
        name: 'Pierre Dubois',
        email: 'pierre.dubois@ecoinitiatives.org',
        phone: '+33698765432',
        position: 'Président'
      }
    });

    // Création d'opportunités
    const opportunity1 = await prisma.opportunity.create({
      data: {
        clientId: technoClient.id,
        name: 'Refonte site web',
        value: 15000,
        status: 'proposal',
        notes: 'Le client souhaite moderniser son site web pour améliorer son image de marque'
      }
    });

    const opportunity2 = await prisma.opportunity.create({
      data: {
        clientId: ecoClient.id,
        name: 'Application mobile',
        value: 25000,
        status: 'negotiation',
        notes: 'Application pour suivre l\'impact environnemental des actions'
      }
    });

    // Création de tâches
    await prisma.task.create({
      data: {
        title: 'Préparer proposition commerciale',
        description: 'Rédiger une proposition détaillée pour la refonte du site web',
        status: 'completed',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Dans une semaine
        assigneeId: adminUser.id,
        clientId: technoClient.id,
        opportunityId: opportunity1.id
      }
    });

    await prisma.task.create({
      data: {
        title: 'Réunion de suivi',
        description: 'Faire le point sur l\'avancement du projet d\'application mobile',
        status: 'pending',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Dans trois jours
        assigneeId: regularUser.id,
        clientId: ecoClient.id,
        opportunityId: opportunity2.id
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Base de données peuplée avec succès',
      data: {
        users: await prisma.user.count(),
        clients: await prisma.client.count(),
        contacts: await prisma.contact.count(),
        opportunities: await prisma.opportunity.count(),
        tasks: await prisma.task.count()
      }
    });
  } catch (error) {
    console.error('Erreur lors du peuplement de la base de données:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors du peuplement de la base de données',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 
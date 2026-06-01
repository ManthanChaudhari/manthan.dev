import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    let about = await prisma.about.findFirst();
    if (!about) {
      // Create initial profile if none exists
      about = await prisma.about.create({
        data: {
          name: 'MANTHAN',
          title: 'Full Stack Next.js Specialist',
          description: 'Mastering the full lifecycle of Next.js applications—from architecting high-performance server-side logic to crafting seamless, interactive frontend experiences.'
        }
      });
    }
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { name, title, description } = body;
    const about = await prisma.about.findFirst();
    
    const updatedAbout = await prisma.about.update({
      where: { id: about.id },
      data: { name, title, description }
    });
    return NextResponse.json(updatedAbout);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

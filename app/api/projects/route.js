import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, tech, description, deployUrl } = body;
    const project = await prisma.project.create({
      data: { title, slug, tech, description, deployUrl }
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

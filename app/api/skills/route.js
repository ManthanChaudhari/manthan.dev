import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { createdAt: 'asc' }
    });
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, level } = body;
    const skill = await prisma.skill.create({
      data: { name, level }
    });
    return NextResponse.json(skill);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

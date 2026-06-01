import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await prisma.project.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

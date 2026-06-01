import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  return NextResponse.json({ message: 'Project deleted' });
}

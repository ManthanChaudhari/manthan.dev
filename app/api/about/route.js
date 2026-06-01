import { NextResponse } from 'next/server';

let mockAbout = {
  id: '1',
  name: 'MANTHAN',
  title: 'Full Stack Next.js Specialist',
  description: 'Mastering the full lifecycle of Next.js applications—from architecting high-performance server-side logic to crafting seamless, interactive frontend experiences.'
};

export async function GET() {
  return NextResponse.json(mockAbout);
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    mockAbout = { ...mockAbout, ...body };
    return NextResponse.json(mockAbout);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

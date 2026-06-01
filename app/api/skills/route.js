import { NextResponse } from 'next/server';

const mockSkills = [
  { id: '1', name: 'Next.js', level: 'EXPERT' },
  { id: '2', name: 'React', level: '01' }
];

export async function GET() {
  return NextResponse.json(mockSkills);
}

export async function POST(request) {
  try {
    const body = await request.json();
    return NextResponse.json({ id: Date.now().toString(), ...body });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

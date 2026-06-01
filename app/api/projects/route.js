import { NextResponse } from 'next/server';

const mockProjects = [
  {
    id: 'dermatocare',
    title: 'Dermatocare',
    slug: 'dermatocare',
    tech: 'Next.js, React.js, JavaScript, Tailwind CSS, REST APIs, Authentication, RBAC, SEO',
    description: 'A full-stack healthcare platform built with Next.js...',
    deployUrl: 'https://dermatocare.com'
  }
];

export async function GET() {
  return NextResponse.json(mockProjects);
}

export async function POST(request) {
  try {
    const body = await request.json();
    return NextResponse.json({ id: Date.now().toString(), ...body });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuid } from 'crypto';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

async function readProjects() {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeProjects(projects: unknown[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');
}

export async function GET() {
  const projects = await readProjects();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const body = await req.json();
  const projects = await readProjects();
  const newProject = { ...body, id: Date.now().toString() };
  projects.unshift(newProject);
  await writeProjects(projects);
  return NextResponse.json(newProject, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const projects = await readProjects();
  const idx = projects.findIndex((p: { id: string }) => p.id === body.id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  projects[idx] = body;
  await writeProjects(projects);
  return NextResponse.json(body);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const projects = await readProjects();
  const filtered = projects.filter((p: { id: string }) => p.id !== id);
  await writeProjects(filtered);
  return NextResponse.json({ success: true });
}

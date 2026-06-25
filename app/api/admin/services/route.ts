import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'services.json');

async function read() {
  try { return JSON.parse(await fs.readFile(FILE, 'utf-8')); } catch { return []; }
}

export async function GET() {
  return NextResponse.json(await read());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = await read();
    const newItem = { ...body, id: Date.now().toString() };
    items.push(newItem);
    await fs.writeFile(FILE, JSON.stringify(items, null, 2));
    return NextResponse.json(newItem);
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const items = await read();
    const idx = items.findIndex((i: { id: string }) => i.id === body.id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    items[idx] = body;
    await fs.writeFile(FILE, JSON.stringify(items, null, 2));
    return NextResponse.json(body);
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const items = await read();
    const filtered = items.filter((i: { id: string }) => i.id !== id);
    await fs.writeFile(FILE, JSON.stringify(filtered, null, 2));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}

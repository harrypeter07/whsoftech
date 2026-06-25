import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'analytics.json');

async function read() {
  try {
    return JSON.parse(await fs.readFile(FILE, 'utf-8'));
  } catch {
    return { totalVisits: 0, dailyVisits: {}, recentVisits: [] };
  }
}

export async function GET() {
  return NextResponse.json(await read());
}

export async function POST(req: Request) {
  try {
    const { page } = await req.json();
    const data = await read();
    const today = new Date().toISOString().split('T')[0];

    data.totalVisits = (data.totalVisits || 0) + 1;
    data.dailyVisits[today] = (data.dailyVisits[today] || 0) + 1;
    data.recentVisits = [
      { ts: new Date().toISOString(), page: page || '/' },
      ...(data.recentVisits || []),
    ].slice(0, 100);

    await fs.writeFile(FILE, JSON.stringify(data, null, 2));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

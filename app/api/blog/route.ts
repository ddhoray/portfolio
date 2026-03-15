export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ success: true, posts: posts ?? [] });
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json({ success: true, posts: [] });
  }
}


import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  // Ensure session is defined and check user role
  if (!session || !session.user || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title, content } = await request.json()
    const post = await prisma.post.create({
      data: { title, content },
    })
    return NextResponse.json(post, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 })
  }
}
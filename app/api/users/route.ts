import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 })
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
    },
  })

  return NextResponse.json(users)
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 })
  }

  const { id, email, role } = await request.json()

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { email, role },
  })

  return NextResponse.json(updatedUser)
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 })
  }

  const { id } = await request.json()

  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ message: "User deleted successfully" })
}
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import UserTable from "@/components/UserTable"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const prisma = new PrismaClient()

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/signin")
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Dashboard</h1>
      <UserTable users={users} />
    </div>
  )
}
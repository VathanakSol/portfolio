"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Users, FileText, Image, Settings, Menu } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Posts", href: "/admin/posts", icon: FileText },
  { name: "Media", href: "/admin/media", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle admin menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <AdminSidebarContent pathname={pathname} setOpen={setOpen} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex">
        <AdminSidebarContent pathname={pathname} />
      </div>
    </>
  )
}

function AdminSidebarContent({
  pathname,
  setOpen,
}: {
  pathname: string
  setOpen?: (open: boolean) => void
}) {
  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="p-4">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Admin Panel
        </h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen?.(false)}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "transparent"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}
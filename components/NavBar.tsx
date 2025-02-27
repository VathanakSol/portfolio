"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Project", path: "/project" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to normalize a path by removing a trailing slash (if not the root)
  const normalizePath = (path: string) => {
    if (path !== "/" && path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  };

  // Normalize the current pathname
  const normalizedPathname = normalizePath(pathname);

  // Determine active state using the normalized paths.
  // For root ("/"), we require an exact match.
  const isActive = (path: string) => {
    const normalizedNavPath = normalizePath(path);
    return normalizedNavPath === "/"
      ? normalizedPathname === "/"
      : normalizedPathname.startsWith(normalizedNavPath);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Profile Logo */}
          <Link href="/" aria-label="Logo" className="flex items-center gap-4">
            <Image
              src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/1-4ycJ0diY7b4x9cdQ6ipFqgenX1qSvr.png"
              width={50}
              height={50}
              alt="Logo"
              className="aspect-square object-cover"
            />
            <span className="text-xl font-bold hover:text-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all ease-in-out duration-300 dark:bg-gradient-to-r dark:from-purple-300 dark:to-cyan-300 dark:hover:text-white">
              Nak-Tech
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4 p-2 rounded-lg">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.path} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none px-4 py-2 rounded-xl text-sm font-medium transition-all ease-in-out duration-300",
                            active
                              ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                              : "text-gray-800 dark:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-purple-300 dark:hover:to-cyan-300 dark:hover:text-white",
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="block">
              <ModeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="block md:hidden">
              <ModeToggle />
            </div>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-md shadow-lg">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm font-medium",
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

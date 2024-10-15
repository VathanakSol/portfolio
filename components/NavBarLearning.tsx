"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Toggle } from '@/components/ui/toggle';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from './ModeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Learn',
    children: [
      { name: 'Course', path: '/learing/courses' },
      { name: 'Video', path: '/learning/videos' },
      { name: 'Quiz', path: '/learning/quizzes' },
      { name: 'Practice', path: '/learning/practice'}
    ],
  },
  { name: 'About', path: '/about' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" aria-label="SpringOps Logo" className="flex items-center gap-4">
            <Image
              src="/assets/springOps.jpg"
              width={40}
              height={40}
              alt="SpringOps Logo"
              className="rounded-full aspect-square object-cover"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">SpringOps</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-800 dark:text-white">{item.name}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.name}
                                title={child.name}
                                href={child.path}
                              >
                                {`Explore our ${child.name.toLowerCase()} services`}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.path} legacyBehavior passHref>
                        <NavigationMenuLink 
                          className={cn(
                            navigationMenuTriggerStyle(),
                            pathname === item.path ? "bg-green-500 text-white" : "text-gray-800 dark:text-white hover:bg-green-100"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Toggle />
          </div>

          <ModeToggle />

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex justify-between items-center text-left px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-accent"
                        onClick={() => {}}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {/* Dropdown for children */}
                      {/* Implement dropdown logic here if needed */}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm font-medium",
                        pathname === item.path
                          ? "bg-green-500 text-white"
                          : "text-gray-800 dark:text-white hover:bg-green-100"
                      )}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
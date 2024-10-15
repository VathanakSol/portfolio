"use client";

import "@/app/globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import React from "react";
import { Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Loading from "@/components/Loading";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function LearningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NavBar />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
        
          <BackToTopButton />
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/use-toast";
import BackToTopButton from "@/components/BackToTopButton";
import { Poppins } from "next/font/google";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NakTech",
  description: "NakTech Portfolio",
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/favicon.ico", // Shortcut icon for quick access
  },
  openGraph: {
    title: "NakTech",
    description: "Portfolio Website",
    url: "https://naktech.pro",
    siteName: "NakTech",
    images: [
      {
        url: "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/2-xEHKaOOecwUXcNTcEd39pyTVqZaQSx.png",
        width: 1200,
        height: 630,
        alt: "Sol Vathanak - NakTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Technology",
  classification: "Portfolio Website Platform",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Google AdSense Auto Ads Script */}
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1861181031288603`}
            crossOrigin="anonymous"
          />
        </head>

        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />           
            <ScrollProgressBar />
            {children}
            <Analytics />
            <Toaster />
            <Footer />
            <BackToTopButton />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

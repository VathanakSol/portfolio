import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// import VisitorCounter from "@/components/VisitorCounter";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/use-toast";
// import ElevenLabsTTS from "@/components/ElevenLabsTTS";
import BackToTopButton from "@/components/BackToTopButton";
import { Poppins } from 'next/font/google';
import ScrollProgressBar from "@/components/ScrollProgressBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "NakTech",
  description: "NakTech Portfolio",
  openGraph: {
    title: "NakTech",
    description: "Portfolio Website",
    url: "https://naktech.pro",
    siteName: "NakTech",
    images: [
      {
        url: "https://naktech.pro/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "NakTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >       
            
            <NavBar />
            {/* <VisitorCounter /> */}
            <ScrollProgressBar />
            {children}
            <Analytics />
            <Toaster />
            <Footer />
            {/* <ElevenLabsTTS /> */}
            <BackToTopButton />
        </ThemeProvider>

      </body>
    </html>
  );
}
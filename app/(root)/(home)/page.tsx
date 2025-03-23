import DevOpsPipeline from "@/components/DevOpsPipeline";
import Header from "@/components/Header";

import Projects from "@/components/Project";
// import YoutubeSection from '@/components/YoutubeSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NakTech",
  description:
    "Welcome to my portfolio, where I showcase my skills and experiences in software development, cloud engineering, and DevOps. I'm passionate about building scalable and efficient systems that meet the needs of users.",
  keywords: [
    "naktech portfolio",
    "naktech software development",
    "naktech cloud engineering",
    "naktech microservices",
    "naktech backend developer",
    "naktech frontend developer",
    "naktech database services",
    "naktech DevOps",
    "naktech cloud platform",
    "naktech",
  ],
  authors: [{ name: "Sol Vathanak" }],
  creator: "Sol Vathanak",
  publisher: "Sol Vathanak",
  applicationName: "NakTech",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NakTech - Sol Vathanak's Portfolio",
    description:
      "Welcome to my portfolio, where I showcase my skills and experiences in software development, cloud engineering, and DevOps. I'm passionate about building scalable and efficient systems that meet the needs of users.",
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
  classification: "Cloud Development Platform",
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

export default function HomePage() {
  return (
    <>
      <main className="dark:bg-gray-800">
        <Header />
        <DevOpsPipeline />
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1861181031288603"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        {/* <YoutubeSection /> */}
        <Projects />
      </main>
    </>
  );
}

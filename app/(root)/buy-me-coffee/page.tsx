import React from "react";

import BuyMeCoffee from "@/components/BuyMeCoffee";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    default: "Support My Work | Secure Payment Options",
    template: "%s | NakTech Support Page"
  },
  description: "Support my projects through secure payment options including QR code payments in Riel (KHR) or USD. Your contribution helps maintain and improve our services.",
  applicationName: "NakTech Support Portal",
  authors: [{ name: "Vathanak", url: "https://naktech.pro" }],
  generator: "Next.js",
  keywords: [
    "financial support",
    "donation platform",
    "QR payment Cambodia",
    "Khmer Riel payment",
    "USD digital payment",
    "online donation",
    "secure payment gateway",
    "Cambodia payment options",
    "support developer",
    "project sponsorship",
    "tech funding",
    "ABA Pay",
    "TrueMoney QR",
    "Wing payment",
    "KHQR standard",
    "Cambodian payment solutions"
  ],
  referrer: "origin-when-cross-origin",
  themeColor: "#3182ce",
  colorScheme: "light",
  creator: "Vathanak",
  publisher: "NakTech",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://naktech.pro"),
  alternates: {
    canonical: "/buy-me-coffee",
    languages: {
      "en-US": "/en-US",
      "km-KH": "/km-KH",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  category: "technology",
  classification: "Financial Services",
  openGraph: {
    title: "Support My Work | Multiple Payment Options",
    description: "Choose from various secure payment methods including KHQR, ABA Pay, and international options to support my projects.",
    url: "https://naktech.pro/buy-me-coffee",
    siteName: "NakTech",
    images: [
      {
        url: "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/naktech/khmerqr-4nI4welJDp59q8QDh3fjtddJmS3pSo.jpeg",
        width: 1200,
        height: 630,
        alt: "NakTech Payment Options - KHQR and USD QR Codes",
      },
      {
        url: "/assets/payment-methods-og.jpg",
        width: 800,
        height: 600,
        alt: "Supported Payment Methods",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["vathanaksol1605@gmail.com"],
    countryName: "Cambodia",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NakTech",
    creator: "@Vathanak23",
    title: "Support My Tech Projects",
    description: "Secure payment options including KHQR standard for Cambodian payments and international options. Every contribution matters!",
    images: {
      url: "/assets/twitter-payment-card.jpg",
      alt: "Payment Options at NakTech",
      width: 1200,
      height: 675,
    },
  },
  appleWebApp: {
    capable: true,
    title: "NakTech Support",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "yandex-verification-code",
    me: "vathanaksol1605@gmail.com",
  },
  archives: ["https://naktech.pro/about"],
  assets: ["https://naktech.pro/about"],
  bookmarks: ["https://naktech.pro/about"],
  other: {
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "your-facebook-page-id",
    "instagram:creator": "@your-instagram",
    "linkedin:creator": "https://linkedin.com/in/yourprofile",
    "payment:currency": "USD,KHR",
    "payment:option": "QR Code,Bank Transfer,Crypto",
    "payment:processor": "ABA,TrueMoney,Wing,Binance",
    "business:contact_data:country_name": "Cambodia",
    "business:contact_data:website": "https://naktech.pro",
    "og:price:amount": "1.00",
    "og:price:currency": "USD",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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

export default function BuyMeCoffeePage() {
  return (
    <main>
      <BuyMeCoffee />
    </main>
  );
}

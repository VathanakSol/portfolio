import React from "react";

import { Metadata } from "next/types";
import BuyMeCoffee from "@/components/BuyMeCoffee";

export const metadata: Metadata = {
  title: "Buy Me a Coffee - Support My Work",
  description:
    "Support my work by buying me a coffee! Choose between Khmer QR or Dollar QR to make a contribution.",
  keywords: [
    "buy me a coffee",
    "support my work",
    "Khmer QR",
    "Dollar QR",
    "coffee donation",
  ],
  openGraph: {
    title: "Buy Me a Coffee - Support My Work",
    description:
      "Support my work by buying me a coffee! Choose between Khmer QR or Dollar QR to make a contribution.",
    url: "https://naktech.pro/buy-me-coffee",
    images: [
      {
        url: "/assets/dollarqr.jpeg",
        width: 1200,
        height: 630,
        alt: "Khmer QR - Buy Me a Coffee",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Me a Coffee - Support My Work",
    description:
      "Support my work by buying me a coffee! Choose between Khmer QR or Dollar QR to make a contribution.",
    images: ["/assets/dollarqr.jpeg"],
  },
};

export default function BuyMeCoffeePage() {
  return (
    <main>
      <BuyMeCoffee />
    </main>
  );
}

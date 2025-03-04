import { AboutHero } from "@/components/about-hero";
import Timeline from "@/components/Timeline";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Portfolio Website",
};

export default function page() {
  return (
    <main>
      <AboutHero />
      <Timeline />
    </main>
  );
}

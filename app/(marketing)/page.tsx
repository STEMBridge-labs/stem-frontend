import type { Metadata } from "next";
import { Hero } from "@/components/blocks/landing/hero";
import { StatsBanner } from "@/components/blocks/landing/stats-banner";
import { SiteFooter } from "@/components/blocks/landing/site-footer";

export const metadata: Metadata = {
  title: "STEMBridge - Learn JSS 1 Mathematics",
};

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <StatsBanner />
      <SiteFooter />
    </main>
  );
}

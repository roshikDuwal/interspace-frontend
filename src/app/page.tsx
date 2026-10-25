import type { Metadata } from "next";

import Hero from "@/components/features/home/hero";
import Mission from "@/components/features/home/mission";
import CtaBanner from "@/components/features/home/cta-banner";
import AboutPreview from "@/components/features/about/about-preview";
import SupportServices from "@/components/features/home/support-services";

export const metadata: Metadata = {
  title: "Home",
  description:
    "InnerSpace disability support services across Australia.",

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CtaBanner />
      <AboutPreview />
      <Mission />
      <SupportServices />
    </>
  );
}
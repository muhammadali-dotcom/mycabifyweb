"use client";
import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { HeroSection } from "./_components/home/HeroSection";
import { ProblemSection } from "./_components/home/ProblemSection";
import { EcosystemSection } from "./_components/home/EcosystemSection";
import { FormulaSection } from "./_components/home/FormulaSection";
import { RolesSection } from "./_components/home/RolesSection";
import { WhySection } from "./_components/home/WhySection";
import { TestimonialsSection } from "./_components/home/TestimonialsSection";
import { ImplementationSection } from "./_components/home/ImplementationSection";
import { SupportSection } from "./_components/home/SupportSection";
import { FaqSection } from "./_components/home/FaqSection";
import { ClosingSection } from "./_components/home/ClosingSection";
import { DemoModal } from "./_components/home/DemoModal";
import { VideoModal } from "./_components/home/VideoModal";

export default function Home() {
  const [demo, setDemo] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <main>
      <SiteHeader onDemo={() => setDemo(true)} />
      <HeroSection onDemo={() => setDemo(true)} />
      <ProblemSection />
      <EcosystemSection onPlayVideo={setVideo} />
      <FormulaSection />
      <RolesSection />
      <WhySection />
      <TestimonialsSection />
      <ImplementationSection onDemo={() => setDemo(true)} />
      <SupportSection />
      <FaqSection />
      <ClosingSection onDemo={() => setDemo(true)} />
      <SiteFooter />
      {demo && <DemoModal close={() => setDemo(false)} />}
      {video && <VideoModal video={video} close={() => setVideo("")} />}
    </main>
  );
}

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { HeroSection } from "./_components/home/HeroSection";
import { EcosystemSection } from "./_components/home/EcosystemSection";
import { SolutionsSection } from "./_components/home/SolutionsSection";
import { TestimonialsSection } from "./_components/home/TestimonialsSection";
import { ImplementationSection } from "./_components/home/ImplementationSection";
import { FaqSection } from "./_components/home/FaqSection";
import { ClosingSection } from "./_components/home/ClosingSection";
import { DemoProvider } from "./_components/home/DemoProvider";

export default function Home() {
  return (
    <DemoProvider>
      <main>
        <SiteHeader />
        <HeroSection />
        <TestimonialsSection />
        <EcosystemSection />
        <SolutionsSection />
        <ImplementationSection />
        <FaqSection />
        <ClosingSection />
        <SiteFooter />
      </main>
    </DemoProvider>
  );
}

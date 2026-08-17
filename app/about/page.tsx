import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { AboutHero } from "../_components/about/AboutHero";
import { OurStory } from "../_components/about/OurStory";
import { WhoWeAre } from "../_components/about/WhoWeAre";
import { WhyMyCabify } from "../_components/about/WhyMyCabify";
import { MissionVision } from "../_components/about/MissionVision";
import { OurValues } from "../_components/about/OurValues";
import { SupportJourney } from "../_components/about/SupportJourney";
import { AboutClosingCta } from "../_components/about/AboutClosingCta";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <AboutHero />
      <OurStory />
      <WhoWeAre />
      <WhyMyCabify />
      <MissionVision />
      <OurValues />
      <SupportJourney />
      <AboutClosingCta />
      <SiteFooter />
    </>
  );
}

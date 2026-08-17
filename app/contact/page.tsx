import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { ContactHero } from "../_components/contact/ContactHero";
import { EnquiryArea } from "../_components/contact/EnquiryArea";
import { DirectContactMethods } from "../_components/contact/DirectContactMethods";
import { WhatHappensNext } from "../_components/contact/WhatHappensNext";
import { OfficeAndMap } from "../_components/contact/OfficeAndMap";
import { ContactFaq } from "../_components/contact/ContactFaq";
import { ContactClosingCta } from "../_components/contact/ContactClosingCta";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <EnquiryArea />
      <DirectContactMethods />
      <WhatHappensNext />
      <OfficeAndMap />
      <ContactFaq />
      <ContactClosingCta />
      <SiteFooter />
    </>
  );
}

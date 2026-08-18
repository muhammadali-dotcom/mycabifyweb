import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { EnquiryArea } from "../_components/contact/EnquiryArea";
import { OfficeAndMap } from "../_components/contact/OfficeAndMap";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <EnquiryArea />
      <OfficeAndMap />
      <SiteFooter />
    </>
  );
}

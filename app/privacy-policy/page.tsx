import { LegalPage } from "../_components/LegalPage";
import { legal } from "../_data/legal";

export default function Page() {
  return <LegalPage data={legal["privacy-policy"]} />;
}

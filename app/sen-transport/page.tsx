import { SolutionDetailPage } from "../_components/SolutionDetailPage";
import { solutions } from "../_data/solutions";

export default function Page() {
  return <SolutionDetailPage data={solutions["sen-transport"]} />;
}

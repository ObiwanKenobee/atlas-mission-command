import PodCard from "./PodCard";
import { pods } from "@/data/mockData";

const PodSection = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">Pod Orchestration</h3>
      <p className="text-xs text-muted-foreground">Deployable mission pods and their current operational status</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pods.map((pod) => (
        <PodCard key={pod.name} {...pod} />
      ))}
    </div>
  </section>
);

export default PodSection;

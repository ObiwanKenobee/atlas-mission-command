import PodCard from "./PodCard";
import { pods } from "@/data/mockData";
import StaggeredGrid, { StaggeredItem } from "./StaggeredGrid";

const PodSection = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">Pod Orchestration</h3>
      <p className="text-xs text-muted-foreground">Deployable mission pods and their current operational status</p>
    </div>
    <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pods.map((pod) => (
        <StaggeredItem key={pod.name}>
          <PodCard {...pod} />
        </StaggeredItem>
      ))}
    </StaggeredGrid>
  </section>
);

export default PodSection;

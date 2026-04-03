import KpiCard from "./KpiCard";
import { kpiData } from "@/data/mockData";
import StaggeredGrid, { StaggeredItem } from "./StaggeredGrid";

const KpiSection = () => (
  <section className="container mx-auto px-4 lg:px-6">
    <StaggeredGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {kpiData.map((kpi) => (
        <StaggeredItem key={kpi.label}>
          <KpiCard {...kpi} />
        </StaggeredItem>
      ))}
    </StaggeredGrid>
  </section>
);

export default KpiSection;

import KpiCard from "./KpiCard";
import { kpiData } from "@/data/mockData";

const KpiSection = () => (
  <section className="container mx-auto px-4 lg:px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {kpiData.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  </section>
);

export default KpiSection;

import { architectureLayers } from "@/data/mockData";
import { ArrowDown } from "lucide-react";

const layerColors = [
  "border-primary/40 bg-primary/5",
  "border-primary/30 bg-primary/5",
  "border-secondary/30 bg-secondary/5",
  "border-accent/30 bg-accent/5",
  "border-primary/20 bg-primary/5",
  "border-secondary/20 bg-secondary/5",
];

const ArchitectureFlow = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">System Architecture</h3>
      <p className="text-xs text-muted-foreground">Atlas Sanctum full-stack intelligence and execution framework</p>
    </div>
    <div className="glass rounded-2xl p-5 lg:p-8">
      <div className="max-w-xl mx-auto space-y-0">
        {architectureLayers.map((layer, i) => (
          <div key={layer.name}>
            <div className={`rounded-xl border p-4 ${layerColors[i]}`}>
              <p className="text-sm font-semibold text-foreground">{layer.name}</p>
              <p className="text-[11px] text-muted-foreground">{layer.description}</p>
            </div>
            {i < architectureLayers.length - 1 && (
              <div className="flex justify-center py-1.5">
                <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureFlow;

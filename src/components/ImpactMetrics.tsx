import { impactMetrics } from "@/data/mockData";

const barColors: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const ImpactMetrics = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">Verified Impact</h3>
      <p className="text-xs text-muted-foreground">Measured outcomes across active mission regions</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {impactMetrics.map((metric) => {
        const pct = Math.min((metric.value / metric.target) * 100, 100);
        return (
          <div key={metric.label} className="glass rounded-xl p-5">
            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
            <div className="flex items-baseline gap-2 mb-3">
              <p className="text-xl font-bold text-foreground">{metric.value.toLocaleString()}</p>
              <p className="text-[11px] text-muted-foreground">{metric.unit}</p>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden mb-1.5">
              <div
                className={`h-full rounded-full ${barColors[metric.color]} transition-all duration-700`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground text-right">
              Target: {metric.target.toLocaleString()} {metric.unit}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default ImpactMetrics;

import { deploymentZones } from "@/data/mockData";

const riskColors: Record<string, string> = {
  Low: "bg-secondary text-secondary-foreground",
  Medium: "bg-accent text-accent-foreground",
  High: "bg-destructive text-destructive-foreground",
};

const MissionMapPanel = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">Region Deployment Map</h3>
      <p className="text-xs text-muted-foreground">Active mission zones and operational status</p>
    </div>
    <div className="glass rounded-2xl p-4 lg:p-6 relative overflow-hidden" style={{ minHeight: 340 }}>
      {/* Simulated map background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Simplified world outline */}
          <ellipse cx="50" cy="30" rx="45" ry="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" />
          <line x1="5" y1="30" x2="95" y2="30" stroke="hsl(var(--border))" strokeWidth="0.15" />
          <line x1="50" y1="5" x2="50" y2="55" stroke="hsl(var(--border))" strokeWidth="0.15" />
          {[15, 20, 25, 35, 40, 45].map((y) => (
            <line key={y} x1="5" y1={y} x2="95" y2={y} stroke="hsl(var(--border))" strokeWidth="0.08" />
          ))}
          {[20, 30, 40, 60, 70, 80].map((x) => (
            <line key={x} x1={x} y1="5" x2={x} y2="55" stroke="hsl(var(--border))" strokeWidth="0.08" />
          ))}
        </svg>
      </div>

      {/* Zone markers */}
      {deploymentZones.map((zone) => (
        <div
          key={zone.name}
          className="absolute group"
          style={{ left: `${zone.x}%`, top: `${zone.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
            <div className="absolute -inset-2 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
          </div>
          <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden group-hover:block z-10 glass rounded-lg p-3 min-w-[180px]">
            <p className="text-xs font-semibold text-foreground">{zone.name}</p>
            <p className="text-[10px] text-muted-foreground">{zone.missionType}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] text-muted-foreground">{zone.podCount} pods</span>
              <span className={`text-[9px] font-medium rounded-full px-1.5 py-0.5 ${riskColors[zone.riskLevel]}`}>
                {zone.riskLevel}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Zone cards below map */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-2 mt-4 pt-4 border-t border-border/30" style={{ marginTop: 200 }}>
        {deploymentZones.map((zone) => (
          <div key={zone.name} className="rounded-lg bg-muted/50 p-3">
            <p className="text-[11px] font-semibold text-foreground">{zone.name}</p>
            <p className="text-[10px] text-muted-foreground">{zone.missionType}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-primary font-medium">{zone.podCount} pods</span>
              <span className={`text-[9px] font-medium rounded-full px-1.5 py-0.5 ${riskColors[zone.riskLevel]}`}>
                {zone.riskLevel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionMapPanel;

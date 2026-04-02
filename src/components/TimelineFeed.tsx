import { timelineEvents } from "@/data/mockData";
import { AlertTriangle, Zap, Shield, Radio, BarChart3, Radar } from "lucide-react";

const categoryConfig: Record<string, { icon: React.FC<{ className?: string }>; color: string }> = {
  Alert: { icon: AlertTriangle, color: "text-destructive" },
  Intelligence: { icon: Radar, color: "text-primary" },
  Deel: { icon: Shield, color: "text-secondary" },
  Operations: { icon: Radio, color: "text-accent" },
  Impact: { icon: BarChart3, color: "text-primary" },
};

const TimelineFeed = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">Live Operations Timeline</h3>
      <p className="text-xs text-muted-foreground">Real-time mission events and system activity</p>
    </div>
    <div className="glass rounded-2xl p-5 lg:p-6">
      <div className="space-y-0">
        {timelineEvents.map((event, i) => {
          const cfg = categoryConfig[event.category] || { icon: Zap, color: "text-muted-foreground" };
          const Icon = cfg.icon;
          return (
            <div key={i} className="flex gap-4 pb-5 last:pb-0 relative">
              {/* Vertical line */}
              {i < timelineEvents.length - 1 && (
                <div className="absolute left-[17px] top-8 bottom-0 w-px bg-border/50" />
              )}
              <div className={`relative z-10 flex-shrink-0 h-9 w-9 rounded-lg bg-muted flex items-center justify-center`}>
                <Icon className={`h-4 w-4 ${cfg.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-medium text-foreground">{event.title}</p>
                  <span className="text-[9px] font-medium text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                    {event.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>
                <p className="text-[10px] text-muted-foreground mt-1 font-mono">{event.time} UTC</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TimelineFeed;

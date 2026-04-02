import { ArrowRight, Users } from "lucide-react";

const colorMap: Record<string, { bar: string; badge: string }> = {
  primary: { bar: "bg-primary", badge: "bg-primary/10 text-primary" },
  secondary: { bar: "bg-secondary", badge: "bg-secondary/10 text-secondary" },
  accent: { bar: "bg-accent", badge: "bg-accent/10 text-accent" },
};

interface PodCardProps {
  name: string;
  region: string;
  purpose: string;
  roles: string[];
  status: string;
  progress: number;
  teamSize: number;
  color: string;
}

const PodCard = ({ name, region, purpose, roles, status, progress, teamSize, color }: PodCardProps) => {
  const c = colorMap[color] || colorMap.primary;
  return (
    <div className="glass rounded-xl p-5 flex flex-col hover:border-primary/30 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-sm font-semibold text-foreground">{name}</h4>
          <p className="text-[11px] text-muted-foreground">{region}</p>
        </div>
        <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${c.badge}`}>{status}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">{purpose}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {roles.map((r) => (
          <span key={r} className="text-[10px] text-muted-foreground bg-muted rounded-md px-2 py-0.5">{r}</span>
        ))}
      </div>
      {/* Progress */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-muted-foreground">Progress</span>
          <span className="text-[10px] font-medium text-foreground">{progress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className={`h-full rounded-full ${c.bar} transition-all duration-500`} style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Users className="h-3 w-3" /> {teamSize} members
        </div>
        <button className="flex items-center gap-1 text-[10px] font-medium text-primary hover:underline">
          Open Pod <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default PodCard;

import { TrendingUp, Target, Globe, Clock, ShieldCheck, MapPin, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Target, Globe, Clock, ShieldCheck, MapPin, CheckCircle,
};

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  trend: string;
  icon: string;
}

const KpiCard = ({ label, value, change, icon }: KpiCardProps) => {
  const Icon = iconMap[icon] || Target;
  return (
    <div className="glass rounded-xl p-4 lg:p-5 group hover:border-primary/30 transition-all duration-300 hover:glow-primary">
      <div className="flex items-start justify-between mb-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex items-center gap-1 text-secondary text-[11px] font-medium">
          <TrendingUp className="h-3 w-3" />
          {change}
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default KpiCard;

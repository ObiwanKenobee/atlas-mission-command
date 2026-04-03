import { TrendingUp, Target, Globe, Clock, ShieldCheck, MapPin, CheckCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

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

function useCountUp(end: number, duration = 1200) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return { count, ref };
}

const KpiCard = ({ label, value, change, icon }: KpiCardProps) => {
  const Icon = iconMap[icon] || Target;
  const numericValue = parseFloat(value);
  const isNumeric = !isNaN(numericValue);
  const suffix = isNumeric ? value.replace(/[\d.]+/, "") : "";
  const { count, ref } = useCountUp(isNumeric ? numericValue : 0);

  return (
    <div ref={ref} className="glass rounded-xl p-4 lg:p-5 group hover:border-primary/30 transition-all duration-300 hover:glow-primary">
      <div className="flex items-start justify-between mb-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex items-center gap-1 text-secondary text-[11px] font-medium">
          <TrendingUp className="h-3 w-3" />
          {change}
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground tracking-tight">
        {isNumeric ? `${count}${suffix}` : value}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export default KpiCard;

import { Globe, Plus, Rocket, Users, Clock, ChevronDown } from "lucide-react";

const Header = () => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  const dateStr = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Globe className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-foreground">Atlas Sanctum</h1>
              <p className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">Mission Control</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-2.5 py-0.5 text-[10px] font-semibold text-secondary uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse-glow" />
            Live System
          </span>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="h-3.5 w-3.5" />
            East Africa
            <ChevronDown className="h-3 w-3" />
          </button>
          <div className="text-xs text-muted-foreground font-mono">
            {dateStr} · {timeStr} UTC
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors">
            <Plus className="h-3.5 w-3.5" /> Create Mission
          </button>
          <button className="hidden sm:flex items-center gap-1.5 rounded-lg border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary hover:bg-secondary/20 transition-colors">
            <Rocket className="h-3.5 w-3.5" /> Deploy Pod
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20 transition-colors">
            <Users className="h-3.5 w-3.5" /> Hire via Deel
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

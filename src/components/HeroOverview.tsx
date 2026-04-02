import { ArrowRight, Zap, Globe, Shield } from "lucide-react";

const HeroOverview = () => (
  <section className="container mx-auto px-4 py-8 lg:px-6">
    <div className="glass rounded-2xl p-6 lg:p-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-2 items-center">
        {/* Left */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3">
            Deploy intelligence globally,{" "}
            <span className="text-gradient-primary">instantly.</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-6">
            Atlas Sanctum orchestrates planetary-scale missions through AI-powered simulation, 
            real-time field intelligence, and seamless global workforce deployment powered by Deel.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse-glow" />
              12 missions active
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              5 regions monitored
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
              98% compliance
            </div>
          </div>
        </div>

        {/* Right - Partnership Visualization */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="glass rounded-xl p-4 text-center glow-primary">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-xs font-semibold text-foreground">Atlas Sanctum</p>
              <p className="text-[10px] text-muted-foreground">Intelligence & Orchestration</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="h-px w-12 bg-gradient-to-r from-primary to-secondary" />
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-primary" />
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <Shield className="h-3 w-3 text-secondary" />
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-primary to-secondary" />
              <p className="text-[9px] text-muted-foreground mt-1">Live Integration</p>
            </div>
            <div className="glass rounded-xl p-4 text-center glow-secondary">
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-xs font-semibold text-foreground">Deel</p>
              <p className="text-[10px] text-muted-foreground">Global Execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroOverview;

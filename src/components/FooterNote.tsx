import { Globe } from "lucide-react";

const FooterNote = () => (
  <footer className="container mx-auto px-4 lg:px-6 py-8 pb-12">
    <div className="glass rounded-2xl p-6 lg:p-8 text-center relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative">
        <Globe className="h-8 w-8 text-primary mx-auto mb-4 opacity-60" />
        <p className="text-sm font-medium text-foreground max-w-2xl mx-auto leading-relaxed">
          Atlas Sanctum transforms intelligence into action through simulation, global talent deployment, 
          and verified impact — operating at the intersection of technology, policy, and human resilience.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-muted-foreground">
          <span>© 2026 Atlas Sanctum</span>
          <span>·</span>
          <span>Powered by Deel</span>
          <span>·</span>
          <span>Mission Control v1.0</span>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterNote;

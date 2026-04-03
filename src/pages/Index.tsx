import { useState } from "react";
import Header from "@/components/Header";
import HeroOverview from "@/components/HeroOverview";
import KpiSection from "@/components/KpiSection";
import InteractiveMap from "@/components/InteractiveMap";
import PodSection from "@/components/PodSection";
import HiringPipeline from "@/components/HiringPipeline";
import TimelineFeed from "@/components/TimelineFeed";
import ImpactMetrics from "@/components/ImpactMetrics";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import FooterNote from "@/components/FooterNote";
import AnimatedSection from "@/components/AnimatedSection";
import InvestorDemoOverlay from "@/components/InvestorDemoOverlay";
import { Play } from "lucide-react";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Investor Demo button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setDemoOpen(true)}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors glow-primary"
        >
          <Play className="h-3.5 w-3.5" /> Investor Demo
        </button>
      </div>

      <AnimatedSection>
        <div id="hero"><HeroOverview /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="kpis"><KpiSection /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <InteractiveMap />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <div id="pods"><PodSection /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <div id="hiring"><HiringPipeline /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <div id="timeline"><TimelineFeed /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <div id="impact"><ImpactMetrics /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <div id="architecture"><ArchitectureFlow /></div>
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <FooterNote />
      </AnimatedSection>

      <InvestorDemoOverlay isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default Index;

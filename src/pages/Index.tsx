import Header from "@/components/Header";
import HeroOverview from "@/components/HeroOverview";
import KpiSection from "@/components/KpiSection";
import MissionMapPanel from "@/components/MissionMapPanel";
import PodSection from "@/components/PodSection";
import HiringPipeline from "@/components/HiringPipeline";
import TimelineFeed from "@/components/TimelineFeed";
import ImpactMetrics from "@/components/ImpactMetrics";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import FooterNote from "@/components/FooterNote";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroOverview />
    <KpiSection />
    <MissionMapPanel />
    <PodSection />
    <HiringPipeline />
    <div className="container mx-auto px-4 lg:px-6 py-6 grid lg:grid-cols-2 gap-6">
      <TimelineFeed />
      <ImpactMetrics />
    </div>
    <ArchitectureFlow />
    <FooterNote />
  </div>
);

export default Index;

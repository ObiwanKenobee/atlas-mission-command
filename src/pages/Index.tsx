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
    <TimelineFeed />
    <ImpactMetrics />
    <ArchitectureFlow />
    <FooterNote />
  </div>
);

export default Index;

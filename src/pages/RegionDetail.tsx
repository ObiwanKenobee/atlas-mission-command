import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, MapPin, Users, Target, Shield } from "lucide-react";
import { pods, deploymentZones, hiringPipeline } from "@/data/mockData";

const RegionDetail = () => {
  const { regionName } = useParams();
  const decodedRegion = decodeURIComponent(regionName || "");

  const zone = deploymentZones.find((z) => z.name.toLowerCase().replace(/[\s/]+/g, "-") === decodedRegion);
  const regionPods = pods.filter((p) => zone?.name.includes(p.region));
  const regionHires = hiringPipeline.filter((h) => zone?.name.includes(h.region));

  if (!zone) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Region not found.</p>
          <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">← Back to Mission Control</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back to Mission Control
        </Link>

        <AnimatedSection>
          <div className="glass rounded-2xl p-6 lg:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{zone.name}</h2>
                <p className="text-sm text-muted-foreground">{zone.missionType}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-muted/40 p-4 text-center">
                <Target className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{zone.status}</p>
                <p className="text-[10px] text-muted-foreground">Status</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4 text-center">
                <Users className="h-5 w-5 text-secondary mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{zone.podCount}</p>
                <p className="text-[10px] text-muted-foreground">Active Pods</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4 text-center">
                <Shield className="h-5 w-5 text-accent mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{zone.riskLevel}</p>
                <p className="text-[10px] text-muted-foreground">Risk Level</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {regionPods.length > 0 && (
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Pods in Region</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {regionPods.map((pod) => (
                  <Link
                    key={pod.name}
                    to={`/mission/${pod.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-xl bg-muted/40 p-4 hover:bg-muted/60 transition-colors"
                  >
                    <p className="text-sm font-semibold text-foreground">{pod.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{pod.purpose}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[10px] text-primary">{pod.teamSize} members</span>
                      <span className="text-[10px] text-muted-foreground">{pod.progress}%</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {regionHires.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Hiring Pipeline</h3>
              <div className="space-y-3">
                {regionHires.map((hire) => (
                  <div key={hire.role} className="rounded-xl bg-muted/40 p-4">
                    <p className="text-sm font-semibold text-foreground">{hire.role}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{hire.daysInPipeline}d in pipeline</span>
                      <span className="text-[10px] font-semibold rounded-full px-2.5 py-0.5 bg-secondary/10 text-secondary">{hire.stage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default RegionDetail;

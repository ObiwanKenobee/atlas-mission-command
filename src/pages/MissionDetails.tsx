import { useParams, Link } from "react-router-dom";
import { pods } from "@/data/mockData";
import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { ArrowLeft, Users, MapPin, BarChart3 } from "lucide-react";

const MissionDetails = () => {
  const { podName } = useParams();
  const pod = pods.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === podName);

  if (!pod) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Mission pod not found.</p>
          <Link to="/" className="text-primary text-sm mt-4 inline-block hover:underline">← Back to Mission Control</Link>
        </div>
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };
  const barColor: Record<string, string> = { primary: "bg-primary", secondary: "bg-secondary", accent: "bg-accent" };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back to Mission Control
        </Link>

        <AnimatedSection>
          <div className="glass rounded-2xl p-6 lg:p-8 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">{pod.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{pod.purpose}</p>
              </div>
              <span className={`text-xs font-semibold rounded-full px-3 py-1 ${colorMap[pod.color]}`}>{pod.status}</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-xl bg-muted/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Region</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{pod.region}</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-secondary" />
                  <span className="text-xs text-muted-foreground">Team Size</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{pod.teamSize} members</p>
              </div>
              <div className="rounded-xl bg-muted/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground">Progress</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{pod.progress}%</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs text-muted-foreground mb-2">Mission Progress</p>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${barColor[pod.color]} transition-all duration-700`} style={{ width: `${pod.progress}%` }} />
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-3">Assigned Roles</p>
              <div className="flex flex-wrap gap-2">
                {pod.roles.map((r) => (
                  <span key={r} className="text-xs text-foreground bg-muted rounded-lg px-3 py-1.5">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MissionDetails;

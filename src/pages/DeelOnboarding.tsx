import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, CreditCard, UserCheck, CheckCircle } from "lucide-react";
import { hiringPipeline, hiringStages } from "@/data/mockData";

const stageIcons = [FileText, FileText, UserCheck, Shield, CreditCard];

const DeelOnboarding = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 lg:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Mission Control
      </Link>

      <AnimatedSection>
        <div className="flex items-center gap-3 mb-6">
          <div className="rounded-lg bg-secondary/10 p-2">
            <Shield className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Deel Onboarding Panel</h2>
            <p className="text-sm text-muted-foreground">Global workforce onboarding and compliance management</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Pipeline stages overview */}
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl p-6 mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Pipeline Stages</h3>
          <div className="grid grid-cols-5 gap-3">
            {hiringStages.map((stage, i) => {
              const Icon = stageIcons[i];
              const count = hiringPipeline.filter((h) => h.stage === stage).length;
              return (
                <div key={stage} className="rounded-xl bg-muted/40 p-4 text-center">
                  <Icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                  <p className="text-[11px] font-semibold text-foreground">{stage}</p>
                  <p className="text-lg font-bold text-secondary mt-1">{count}</p>
                  <p className="text-[10px] text-muted-foreground">candidates</p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Individual candidates */}
      <AnimatedSection delay={0.2}>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Active Candidates</h3>
          <div className="space-y-3">
            {hiringPipeline.map((hire) => {
              const si = hiringStages.indexOf(hire.stage);
              return (
                <div key={hire.role} className="rounded-xl bg-muted/40 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{hire.role}</p>
                      <p className="text-[11px] text-muted-foreground">{hire.region} · {hire.daysInPipeline}d in pipeline</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {si === hiringStages.length - 1 && <CheckCircle className="h-3.5 w-3.5 text-secondary" />}
                      <span className="text-[10px] font-semibold rounded-full px-2.5 py-0.5 bg-secondary/10 text-secondary">{hire.stage}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {hiringStages.map((_, i) => (
                      <div key={i} className="flex-1">
                        <div className={`h-1.5 rounded-full ${i <= si ? "bg-secondary" : "bg-muted"} transition-all`} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default DeelOnboarding;

import Header from "@/components/Header";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, CheckCircle, Globe, Users, Shield } from "lucide-react";

const steps = [
  { icon: Globe, label: "Select Region", description: "Choose target deployment region and mission zone", done: true },
  { icon: Users, label: "Assemble Team", description: "Define roles and activate hiring pipeline via Deel", done: true },
  { icon: Shield, label: "Compliance Check", description: "Verify regional compliance and legal requirements", done: false },
  { icon: Rocket, label: "Deploy Pod", description: "Launch the pod with full operational capabilities", done: false },
];

const PodDeployment = () => (
  <PageTransition><div className="min-h-screen bg-background">
    <Header />
    <div className="container mx-auto px-4 lg:px-6 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to Mission Control
      </Link>

      <AnimatedSection>
        <h2 className="text-xl font-bold text-foreground mb-2">Pod Deployment Flow</h2>
        <p className="text-sm text-muted-foreground mb-8">Step-by-step pod creation and deployment process</p>

        <div className="glass rounded-2xl p-6 lg:p-8">
          <div className="max-w-md mx-auto space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative">
                  <div className="flex gap-4 items-start">
                    <div className="relative z-10">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${step.done ? "bg-secondary/20" : "bg-muted"}`}>
                        {step.done ? <CheckCircle className="h-5 w-5 text-secondary" /> : <Icon className="h-5 w-5 text-muted-foreground" />}
                      </div>
                    </div>
                    <div className="pb-8">
                      <p className={`text-sm font-semibold ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-border/50" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default PodDeployment;

import { hiringPipeline, hiringStages } from "@/data/mockData";
import { Shield, ArrowRight } from "lucide-react";

const stageIndex = (stage: string) => hiringStages.indexOf(stage);

const HiringPipeline = () => (
  <section className="container mx-auto px-4 lg:px-6 py-6">
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-lg bg-secondary/10 p-2">
        <Shield className="h-5 w-5 text-secondary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">Deel Global Hiring Pipeline</h3>
        <p className="text-xs text-muted-foreground">
          Atlas Sanctum orchestrates the mission. Deel makes human deployment operational.
        </p>
      </div>
    </div>

    <div className="glass rounded-2xl p-5 lg:p-6">
      {/* Stage headers */}
      <div className="hidden md:grid grid-cols-5 gap-2 mb-6">
        {hiringStages.map((stage, i) => (
          <div key={stage} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary">
                {i + 1}
              </div>
              {i < hiringStages.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </div>
            <p className="text-[10px] font-medium text-muted-foreground">{stage}</p>
          </div>
        ))}
      </div>

      {/* Candidates */}
      <div className="space-y-3">
        {hiringPipeline.map((hire) => {
          const si = stageIndex(hire.stage);
          return (
            <div key={hire.role} className="rounded-xl bg-muted/40 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">{hire.role}</p>
                  <p className="text-[11px] text-muted-foreground">{hire.region} · {hire.daysInPipeline}d in pipeline</p>
                </div>
                <span className="text-[10px] font-semibold rounded-full px-2.5 py-0.5 bg-secondary/10 text-secondary">
                  {hire.stage}
                </span>
              </div>
              {/* Progress stepper */}
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
  </section>
);

export default HiringPipeline;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Play } from "lucide-react";

const demoSteps = [
  { target: "hero", title: "Mission Overview", description: "Atlas Sanctum deploys intelligence globally through AI-powered simulation and real-time field operations, integrated with Deel for workforce execution.", position: "bottom" },
  { target: "kpis", title: "Key Performance Indicators", description: "Real-time operational metrics showing active missions, pod deployments, hiring cycles, and compliance health across all regions.", position: "bottom" },
  { target: "map", title: "Region Deployment Map", description: "Interactive map showing active mission zones with live status indicators, risk levels, and pod distribution across operational regions.", position: "top" },
  { target: "pods", title: "Pod Orchestration", description: "Modular mission pods that can be rapidly assembled and deployed. Each pod has specific expertise, assigned personnel, and measurable progress.", position: "top" },
  { target: "hiring", title: "Deel Global Hiring Pipeline", description: "End-to-end hiring pipeline powered by Deel — from role request to payroll-ready in days, not weeks. Full compliance across 150+ countries.", position: "top" },
  { target: "timeline", title: "Live Operations Feed", description: "Real-time activity stream capturing every mission event — from anomaly detection to contract execution to impact verification.", position: "top" },
  { target: "impact", title: "Verified Impact Metrics", description: "Measurable, verified outcomes including carbon reduction, health improvements, flood risk mitigation, and jobs activated.", position: "top" },
  { target: "architecture", title: "System Architecture", description: "Full-stack intelligence and execution framework — from the Atlas Sanctum OS to field-level Sanctum Nodes and the Deel execution layer.", position: "top" },
];

interface InvestorDemoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorDemoOverlay = ({ isOpen, onClose }: InvestorDemoOverlayProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStep(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const el = document.getElementById(demoSteps[step]?.target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [step, isOpen]);

  if (!isOpen) return null;

  const current = demoSteps[step];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100]"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={onClose} />

        {/* Bottom control bar */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[101] glass rounded-2xl p-4 max-w-xl w-[90%] glow-primary"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Investor Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground">{step + 1} / {demoSteps.length}</span>
              <button onClick={onClose} className="rounded-lg p-1 hover:bg-muted transition-colors">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <h4 className="text-sm font-bold text-foreground mb-1">{current.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">{current.description}</p>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mb-3">
            {demoSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-3 w-3" /> Back
            </button>
            {step < demoSteps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Next <ChevronRight className="h-3 w-3" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="text-xs font-medium text-secondary hover:text-secondary/80 transition-colors"
              >
                Finish Tour
              </button>
            )}
          </div>
        </motion.div>

        {/* Highlight ring around target */}
        <HighlightRing targetId={current.target} />
      </motion.div>
    </AnimatePresence>
  );
};

const HighlightRing = ({ targetId }: { targetId: string }) => {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(targetId);
      if (el) setRect(el.getBoundingClientRect());
    };
    update();
    const timer = setTimeout(update, 500);
    return () => clearTimeout(timer);
  }, [targetId]);

  if (!rect) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute pointer-events-none z-[100]"
      style={{
        top: rect.top - 4 + window.scrollY,
        left: rect.left - 4,
        width: rect.width + 8,
        height: rect.height + 8,
        position: "absolute",
      }}
    >
      <div className="w-full h-full rounded-2xl border-2 border-primary/60 animate-pulse" />
    </motion.div>
  );
};

export default InvestorDemoOverlay;

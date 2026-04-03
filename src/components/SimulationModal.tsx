import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart, Line } from "recharts";

const scenarios = [
  {
    name: "Baseline",
    description: "Current trajectory with no intervention",
    color: "hsl(var(--muted-foreground))",
    metrics: { floodRisk: 78, healthAccess: 34, carbonReduction: 12, jobsCreated: 45, compliance: 80, resilience: 25 },
  },
  {
    name: "Scenario A",
    description: "Pod deployment with Deel fast-track hiring",
    color: "hsl(var(--primary))",
    metrics: { floodRisk: 42, healthAccess: 68, carbonReduction: 56, jobsCreated: 186, compliance: 98, resilience: 72 },
  },
  {
    name: "Scenario B",
    description: "Full Atlas Sanctum + Deel integration",
    color: "hsl(var(--secondary))",
    metrics: { floodRisk: 18, healthAccess: 89, carbonReduction: 84, jobsCreated: 312, compliance: 99, resilience: 91 },
  },
];

const radarData = [
  { metric: "Flood Risk ↓", Baseline: 22, "Scenario A": 58, "Scenario B": 82 },
  { metric: "Health Access", Baseline: 34, "Scenario A": 68, "Scenario B": 89 },
  { metric: "Carbon ↓", Baseline: 12, "Scenario A": 56, "Scenario B": 84 },
  { metric: "Jobs", Baseline: 15, "Scenario A": 62, "Scenario B": 100 },
  { metric: "Compliance", Baseline: 80, "Scenario A": 98, "Scenario B": 99 },
  { metric: "Resilience", Baseline: 25, "Scenario A": 72, "Scenario B": 91 },
];

const timelineData = [
  { month: "M1", Baseline: 5, "Scenario A": 12, "Scenario B": 18 },
  { month: "M2", Baseline: 8, "Scenario A": 28, "Scenario B": 42 },
  { month: "M3", Baseline: 10, "Scenario A": 45, "Scenario B": 68 },
  { month: "M4", Baseline: 12, "Scenario A": 56, "Scenario B": 84 },
  { month: "M5", Baseline: 14, "Scenario A": 62, "Scenario B": 91 },
  { month: "M6", Baseline: 15, "Scenario A": 68, "Scenario B": 95 },
];

const barData = scenarios.map((s) => ({
  name: s.name,
  "Flood Risk ↓": 100 - s.metrics.floodRisk,
  "Health Access": s.metrics.healthAccess,
  "Carbon ↓": s.metrics.carbonReduction,
  Jobs: Math.round(s.metrics.jobsCreated / 3.12),
}));

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimulationModal = ({ isOpen, onClose }: SimulationModalProps) => (
  <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
      <DialogHeader>
        <DialogTitle className="text-foreground text-lg">Simulation Results — Scenario Comparison</DialogTitle>
        <DialogDescription>Comparing intervention outcomes across three operational scenarios</DialogDescription>
      </DialogHeader>

      {/* Scenario Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {scenarios.map((s) => (
          <div key={s.name} className="glass rounded-xl p-4 border-l-2" style={{ borderLeftColor: s.color }}>
            <h4 className="text-sm font-bold text-foreground">{s.name}</h4>
            <p className="text-[10px] text-muted-foreground mt-1">{s.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div><span className="text-lg font-bold text-foreground">{s.metrics.jobsCreated}</span><span className="text-[10px] text-muted-foreground block">Jobs</span></div>
              <div><span className="text-lg font-bold text-foreground">{s.metrics.compliance}%</span><span className="text-[10px] text-muted-foreground block">Compliance</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="glass rounded-xl p-4">
          <h5 className="text-xs font-semibold text-foreground mb-3">Multi-Dimension Comparison</h5>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <Radar name="Baseline" dataKey="Baseline" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted-foreground))" fillOpacity={0.1} />
              <Radar name="Scenario A" dataKey="Scenario A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} />
              <Radar name="Scenario B" dataKey="Scenario B" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Impact Over Time */}
        <div className="glass rounded-xl p-4">
          <h5 className="text-xs font-semibold text-foreground mb-3">Impact Trajectory (6 months)</h5>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 11 }} />
              <Line type="monotone" dataKey="Baseline" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} dot={false} />
              <Line type="monotone" dataKey="Scenario A" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Scenario B" stroke="hsl(var(--secondary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="glass rounded-xl p-4 lg:col-span-2">
          <h5 className="text-xs font-semibold text-foreground mb-3">Outcome Comparison</h5>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 11 }} />
              <Bar dataKey="Flood Risk ↓" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Health Access" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Carbon ↓" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Jobs" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default SimulationModal;

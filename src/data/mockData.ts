export const kpiData = [
  { label: "Active Missions", value: "12", change: "+3", trend: "up", icon: "Target" },
  { label: "Global Pods Deployed", value: "8", change: "+2", trend: "up", icon: "Globe" },
  { label: "Avg Hiring Cycle", value: "3.2 days", change: "-0.8d", trend: "up", icon: "Clock" },
  { label: "Verified Impact Score", value: "91%", change: "+4%", trend: "up", icon: "ShieldCheck" },
  { label: "Regions Active", value: "5", change: "+1", trend: "up", icon: "MapPin" },
  { label: "Compliance Health", value: "98%", change: "+1%", trend: "up", icon: "CheckCircle" },
];

export const deploymentZones = [
  { name: "Nairobi / Nakuru", status: "Active", missionType: "Climate Intelligence", podCount: 3, riskLevel: "Medium", x: 58, y: 52 },
  { name: "Kibera", status: "Active", missionType: "Urban Resilience", podCount: 2, riskLevel: "High", x: 57, y: 54 },
  { name: "UAE", status: "Standby", missionType: "Policy Translation", podCount: 1, riskLevel: "Low", x: 60, y: 40 },
  { name: "Remote Analysts", status: "Active", missionType: "Data & Simulation", podCount: 4, riskLevel: "Low", x: 25, y: 35 },
  { name: "Global Operations", status: "Active", missionType: "Coordination", podCount: 2, riskLevel: "Low", x: 45, y: 30 },
];

export const pods = [
  { name: "Climate Intelligence Pod", region: "Nakuru", purpose: "Flood risk modeling and environmental sensing", roles: ["Geospatial Analyst", "Climate Scientist", "Data Engineer"], status: "Active", progress: 78, teamSize: 6, color: "primary" },
  { name: "Informal Settlement Resilience Pod", region: "Kibera", purpose: "Community infrastructure mapping and intervention planning", roles: ["Field Ops Lead", "Community Liaison", "Urban Planner"], status: "Active", progress: 64, teamSize: 4, color: "secondary" },
  { name: "Health Systems Pod", region: "Nairobi", purpose: "Healthcare access optimization and outbreak prediction", roles: ["Health Data Analyst", "Epidemiologist"], status: "Deploying", progress: 42, teamSize: 3, color: "accent" },
  { name: "Infrastructure Risk Pod", region: "Nakuru", purpose: "Critical infrastructure vulnerability assessment", roles: ["Structural Engineer", "Risk Analyst"], status: "Active", progress: 85, teamSize: 5, color: "primary" },
  { name: "RVE Finance Pod", region: "UAE", purpose: "Regenerative value exchange and impact financing", roles: ["Policy Strategist", "Financial Analyst", "Impact Assessor"], status: "Planning", progress: 30, teamSize: 3, color: "secondary" },
  { name: "Policy Translation Pod", region: "UAE", purpose: "Converting intelligence into actionable policy briefs", roles: ["Policy Strategist", "Regional Advisor"], status: "Active", progress: 82, teamSize: 3, color: "accent" },
];

export const hiringPipeline = [
  { role: "Geospatial Analyst", stage: "Payroll Ready", region: "Nakuru", daysInPipeline: 2.8 },
  { role: "Field Operations Lead", stage: "Onboarding", region: "Kibera", daysInPipeline: 1.5 },
  { role: "Policy Strategist", stage: "Compliance Verified", region: "UAE", daysInPipeline: 3.1 },
  { role: "AI Simulation Engineer", stage: "Contract Issued", region: "Remote", daysInPipeline: 0.8 },
  { role: "Regional Partnerships Manager", stage: "Role Requested", region: "Nairobi", daysInPipeline: 0.2 },
];

export const hiringStages = [
  "Role Requested",
  "Contract Issued",
  "Onboarding",
  "Compliance Verified",
  "Payroll Ready",
];

export const timelineEvents = [
  { time: "16:40", title: "Sanitation impact verified", description: "Baseline metrics captured for 340 households in Kibera informal settlement", category: "Impact" },
  { time: "14:20", title: "Drone survey initiated", description: "Aerial mapping commenced over Nakuru flood corridor zone B-7", category: "Operations" },
  { time: "12:05", title: "Onboarding verified", description: "Field Operations Lead cleared compliance and identity verification via Deel", category: "Deel" },
  { time: "10:30", title: "Deel contract sent", description: "Employment agreement dispatched to Field Ops Lead candidate, Nairobi region", category: "Deel" },
  { time: "09:02", title: "Simulation completed", description: "3 recommended interventions generated from flood risk model v2.4", category: "Intelligence" },
  { time: "08:14", title: "Flood anomaly flagged", description: "Remote sensing detected 23% water level increase in Nakuru river basin", category: "Alert" },
];

export const impactMetrics = [
  { label: "Carbon Reduction", value: 847, unit: "tCO₂e", target: 1200, color: "primary" },
  { label: "Health Outcomes Improved", value: 12400, unit: "people", target: 20000, color: "secondary" },
  { label: "Flood Risk Reduction", value: 34, unit: "%", target: 50, color: "primary" },
  { label: "Households Reached", value: 8200, unit: "households", target: 15000, color: "accent" },
  { label: "Water Recovery", value: 2.4, unit: "M liters", target: 5, color: "secondary" },
  { label: "Jobs Activated", value: 186, unit: "positions", target: 300, color: "primary" },
];

export const architectureLayers = [
  { name: "Atlas Sanctum OS", description: "Core intelligence and orchestration platform", level: 0 },
  { name: "Mission Control Dashboard", description: "Real-time operational visibility and command interface", level: 1 },
  { name: "Pod Orchestration Engine", description: "Dynamic team assembly, task allocation, and resource management", level: 2 },
  { name: "Deel Global Execution Layer", description: "Hiring, onboarding, compliance, and payroll across 150+ countries", level: 3 },
  { name: "Sanctum Nodes", description: "Distributed field sensors, drones, and local intelligence agents", level: 4 },
  { name: "Impact + Value Layer", description: "Verified outcomes, regenerative value exchange, and stakeholder reporting", level: 5 },
];

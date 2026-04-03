import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Switch } from "@/components/ui/switch";
import PageTransition from "@/components/PageTransition";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 lg:px-6 max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Mission Control
          </Link>

          <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-sm text-muted-foreground mb-8">Configure your Mission Control preferences</p>

          {/* Appearance */}
          <div className="glass rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Appearance</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "dark" as const, label: "Dark", icon: Moon },
                { value: "light" as const, label: "Light", icon: Sun },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={`flex flex-col items-center gap-2 rounded-xl p-4 border transition-all ${
                    theme === value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="glass rounded-2xl p-6 mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Mission alerts", desc: "Real-time anomaly and risk notifications" },
                { label: "Hiring updates", desc: "Deel pipeline status changes" },
                { label: "Impact milestones", desc: "Verified outcome notifications" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-foreground">{item.label}</p>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>

          {/* Display */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-foreground mb-4">Display</h2>
            <div className="space-y-4">
              {[
                { label: "Compact mode", desc: "Reduce spacing in dashboards", defaultChecked: false },
                { label: "Animation effects", desc: "Enable motion and transitions", defaultChecked: true },
                { label: "Auto-refresh data", desc: "Live update operational feeds", defaultChecked: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-foreground">{item.label}</p>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.defaultChecked} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Settings;

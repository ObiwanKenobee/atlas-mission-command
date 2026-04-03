import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { deploymentZones } from "@/data/mockData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const zoneCoords: Record<string, [number, number]> = {
  "Nairobi / Nakuru": [36.82, -1.29],
  "Kibera": [36.79, -1.31],
  "UAE": [54.37, 24.45],
  "Remote Analysts": [-73.97, 40.78],
  "Global Operations": [2.35, 48.86],
};

const riskColors: Record<string, string> = {
  Low: "bg-secondary text-secondary-foreground",
  Medium: "bg-accent text-accent-foreground",
  High: "bg-destructive text-destructive-foreground",
};

const InteractiveMap = () => {
  const [tooltip, setTooltip] = useState<typeof deploymentZones[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <section className="container mx-auto px-4 lg:px-6 py-6" id="map">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Region Deployment Map</h3>
        <p className="text-xs text-muted-foreground">Active mission zones and operational status</p>
      </div>
      <div className="glass rounded-2xl overflow-hidden relative" style={{ minHeight: 400 }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140, center: [20, 10] }}
          style={{ width: "100%", height: "100%" }}
          height={400}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(220 30% 14%)"
                    stroke="hsl(220 30% 22%)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "hsl(220 30% 18%)", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {deploymentZones.map((zone) => {
              const coords = zoneCoords[zone.name];
              if (!coords) return null;
              return (
                <Marker
                  key={zone.name}
                  coordinates={coords}
                  onMouseEnter={(e) => {
                    setTooltip(zone);
                    setTooltipPos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <circle r={5} fill="hsl(187 85% 53%)" opacity={0.9} />
                  <circle r={10} fill="hsl(187 85% 53%)" opacity={0.2}>
                    <animate attributeName="r" from="5" to="15" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed z-50 glass rounded-lg p-3 min-w-[180px] pointer-events-none"
              style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 20 }}
            >
              <p className="text-xs font-semibold text-foreground">{tooltip.name}</p>
              <p className="text-[10px] text-muted-foreground">{tooltip.missionType}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-muted-foreground">{tooltip.podCount} pods</span>
                <span className={`text-[9px] font-medium rounded-full px-1.5 py-0.5 ${riskColors[tooltip.riskLevel]}`}>
                  {tooltip.riskLevel}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zone cards */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-2 p-4 border-t border-border/30">
          {deploymentZones.map((zone) => (
            <div key={zone.name} className="rounded-lg bg-muted/50 p-3">
              <p className="text-[11px] font-semibold text-foreground">{zone.name}</p>
              <p className="text-[10px] text-muted-foreground">{zone.missionType}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-primary font-medium">{zone.podCount} pods</span>
                <span className={`text-[9px] font-medium rounded-full px-1.5 py-0.5 ${riskColors[zone.riskLevel]}`}>
                  {zone.riskLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;

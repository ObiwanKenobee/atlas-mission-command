import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MissionDetails from "./pages/MissionDetails.tsx";
import PodDeployment from "./pages/PodDeployment.tsx";
import DeelOnboarding from "./pages/DeelOnboarding.tsx";
import RegionDetail from "./pages/RegionDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mission/:podName" element={<MissionDetails />} />
          <Route path="/deploy" element={<PodDeployment />} />
          <Route path="/onboarding" element={<DeelOnboarding />} />
          <Route path="/region/:regionName" element={<RegionDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

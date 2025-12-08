import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Technology from "@/components/Technology";
import Insurance from "@/components/Insurance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/flota" element={<Fleet />} />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/seguro" element={<Insurance />} />
          <Route path="/contacto" element={<Contact />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
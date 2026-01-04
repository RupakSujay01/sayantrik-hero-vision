import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Business from "./pages/Business";
import Disciplines from "./pages/Disciplines";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import HSE from "./pages/HSE";
import CSR from "./pages/CSR";
import TechnologyProviders from "./pages/TechnologyProviders";
import LctsPartnership from "./pages/LctsPartnership";
import Quality from "./pages/Quality";
import NotFound from "./pages/NotFound";
import { FloatingActionButtons } from "./components/FloatingActionButtons";

import FeedProjects from "./pages/projects/FeedProjects";
import DetailProjects from "./pages/projects/DetailProjects";
import AsBuiltProjects from "./pages/projects/AsBuiltProjects";
import PreBidProjects from "./pages/projects/PreBidProjects";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative"> {/* Added relative for good measure */}

          {/* Skip Navigation Link for Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-background text-foreground px-4 py-2 rounded shadow"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Business />} />
              <Route path="/services" element={<Services />} />
              <Route path="/disciplines" element={<Disciplines />} />

              <Route path="/projects" element={<Projects />}>
                <Route index element={<Navigate to="feed" replace />} />
                <Route path="feed" element={<FeedProjects />} />
                <Route path="detail" element={<DetailProjects />} />
                <Route path="as-built" element={<AsBuiltProjects />} />
                <Route path="pre-bid" element={<PreBidProjects />} />
              </Route>

              <Route path="/contact" element={<Contact />} />
              <Route path="/technology-providers" element={<TechnologyProviders />} />
              <Route path="/lcts-partnership" element={<LctsPartnership />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/hse" element={<HSE />} />
              <Route path="/csr" element={<CSR />} />
              <Route path="/quality" element={<Quality />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <FloatingActionButtons />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

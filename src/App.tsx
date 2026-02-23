import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
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
import DigitalisationProjects from "./pages/projects/DigitalisationProjects";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen relative"> {/* Added relative for good measure */}
      <ScrollToTop />

      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-background text-foreground px-4 py-2 rounded shadow"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname.startsWith('/projects') ? '/projects' : location.pathname}
          >
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Business /></PageTransition>} />
            <Route path="/disciplines" element={<PageTransition><Disciplines /></PageTransition>} />

            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>}>
              <Route index element={<Navigate to="feed" replace />} />
              <Route path="feed" element={<FeedProjects />} />
              <Route path="detail" element={<DetailProjects />} />
              <Route path="as-built" element={<AsBuiltProjects />} />
              <Route path="pre-bid" element={<PreBidProjects />} />
              <Route path="digitalisation" element={<DigitalisationProjects />} />
            </Route>

            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/technology-providers" element={<PageTransition><TechnologyProviders /></PageTransition>} />
            <Route path="/lcts-partnership" element={<PageTransition><LctsPartnership /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/hse" element={<PageTransition><HSE /></PageTransition>} />
            <Route path="/csr" element={<PageTransition><CSR /></PageTransition>} />
            <Route path="/quality" element={<PageTransition><Quality /></PageTransition>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <FloatingActionButtons />
      <Footer />
    </div>
  );
};


export default App;

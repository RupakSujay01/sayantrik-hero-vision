import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { FloatingActionButtons } from "./components/FloatingActionButtons";
import { EnquiryProvider } from "./hooks/useEnquiry";

const Index = React.lazy(() => import("./pages/Index"));
const Services = React.lazy(() => import("./pages/Services"));
const Business = React.lazy(() => import("./pages/Business"));
const Disciplines = React.lazy(() => import("./pages/Disciplines"));
const Projects = React.lazy(() => import("./pages/Projects"));
const ProjectsComingSoon = React.lazy(() => import("./pages/ProjectsComingSoon"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Careers = React.lazy(() => import("./pages/Careers"));
const HSE = React.lazy(() => import("./pages/HSE"));
const CSR = React.lazy(() => import("./pages/CSR"));
const TechnologyProviders = React.lazy(() => import("./pages/TechnologyProviders"));
const LctsPartnership = React.lazy(() => import("./pages/LctsPartnership"));
const Quality = React.lazy(() => import("./pages/Quality"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const FeedProjects = React.lazy(() => import("./pages/projects/FeedProjects"));
const DetailProjects = React.lazy(() => import("./pages/projects/DetailProjects"));
const PreBidProjects = React.lazy(() => import("./pages/projects/PreBidProjects"));
const DigitalisationProjects = React.lazy(() => import("./pages/projects/DigitalisationProjects"));

import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <EnquiryProvider>
            <AppContent />
          </EnquiryProvider>
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
          <Suspense fallback={<LoadingSpinner />} key={location.pathname}>
            <Routes
              location={location}
              key={location.pathname.startsWith('/projects') ? '/projects' : location.pathname}
            >
              <Route path="/" element={<PageTransition><Index /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Business /></PageTransition>} />
              <Route path="/disciplines" element={<PageTransition><Disciplines /></PageTransition>} />

              {/* <Route path="/projects" element={<PageTransition><ProjectsComingSoon /></PageTransition>} /> */}
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>}>
                <Route index element={<Navigate to="feed" replace />} />
                <Route path="feed" element={<FeedProjects />} />
                <Route path="detail" element={<DetailProjects />} />
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
          </Suspense>
        </AnimatePresence>
      </main>

      <FloatingActionButtons />
      <Footer />
      <CookieBanner />
    </div>
  );
};


export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import { FloatingActionButtons } from "./components/FloatingActionButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
              <Route path="/business" element={<Business />} />
              <Route path="/services" element={<Services />} />
              <Route path="/disciplines" element={<Disciplines />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/hse" element={<HSE />} />
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

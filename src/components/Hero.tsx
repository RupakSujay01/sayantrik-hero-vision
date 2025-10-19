import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroEarth from "@/assets/hero-earth.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-36">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroEarth})` }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-6 md:pt-8 pb-40">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Your Trusted Partner for Multi-discipline Engineering Excellence
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            An emerging engineering consultancy delivering multi-discipline global and domestic services in Oil & Gas, Refinery, Petrochemicals, Chemicals, and Pharmaceutical industries.
          </p>

          
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-border shadow-lg">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-samsung-blue">13</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Years</div>
              </div>
              <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-samsung-blue">250+</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Projects</div>
              </div>
              <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-samsung-blue">1M</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Manhours</div>
              </div>
              <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-samsung-blue">160</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

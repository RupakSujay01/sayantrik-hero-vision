import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroEarth from "@/assets/hero-earth.jpg";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroEarth})` }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 py-20">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Your Trusted Partner for Multi-discipline Engineering Excellence
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-tech-silver max-w-3xl mx-auto leading-relaxed">
            An emerging engineering consultancy delivering multi-discipline global and domestic services in Oil & Gas, Refinery, Petrochemicals, Chemicals, and Pharmaceutical industries.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 hover:scale-105 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Banner */}
        <div ref={statsRef} className={`absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-md border-t border-border transition-all duration-1000 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="space-y-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  13
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  Years
                </div>
              </div>
              
              <div className="space-y-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  250+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  Projects
                </div>
              </div>
              
              <div className="space-y-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  1M
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  Manhours
                </div>
              </div>

              <div className="space-y-2 group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  160
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  Employees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

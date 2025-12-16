import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroEarth from "@/assets/hero-bg.jpg";

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
          <h1 className="font-heading leading-tight text-foreground glow-text">
            Engineering Excellence.<br />
            Global Delivery.<br />
            Innovation Leadership.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-tech-silver max-w-3xl mx-auto leading-relaxed font-medium">
            Your Trusted Partner for Multi-discipline Engineering Excellence in Oil & Gas, Refinery, Petrochemicals and Chemical industries.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/services">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Banner (no glow) */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">Engineering Excellence
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide">Since 2012</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">250+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide">Global Presence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">160+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wide">Expert Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

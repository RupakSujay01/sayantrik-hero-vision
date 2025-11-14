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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white glow-text">
            Engineering Excellence. Global Delivery. Innovation Leadership.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-tech-silver max-w-3xl mx-auto leading-relaxed">
            Your Trusted Partner for Multi-discipline Engineering Excellence in Oil & Gas, Refinery, Petrochemicals, Chemicals and Pharmaceutical industries
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/services">
              <Button size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-background/10 border-white/20 text-white hover:bg-white/20">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Banner (no glow) */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 border-t border-border">
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">13+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">250+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Global Reach Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">160+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Expert Team Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Engineering Solutions Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            From upstream exploration to downstream refining, we deliver excellence across the entire energy value chain with cutting-edge technologies and proven expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Downstream Refining */}
          <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-3">Downstream Refining</h3>
            <p className="text-muted-foreground mb-4">
              Complete process engineering for refinery operations, catalytic processes, and petrochemical manufacturing.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted-foreground">• Crude Oil Processing</li>
              <li className="text-sm text-muted-foreground">• Catalytic Cracking</li>
              <li className="text-sm text-muted-foreground">• Product Upgrading</li>
            </ul>
            <Link to="/services" className="text-primary hover:underline text-sm font-medium">
              Learn More →
            </Link>
          </div>

          {/* Midstream Processing */}
          <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-3">Midstream Processing</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive natural gas processing, transportation, and LNG/LPG systems engineering.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted-foreground">• Gas Treatment</li>
              <li className="text-sm text-muted-foreground">• NGL Recovery</li>
              <li className="text-sm text-muted-foreground">• Pipeline Systems</li>
            </ul>
            <Link to="/services" className="text-primary hover:underline text-sm font-medium">
              Learn More →
            </Link>
          </div>

          {/* Upstream Production */}
          <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-3">Upstream Production</h3>
            <p className="text-muted-foreground mb-4">
              Innovative solutions for oil & gas production optimization, EOR systems, and offshore platforms.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted-foreground">• Production Systems</li>
              <li className="text-sm text-muted-foreground">• Enhanced Oil Recovery</li>
              <li className="text-sm text-muted-foreground">• Platform Engineering</li>
            </ul>
            <Link to="/services" className="text-primary hover:underline text-sm font-medium">
              Learn More →
            </Link>
          </div>

          {/* Energy & Sustainability */}
          <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-3">Energy & Sustainability</h3>
            <p className="text-muted-foreground mb-4">
              Leading clean energy transition with green hydrogen, carbon capture, and sustainable aviation fuel.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted-foreground">• Green Hydrogen</li>
              <li className="text-sm text-muted-foreground">• Carbon Capture</li>
              <li className="text-sm text-muted-foreground">• Renewable Integration</li>
            </ul>
            <Link to="/services" className="text-primary hover:underline text-sm font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

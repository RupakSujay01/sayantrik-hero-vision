import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Vision & Mission Blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-in">
          {/* Vision Block */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the premier integration partner in the global energy and chemicals sector by 2030, where our technological excellence, digital innovation, and unwavering safety leadership makes us the trusted first choice for owner-operators and EPC companies worldwide.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform the energy and chemicals industry through seamless integration of cutting-edge technologies and comprehensive engineering expertise, delivering superior value to our partners while upholding the highest standards of safety, sustainability, and operational excellence.
            </p>
          </div>
        </div>

        {/* Comprehensive Engineering Solutions */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
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
      </div>
    </section>
  );
};

export default CompanyOverview;

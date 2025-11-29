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
            <h3 className="font-heading text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              To become the premier integration partner in the global energy and chemicals sector by 2030, where our technological excellence, digital innovation, and unwavering safety leadership makes us the trusted first choice for owner-operators and EPC companies worldwide.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-heading text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              To transform the energy and chemicals industry through seamless integration of cutting-edge technologies and comprehensive engineering expertise, delivering superior value to our partners while upholding the highest standards of safety, sustainability, and operational excellence.
            </p>
          </div>
        </div>

        {/* Comprehensive Engineering Solutions */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <h2 className="font-heading text-foreground">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-medium">
            From upstream exploration to downstream refining, we deliver excellence across the entire energy value chain with cutting-edge technologies and proven expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Downstream Refining */}
          <Link to="/services#comprehensive-engineering" className="group bg-card border-2 border-border rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Downstream Refining</h3>
          </Link>

          {/* Midstream Processing */}
          <Link to="/services#comprehensive-engineering" className="group bg-card border-2 border-border rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Midstream Processing</h3>
          </Link>

          {/* Upstream Production */}
          <Link to="/services#comprehensive-engineering" className="group bg-card border-2 border-border rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Upstream Production</h3>
          </Link>

          {/* Energy & Sustainability */}
          <Link to="/services#comprehensive-engineering" className="group bg-card border-2 border-border rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Energy & Sustainability</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

import { Button } from "@/components/ui/button";

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

      </div>
    </section>
  );
};

export default CompanyOverview;

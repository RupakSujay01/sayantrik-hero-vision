import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const CompanyOverview = () => {
  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Vision & Mission Blocks */}
        <div ref={visionRef} className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${
          visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Vision Block */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              To become the premier integration partner in the global energy and chemicals sector by 2030, where our technological excellence, digital innovation, and unwavering safety leadership makes us the trusted first choice for owner-operators and EPC companies worldwide.
            </p>
          </div>

          {/* Mission Block */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              To transform the energy and chemicals industry through seamless integration of cutting-edge technologies and comprehensive engineering expertise, delivering superior value to our partners while upholding the highest standards of safety, sustainability, and operational excellence.
            </p>
          </div>
        </div>

        {/* Narrative & CTA Section */}
        <div ref={ctaRef} className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-1000 ${
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors duration-300">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
            At Sayantrik Engineers, we've built a strong track record of excellence. Our comprehensive engineering solutions are meticulously tailored to meet the unique needs of our clients. We understand the intricate challenges faced by companies, and our team of seasoned professionals is committed to delivering top-tier services.
          </p>
          <div className="pt-6">
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

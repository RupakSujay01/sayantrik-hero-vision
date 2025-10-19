import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Vision & Mission Blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Block */}
          <div className="card-gradient border border-samsung-blue/20 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left group">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-samsung-blue/10 group-hover:bg-samsung-blue/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-samsung-blue"></div>
            </div>
            <h3 className="text-3xl font-bold text-samsung-blue mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To become the premier integration partner in the global energy and chemicals sector by 2030, where our technological excellence, digital innovation, and unwavering safety leadership makes us the trusted first choice for owner-operators and EPC companies worldwide.
            </p>
          </div>

          {/* Mission Block */}
          <div className="card-gradient border border-samsung-blue/20 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right group">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-samsung-blue/10 group-hover:bg-samsung-blue/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-samsung-blue"></div>
            </div>
            <h3 className="text-3xl font-bold text-samsung-blue mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To transform the energy and chemicals industry through seamless integration of cutting-edge technologies and comprehensive engineering expertise, delivering superior value to our partners while upholding the highest standards of safety, sustainability, and operational excellence.
            </p>
          </div>
        </div>

        {/* Narrative & CTA Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Sayantrik Engineers, we've built a strong track record of excellence. Our comprehensive engineering solutions are meticulously tailored to meet the unique needs of our clients. We understand the intricate challenges faced by companies, and our team of seasoned professionals is committed to delivering top-tier services.
          </p>
          <div className="pt-8">
            <Link to="/about">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-samsung-blue hover:bg-samsung-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

import { ServicesSection } from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="w-full px-6 md:px-12">
        <div className="mx-auto space-y-4 animate-fade-in-up w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Services
            </h1>
          </div>

          <ServicesSection />
        </div>
      </div>
    </div>
  );
};

export default Services;

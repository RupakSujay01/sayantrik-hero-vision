import { Briefcase, Target, Wrench, Award, Users } from "lucide-react";

const Services = () => {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h1>
        </div>

        {/* Business Verticals */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Business Verticals
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Our suite of services is extensive and includes, but is not limited to:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Feasibility Studies", desc: "Assessing the viability of your projects is our first step in ensuring their success." },
              { title: "FEED Engineering", desc: "Our experts meticulously plan the front-end engineering design to provide a strong foundation for your projects." },
              { title: "Basic Engineering", desc: "We create detailed plans that form the basis for the successful execution of your projects." },
              { title: "Detailed Engineering", desc: "Our attention to detail ensures the seamless implementation of your projects." },
              { title: "As-Built 3D Modelling", desc: "We document every project as it was constructed, providing a clear picture of the final product." },
              { title: "Project Management and Execution", desc: "We offer full-spectrum project management services to ensure your vision becomes a reality." }
            ].map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Multi-discipline Engineering Services */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Multi-discipline Engineering Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Process Engineering",
              "Piping Engineering",
              "Mechanical Engineering",
              "Electrical Engineering",
              "Instrumentation Engineering",
              "Civil and Structural Engineering",
              "HSE"
            ].map((discipline, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <p className="font-medium">{discipline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Green Hydrogen Plants",
              "LNG / LPG Regasification Plants",
              "Sulphuric Acid Plant",
              "Sulphur Recovery Unit",
              "Tankages",
              "Onshore Pipelines",
              "PSV adequacy checks",
              "Digitalization of plants"
            ].map((expertise, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <p className="text-lg font-medium text-foreground">{expertise}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Services;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lifecyclePhases, industryServices } from "../data/services-data";
import ServicesLifecycle from "../components/ServicesLifecycle";
import { Clock, Users, Laptop, FileText, CheckCircle } from "lucide-react";

const Services = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'lifecycle' | 'industry'>('lifecycle');
  const [activeLifecycleId, setActiveLifecycleId] = useState<string>(lifecyclePhases[0].id);

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePhaseSelect = (id: string) => {
    setActiveLifecycleId(id);
    scrollToSection(`lifecycle-${id}`);
  };

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 animate-fade-in text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            World-class engineering solutions tailored to your project lifecycle and industry needs.
          </p>

          {/* Toggle Navigation */}
          <div className="inline-flex bg-muted/50 p-1.5 rounded-full mb-12 border border-border">
            <button
              onClick={() => setViewMode('lifecycle')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${viewMode === 'lifecycle'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              By Project Phase
            </button>
            <button
              onClick={() => setViewMode('industry')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${viewMode === 'industry'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              By Industry Sector
            </button>
          </div>
        </div>

        {/* View Content */}
        {viewMode === 'lifecycle' ? (
          <div className="animate-fade-in">
            {/* Infographic Navigation */}
            <ServicesLifecycle
              onPhaseSelect={handlePhaseSelect}
              activePhaseId={activeLifecycleId}
            />

            <div className="space-y-24 mt-16">
              {lifecyclePhases.map((phase) => (
                <section
                  key={phase.id}
                  id={`lifecycle-${phase.id}`}
                  className="scroll-mt-32"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-primary/5 p-8 border-b border-border">
                      <h2 className="text-3xl font-heading text-foreground mb-4">
                        {phase.title}
                      </h2>
                      <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                        {phase.fullDescription}
                      </p>
                    </div>

                    <div className="p-8 grid gap-8 md:grid-cols-2">
                      {/* Left Column: Deliverables & Standards */}
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <FileText className="text-primary" size={20} />
                            <h3 className="text-xl font-bold text-foreground">Key Deliverables</h3>
                          </div>
                          <ul className="grid gap-2">
                            {phase.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="text-primary" size={20} />
                            <h3 className="text-xl font-bold text-foreground">Standards Followed</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {phase.standards.map((std, idx) => (
                              <span key={idx} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground border border-border">
                                {std}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Key Stats & Tools */}
                      <div className="space-y-8 md:border-l md:border-border md:pl-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="text-primary" size={20} />
                            <h3 className="text-xl font-bold text-foreground">Typical Duration</h3>
                          </div>
                          <p className="text-muted-foreground font-medium bg-muted/30 p-3 rounded-lg border border-border/50 inline-block">
                            {phase.duration}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Users className="text-primary" size={20} />
                            <h3 className="text-xl font-bold text-foreground">Team Composition</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {phase.teamComposition.map((role, idx) => (
                              <span key={idx} className="bg-primary/10 text-primary-foreground/90 px-3 py-1 rounded-md text-xs font-semibold">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Laptop className="text-primary" size={20} />
                            <h3 className="text-xl font-bold text-foreground">Software Tools</h3>
                          </div>
                          <ul className="space-y-1">
                            {phase.softwareTools.map((tool, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground border-b border-border/50 last:border-0 py-1">
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in space-y-16">
            {industryServices.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-32">
                <h2 className="font-heading text-3xl text-foreground mb-6 border-b border-border pb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-medium">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {service.categories.map((category, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
                  <p className="text-muted-foreground">
                    {service.capability}
                  </p>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Services;

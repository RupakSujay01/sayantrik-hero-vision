import { Briefcase, Target, Wrench, Award, Users, Flame, Factory, Building2, Gauge, Database } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /services#comprehensive-engineering)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <div className="p-3 bg-muted rounded-lg">
            <Briefcase className="w-8 h-8 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-foreground">
            Our Services
          </h1>
        </div>

        {/* Oil & Gas - Onshore & Offshore */}
        <section id="oil-gas" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Oil & Gas – Onshore & Offshore
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Sayantrik delivers full-scope engineering, digitalization, and revamp support for upstream and midstream Oil & Gas assets.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Onshore Units */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Onshore Units</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground font-medium">• Gas–Oil Separation Plants (GOSP)</li>
                <li className="text-muted-foreground">• Early Production Facilities (EPF)</li>
                <li className="text-muted-foreground">• Oil & Gas Gathering Stations</li>
                <li className="text-muted-foreground">• Slug Catchers & Manifolds</li>
                <li className="text-muted-foreground">• Dehydration & Desalting Units</li>
                <li className="text-muted-foreground">• Gas Sweetening (Amine) Units</li>
                <li className="text-muted-foreground">• Gas Compression Stations</li>
                <li className="text-muted-foreground">• Produced Water Treatment Units</li>
                <li className="text-muted-foreground">• Fiscal Metering & Custody Transfer</li>
                <li className="text-muted-foreground">• Cross-country & Field Pipeline Networks</li>
              </ul>
            </div>

            {/* Offshore Units */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Offshore Units</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Wellhead Platforms (WHP)</li>
                <li className="text-muted-foreground">• Central Processing Platforms (CPP)</li>
                <li className="text-muted-foreground">• Riser & Manifold Platforms</li>
                <li className="text-muted-foreground">• Flare Systems</li>
                <li className="text-muted-foreground">• Living Quarters (LQ)</li>
                <li className="text-muted-foreground">• Subsea Tie-backs</li>
                <li className="text-muted-foreground">• Satellite Platforms</li>
                <li className="text-muted-foreground">• Brownfield Deck Modifications</li>
              </ul>
            </div>
          </div>

          {/* Our Capability */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              We support process, piping, mechanical, civil/structural, electrical, instrumentation, stress analysis, laser scanning, 3D modelling, and revamp tie-ins for all Oil & Gas units.
            </p>
          </div>
        </section>

        {/* Refineries */}
        <section id="refineries" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Refineries
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            We engineer all primary processing, conversion, treating, and utility units of modern refineries.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Primary Processing & Conversion */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Primary Processing</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Crude Distillation Unit (CDU)</li>
                <li className="text-muted-foreground">• Vacuum Distillation Unit (VDU)</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Conversion Units</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Fluid Catalytic Cracking Unit (FCCU)</li>
                <li className="text-muted-foreground">• Hydrocracker Unit (HCU)</li>
                <li className="text-muted-foreground">• Delayed Coker Unit (DCU)</li>
                <li className="text-muted-foreground">• Visbreaker Unit</li>
                <li className="text-muted-foreground">• Residue Upgrading Blocks</li>
              </ul>
            </div>

            {/* Reforming & Hydrogen Management */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Reforming & Treating</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Naphtha / Kerosene / Diesel Hydrotreaters</li>
                <li className="text-muted-foreground">• Catalytic Reforming Units (CCR/SRR)</li>
                <li className="text-muted-foreground">• Merox Treaters</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Hydrogen & Sulfur Management</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Hydrogen Generation Unit (SMR)</li>
                <li className="text-muted-foreground">• Amine Treatment Units</li>
                <li className="text-muted-foreground">• Sour Water Stripper (SWS)</li>
                <li className="text-muted-foreground">• Sulfur Recovery Unit (SRU – Claus)</li>
                <li className="text-muted-foreground">• Tail Gas Treatment Unit (TGTU)</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Refinery Offsites</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">• Tank Farms</li>
              <li className="text-muted-foreground">• Blending Systems</li>
              <li className="text-muted-foreground">• Loading/Unloading Areas</li>
              <li className="text-muted-foreground">• Utility Networks</li>
              <li className="text-muted-foreground">• Flare Systems</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              We provide complete multi-discipline engineering, shutdown engineering, brownfield tie-ins, 3D digital twins, laser scanning, and detailed engineering across every refinery unit.
            </p>
          </div>
        </section>

        {/* Petrochemical & Chemical Plants */}
        <section id="petrochemical" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Petrochemical & Chemical Plants
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            We support complex petrochemical, polymer, aromatics, and specialty chemical facilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Olefins & Polymers */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Olefins & Polymers</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Steam Crackers</li>
                <li className="text-muted-foreground">• Ethylene/Propylene Recovery Units</li>
                <li className="text-muted-foreground">• Butadiene Extraction</li>
                <li className="text-muted-foreground">• HDPE / LDPE / PP</li>
                <li className="text-muted-foreground">• PVC / PET / ABS / Nylon / Polycarbonates</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Aromatics (BTX)</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Benzene</li>
                <li className="text-muted-foreground">• Toluene</li>
                <li className="text-muted-foreground">• Mixed Xylene</li>
                <li className="text-muted-foreground">• Paraxylene (PX)</li>
                <li className="text-muted-foreground">• PTA Units</li>
              </ul>
            </div>

            {/* Basic & Specialty Chemicals */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Basic & Specialty Chemicals</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Chlor-Alkali Plants</li>
                <li className="text-muted-foreground">• Sulfuric, Nitric & Phosphoric Acid Plants</li>
                <li className="text-muted-foreground">• Solvent Recovery Plants</li>
                <li className="text-muted-foreground">• Resins & Specialty Chemical Blocks</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              We deliver simulation, sizing, equipment layouts, stress analysis, safety studies, 3D modelling, MTO/BOQ, and complete engineering packages.
            </p>
          </div>
        </section>

        {/* Fertilizer & Methanol Units */}
        <section id="fertilizer" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Gauge className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Fertilizer & Methanol Units
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Complete engineering services for ammonia, urea, syngas and methanol complexes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Fertilizer Units */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Fertilizer Units</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Ammonia Plants</li>
                <li className="text-muted-foreground">• Urea (Prilling/Granulation)</li>
                <li className="text-muted-foreground">• Ammonium Nitrate / Ammonium Sulfate</li>
                <li className="text-muted-foreground">• Phosphatic Fertilizers (DAP, NPK)</li>
              </ul>
            </div>

            {/* Methanol & Derivatives */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Methanol & Derivatives</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Syngas Generation Units</li>
                <li className="text-muted-foreground">• Methanol Synthesis Units</li>
                <li className="text-muted-foreground">• Methanol-to-Olefins (MTO) Units</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Associated Utilities</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• CO₂ Recovery</li>
                <li className="text-muted-foreground">• Steam & Power Systems</li>
                <li className="text-muted-foreground">• Cooling Water Networks</li>
                <li className="text-muted-foreground">• Inert Gas Systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              We support process, piping, mechanical, civil, electrical, instrumentation, 3D modelling, revamp engineering, brownfield tie-ins, and shutdown planning.
            </p>
          </div>
        </section>

        {/* Terminals & Tank Farms */}
        <section id="terminals" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Terminals & Tank Farms
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Engineering support for petroleum product storage, distribution, and loading facilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Storage & Terminal Systems */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Storage</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground">• Crude Oil Tanks</li>
                <li className="text-muted-foreground">• Product Tanks (FO, Diesel, Gasoline)</li>
                <li className="text-muted-foreground">• LPG Spheres</li>
                <li className="text-muted-foreground">• LNG/Ammonia Refrigerated Tanks</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mb-4">Terminal Systems</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Pump Houses</li>
                <li className="text-muted-foreground">• Truck Loading/Unloading Gantries</li>
                <li className="text-muted-foreground">• Marine Terminals / Jetties</li>
                <li className="text-muted-foreground">• Pipeline Routing (AG/UG)</li>
                <li className="text-muted-foreground">• Blending & Metering Systems</li>
                <li className="text-muted-foreground">• SCADA/Automation Integration</li>
              </ul>
            </div>

            {/* Safety Systems */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Safety Systems</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Fire Water Networks</li>
                <li className="text-muted-foreground">• Foam Systems</li>
                <li className="text-muted-foreground">• Gas Detection & Safety Control</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              We deliver tank design support, layout engineering, fire protection systems, pipeline routing, and 3D digitalization.
            </p>
          </div>
        </section>

        {/* Utility & Offsite Systems */}
        <section id="utility" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-7 h-7 text-muted-foreground" />
            <h2 className="font-heading text-foreground">
              Utility & Offsite Systems
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Utilities are the backbone of every process plant — we engineer all utility and offsite facilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Utility Units */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Utility Units</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Boiler Feed Water Systems</li>
                <li className="text-muted-foreground">• Steam Generation / Condensate Recovery</li>
                <li className="text-muted-foreground">• Cooling Water Systems</li>
                <li className="text-muted-foreground">• Chilled Water Networks</li>
                <li className="text-muted-foreground">• Air Separation Units</li>
                <li className="text-muted-foreground">• Instrument Air & Nitrogen</li>
                <li className="text-muted-foreground">• Raw Water / DM Water / RO Plants</li>
                <li className="text-muted-foreground">• Power Distribution, Substations & MCC Rooms</li>
              </ul>
            </div>

            {/* Offsite Facilities */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Offsite Facilities</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">• Flare Systems</li>
                <li className="text-muted-foreground">• ETP / STP Plants</li>
                <li className="text-muted-foreground">• Oily Water Systems</li>
                <li className="text-muted-foreground">• Roads, Drains & Infrastructure</li>
                <li className="text-muted-foreground">• Pipe Racks & Pipe Bridges</li>
                <li className="text-muted-foreground">• Loading/Unloading Areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">Our Capability</h3>
            <p className="text-muted-foreground">
              Multi-discipline utility engineering, equipment sizing, 3D modelling, MTO/BOQ, layouts, stress analysis and complete offsite design.
            </p>
          </div>
        </section>

        {/* Comprehensive Engineering Solutions */}
        <section id="comprehensive-engineering" className="mb-16 animate-fade-in scroll-mt-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              From upstream exploration to downstream refining, we deliver excellence across the entire energy value chain with cutting-edge technologies and proven expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Downstream Refining */}
            <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Downstream Refining</h3>
              <p className="text-muted-foreground mb-4">
                Complete process engineering for refinery operations, catalytic processes, and petrochemical manufacturing.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">• Crude Oil Processing</li>
                <li className="text-sm text-muted-foreground">• Catalytic Cracking</li>
                <li className="text-sm text-muted-foreground">• Product Upgrading</li>
              </ul>
            </div>

            {/* Midstream Processing */}
            <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Midstream Processing</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive natural gas processing, transportation, and LNG/LPG systems engineering.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">• Gas Treatment</li>
                <li className="text-sm text-muted-foreground">• NGL Recovery</li>
                <li className="text-sm text-muted-foreground">• Pipeline Systems</li>
              </ul>
            </div>

            {/* Upstream Production */}
            <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Upstream Production</h3>
              <p className="text-muted-foreground mb-4">
                Innovative solutions for oil & gas production optimization, EOR systems, and offshore platforms.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">• Production Systems</li>
                <li className="text-sm text-muted-foreground">• Enhanced Oil Recovery</li>
                <li className="text-sm text-muted-foreground">• Platform Engineering</li>
              </ul>
            </div>

            {/* Energy & Sustainability */}
            <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">Energy & Sustainability</h3>
              <p className="text-muted-foreground mb-4">
                Leading clean energy transition with green hydrogen, carbon capture, and sustainable aviation fuel.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">• Green Hydrogen</li>
                <li className="text-sm text-muted-foreground">• Carbon Capture</li>
                <li className="text-sm text-muted-foreground">• Renewable Integration</li>
              </ul>
            </div>
          </div>
        </section>

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

      </div>
    </main>
  );
};

export default Services;

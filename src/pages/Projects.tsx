import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import oilPlantImage from "@/assets/oil-plant-hq.jpg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Projects = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("feed");

  const sidebarLinks = [
    { id: "feed", label: "FEED Engineering" },
    { id: "detail", label: "Detail Engineering" },
    { id: "asbuilt", label: "As-Built Engineering" },
    { id: "prebid", label: "Pre-Bid Engineering" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['feed', 'detail', 'asbuilt', 'prebid'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 500) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      let targetId = hash;
      // Map old hashes if necessary, or just use direct IDs
      if (hash === "feed-engineering") targetId = "feed";
      if (hash === "detail-engineering") targetId = "detail";
      if (hash === "as-built-engineering") targetId = "asbuilt";
      if (hash === "pre-bid-engineering") targetId = "prebid";

      scrollToSection(targetId);
    }
  }, [location.hash]);

  const feedProjects = [
    {
      name: "60MW / 90MW LNG / LPG Storage and Regasification",
      location: "5 European Sites",
      description: "FEED+ engineering services for LNG/LPG storage and regasification plants. Scope included feasibility validation, process design, vaporization/storage sizing (30–200 MT), engineering deliverables for all disciplines, RFQ packages, MTOs, and EPC contractor selection support."
    },
    {
      name: "MB-01 Meglumine Project",
      location: "Concept and Basic Engineering",
      description: "Basic engineering for MB-01 Meglumine Project. Scope included process deliverables (P&IDs, line lists), equipment datasheets, piping layouts, BOQs, electrical system design (SLDs, load lists, cable schedules), HVAC system design, clean room design, CSA reports, and 3D modeling."
    },
    {
      name: "15 TPD Green Hydrogen Plant",
      location: "Pre-FEED Engineering",
      description: "Pre-FEED engineering for 15 TPD Green Hydrogen Plant (625 kg/hr) including process design (PFD/P&ID), piping MTOs, civil/structural MTOs, static equipment design, electrical load lists, I/O lists, and electrolyser foundation design."
    },
    {
      name: "2 TPD Green Hydrogen Plant",
      location: "Pre-FEED Engineering",
      description: "Pre-FEED for 2 TPD Green Hydrogen Plant including PFD/P&ID development, piping MTOs, civil/structural MTOs, electrolyser foundation design, electrical lists, and instrumentation scope."
    },
    {
      name: "Centralized Wastewater Treatment Plant",
      location: "Indonesia",
      description: "Development of Preliminary 3D Model and Plot Plan for the Centralized Wastewater Treatment Plant, including major equipment placement and key process lines."
    },
    {
      name: "Water Intake and Pumping Station",
      location: "India - Gujarat",
      description: "Conceptual 3D Layout and Feasibility Study model for the Water Intake structure, pump house, and preliminary piping headers."
    },
    {
      name: "Advanced Wastewater Treatment Facility",
      location: "India - Maharashtra",
      description: "Conceptual Design and 3D Model for FEED submission, including P&ID creation and equipment sizing support."
    },
    {
      name: "RO Plant Pre-Design Study",
      location: "Saudi Arabia",
      description: "Feasibility 3D model generation for plot optimization and preliminary MTO for the large-scale RO Plant."
    }
  ];

  const detailProjects = [
    {
      name: "Compressor Station Project",
      location: "Detailed Engineering",
      description: "Comprehensive detailed engineering and multidisciplinary support for EPC procurement and construction (3 working + 1 standby compressors). Deliverables included: PFDs, P&IDs, datasheets, line/valve lists, GA drawings, stress analysis, 3D model reviews, electrical SLDs, DCS/PLC interface documents, firefighting system design, HVAC layouts, procurement support, and as-built documentation."
    },
    {
      name: "600 MTPD Sulphuric Acid (SA - V) Plant",
      location: "Process Technology Project",
      description: "Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant, covering high-temperature and low-pressure piping, static equipment design, GA drawings, datasheets, P&IDs, plot plans, MTOs, vendor document review, and validation of the basic engineering package for OSBL facilities."
    },
    {
      name: "300 MTPD Sulphuric Acid Plant",
      location: "Detailed Engineering",
      description: "Detailed engineering for a 300 MTPD Sulphuric Acid Plant including civil, structural, piping, electrical, and instrumentation works. Deliverables included: foundations, racks, layouts, static equipment GA drawings, datasheets, P&IDs, MTOs, and vendor reviews with interface to licensor DMCC and client MCFL."
    },
    {
      name: "9 MMTPA CPCL Refinery - Pipelines and Terminals",
      location: "India - Cauvery Basin Refinery",
      description: "End-to-end detailed engineering for onshore pipelines and terminals. Scope covered PFDs, P&IDs, datasheets, HAZOP/SIL support, 3D modeling, plot plans, procurement support, and multidisciplinary design for crude oil/product pipelines and booster stations."
    },
    {
      name: "Thermal Reactor & Incinerator Package - IOCL SRU",
      location: "Detailed Engineering",
      description: "Detailed engineering of Thermal Reactor & Incinerator Packages and 40 static equipment units for IOCL SRU. Scope: review of licensor package, 3D model development, datasheets, GA drawings, fabrication drawings, and as-built documentation."
    },
    {
      name: "HRRL Refinery TEA Injection Package",
      location: "Detailed Engineering",
      description: "Detailed engineering for TEA Injection Package at HRRL Refinery. Scope included piping, civil, and structural engineering, vendor document reviews, and coordination with licensor Heurtey."
    },
    {
      name: "AR Ratawi - Gas Midstream Project (GMP)",
      location: "AR Ratawi - Pipelines",
      description: "Pipeline engineering for AR Ratawi Gas Midstream Project (114.9 km). Deliverables: alignment sheets, horizontal/vertical profiles, crossing schedules, condensate pipeline (10\" & 24\"), integrated GIS/survey data, and validation reports."
    },
    {
      name: "P-80 FPSO Project Instrumentation Support",
      location: "Brazil",
      description: "Instrumentation engineering support for Petrobras P-80 FPSO Project. Scope included cable scheduling, routing, 3D modeling of tray systems, tray layout sheets, and multidisciplinary coordination for 10 modules."
    },
    {
      name: "EDC Plant Civil Design - Tekla",
      location: "Detailed Engineering",
      description: "Civil & structural engineering design for Tekla Vinyls Program 1260 KTA EDC Plant. Scope included modularization design, 3D modeling, pile caps, vent blower sheds, pedestals, and structural detailing."
    },
    {
      name: "Ammonia Plant Electrical Lighting",
      location: "Mexico",
      description: "Electrical lighting engineering for Ammonia Plant O&U area. Scope: lighting design calculations, layouts for 25 areas, illumination reports, and BOQs."
    },
    {
      name: "Ammonia Plant Vendor Drawing Review",
      location: "Mexico",
      description: "Vendor document review of 115 static equipment drawings for Ammonia Plant. Scope: GA reviews, detailed drawing checks, and vendor compliance validation."
    },
    {
      name: "Pilot Reactor and Flaker Plant",
      location: "Detailed Engineering",
      description: "Detailed engineering for Pilot Reactor & Flaker Plant. Scope: basic plant layout, GA drawings, piping/isometrics, civil foundations, structural design, load mapping, emergency access design, control philosophy, utility mapping, and integration planning."
    },
    {
      name: "New 3-Tank MBR Plant for Textile Mill",
      location: "India - Tamil Nadu",
      description: "Complete Detailed Engineering for the new 3-tank MBR Plant in a textile mill, including 3D modeling, GA drawings, Equipment, Piping & Isometrics, Civil & Structural modeling and drawings."
    },
    {
      name: "Effluent Treatment Plant (ETP) Revamp",
      location: "India - Surat, Gujarat",
      description: "Detailed 3D Modeling and Deliverables for the Effluent Treatment Plant (ETP) Revamp, covering Equipment, Piping, Isometrics, and Structural modeling."
    },
    {
      name: "200 MLD Water Treatment Plant (WTP)",
      location: "India - West Bengal",
      description: "Detailed Engineering support including 3D modeling for Equipment, Piping, Structural, and GA drawings for a large 200 MLD WTP project."
    },
    {
      name: "MBR Plant for Municipality",
      location: "India - Pune, Maharashtra",
      description: "Detailed Engineering and 3D modeling for the MBR Plant, which includes Equipment, Piping, and Structural design and documentation."
    },
    {
      name: "Pre-Fabricated WTP for Power Plant",
      location: "India - Odisha",
      description: "3D Modeling & Detailed Engineering for a skid-mounted, pre-fabricated WTP for a power plant, including Equipment, Process Piping, and Instrumentation layout."
    },
    {
      name: "Demineralization (DM) Plant",
      location: "India - Visakhapatnam, Andhra Pradesh",
      description: "Detailed Engineering and 3D model preparation for the Demineralization Plant, including all associated Equipment, Interconnecting Piping, and Structural elements."
    },
    {
      name: "New Sewage Treatment Plant (STP)",
      location: "India - Andhra Pradesh",
      description: "Detailed Engineering & 3D Modeling services including Equipment, Process Piping, Structural, and GA drawings for a new STP project."
    }
  ];

  const asBuiltProjects = [
    {
      name: "Reverse Osmosis (RO) Plant Upgrade",
      location: "Malaysia",
      description: "Modification of existing Detailed Engineering Model to reflect the As-Built condition after the RO Plant upgrade, including red-line markups and final spool documentation."
    },
    {
      name: "Process Piping Rerouting Project",
      location: "India - Mumbai, Maharashtra",
      description: "Updating the 3D model to capture the As-Built configuration of the newly routed process piping and support structures as installed on-site."
    },
    {
      name: "Existing Plant Survey & Documentation",
      location: "India - Kerala",
      description: "As-Built documentation and 3D model updates based on laser scan data and site verification for an existing treatment facility."
    },
    {
      name: "Verification of 700 PSVs as per API Standards",
      location: "Engineering Validation",
      description: "Verification and validation of ~700 PSVs against latest API standards. Delivered detailed compliance reports, gap analysis, and recommendations across 17 operating scenarios."
    }
  ];

  const preBidProjects = [
    {
      name: "EPC Bid Support for Oil & Gas Sector",
      location: "Middle East",
      description: "Pre-Bid 3D model for Material Take-Off (MTO) and Preliminary Layout optimization to support the commercial proposal for an EPC Bid."
    },
    {
      name: "Skid-Mounted Water Treatment Unit",
      location: "Philippines",
      description: "Creation of a Fast-Track 3D Model and basic Equipment List to generate an estimated Bill of Material (BOM) for the bid submission."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-10 pb-0">
        {/* Title Section */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="pl-6 border-l-8 border-[#ED2939] inline-block text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                Our Projects
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
                Engineering Excellence Delivered
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 relative">

        {/* Sticky Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
              Navigation
            </h3>
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-2",
                  activeSection === link.id
                    ? "bg-red-50 text-[#ED2939] border-[#ED2939]"
                    : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-24 pb-20">

          {/* FEED */}
          <section id="feed" className="scroll-mt-32">
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                FEED Engineering
              </h2>
              <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                Front-End Engineering Design
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Oil Plant Card */}
              <Card className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px]">
                <CardContent className="p-0 relative h-full">
                  <img
                    src={oilPlantImage}
                    alt="Oil Plant"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10 flex flex-col justify-end p-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2 inline-block w-fit"
                      style={{
                        textShadow: '0 0 8px hsl(var(--glow-blue) / 0.4), 0 0 16px hsl(var(--glow-blue) / 0.2)'
                      }}
                    >
                      Oil Plant
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant, covering high-temperature and low-pressure piping, static equipment design, GA drawings, datasheets, P&IDs, plot plans, MTOs, vendor document review.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {feedProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] group bg-white">
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                          {project.location}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{
                          textShadow: '0 0 10px hsl(var(--primary) / 0.1)'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detail */}
          <section id="detail" className="scroll-mt-32">
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                Detail Engineering
              </h2>
              <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                Comprehensive Execution
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {detailProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] group bg-white">
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                          {project.location}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{
                          textShadow: '0 0 10px hsl(var(--primary) / 0.1)'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* As-Built */}
          <section id="asbuilt" className="scroll-mt-32">
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                As-Built Engineering
              </h2>
              <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                Site Verification & Updates
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {asBuiltProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] group bg-white">
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                          {project.location}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{
                          textShadow: '0 0 10px hsl(var(--primary) / 0.1)'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pre-Bid */}
          <section id="prebid" className="scroll-mt-32">
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                Pre-Bid Engineering
              </h2>
              <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                MTOs & Feasibility
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preBidProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] group bg-white">
                  <CardContent className="p-0 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                          {project.location}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                        style={{
                          textShadow: '0 0 10px hsl(var(--primary) / 0.1)'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;

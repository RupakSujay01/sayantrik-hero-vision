import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckCircle2, TrendingUp, ShieldCheck, FileCheck, Layers, Globe2, Zap, Users,
  ClipboardList, Hammer, Gauge, Monitor, Link as LinkIcon, Calendar, Briefcase, UserPlus, CheckCheck,
  PenTool, Truck, HardHat, Coins, Clock, LayoutDashboard, Eye, Network, BarChart4,
  LineChart, PieChart, Gavel, Scale, AlertTriangle, Landmark, FileSearch, Handshake,
  Factory, CircuitBoard, Search, Rocket, Scan, Box, Cpu, FileCode, Award, ArrowRight
} from "lucide-react";

import { BubbleNavLink } from "@/components/ui/BubbleNavLink";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Services = () => {
  const lifecycleSteps = [
    {
      fel: "FEL-1",
      action: "Identify",
      phase: "Feasibility",
      bg: "bg-[#0a0a0a]",
      delay: 0,
      targetId: "fel-1"
    },
    {
      fel: "FEL-2",
      action: "Select",
      phase: "Pre-FEED",
      bg: "bg-[#ED2939]",
      delay: 0.1,
      targetId: "fel-2"
    },
    {
      fel: "FEL-3",
      action: "Define",
      phase: "FEED",
      bg: "bg-[#0a0a0a]",
      delay: 0.2,
      targetId: "feed"
    },
    {
      fel: "FEL-4",
      action: "Execute",
      phase: "EPC / Detail",
      bg: "bg-[#ED2939]",
      delay: 0.3,
      targetId: "detailed-engineering"
    },
    {
      fel: "OPERATE",
      action: "Sustain",
      phase: "Brownfield",
      bg: "bg-[#0a0a0a]",
      delay: 0.4,
      targetId: "brownfield"
    }
  ];

  // FEL-1 Data
  const advantagesFel1 = [
    {
      title: "Concept Screening",
      desc: "Rapid evaluation of multiple configuration options to identify the best business case.",

    },
    {
      title: "Economic Viability",
      desc: "High-level CAPEX/OPEX modelling to establish investment feasibility (+/- 40%).",

    },
    {
      title: "Fatal Flaw Analysis",
      desc: "Early identification of technical, regulatory, or safety showstoppers.",

    }
  ];

  // FEL-2 Data
  const advantagesFel2 = [
    {
      title: "Scope Freeze",
      desc: "Defining boundaries to prevent scope creep during later engineering phases.",

    },
    {
      title: "Technology Selection",
      desc: "Finalising licensor technology and key equipment configurations.",

    },
    {
      title: "Value Engineering",
      desc: "Optimising layout and process scheme before freezing the design.",

    }
  ];

  // FEL-3 Data
  const featuresFel3 = [
    {
      title: "Investment-Grade Cost Estimates",
      desc: "AFE-quality estimates (±10-15%) backed by a detailed engineering basis and market-validated pricing.",

    },
    {
      title: "De-Risked Project Definition",
      desc: "Complete safety studies, risk registers, and mitigation plans to minimise surprises during execution.",

    },
    {
      title: "Execution-Ready Packages",
      desc: "Complete deliverables for seamless transition to EPC: P&IDs, equipment specs, 3D model, and contracting strategy.",

    },
    {
      title: "Confident FID Decisions",
      desc: "Clear project scope, validated schedule, and comprehensive risk assessment to support investment decisions.",

    }
  ];

  const advantagesFel3 = [
    {
      title: "Integrated Teams",
      desc: "Process, mechanical, piping, electrical, instrumentation, and civil/structural working as one coordinated unit.",

    },
    {
      title: "Sector Expertise",
      desc: "Deep experience across refineries, petrochemicals, chemicals, fertilizers, power, and sustainability projects.",

    },
    {
      title: "Cost Efficiency",
      desc: "India-based execution delivering a significant cost advantage without compromising quality.",

    },
    {
      title: "Global Standards",
      desc: "Full compliance with international codes and client-specific standards.",

    }
  ];

  // FEL-4 Data
  const featuresFel4 = [
    {
      title: "Zero-Rework Deliverables",
      desc: "Multi-level QC process (self-check → peer review → lead approval). Clash-free 3D models with full dimensional control.",

    },
    {
      title: "Accurate MTOs & BOQs",
      desc: "Precise material take-offs extracted from 3D models, validated against vendor data, and ready for procurement.",

    },
    {
      title: "Constructability Built-In",
      desc: "Designs reviewed for practical field execution, maintenance access, and construction sequencing.",

    },
    {
      title: "Fast-Track Capability",
      desc: "160+ engineers allow parallel workstreams, extended hours delivery, and rapid scale-up for aggressive schedules.",

    }
  ];

  const advantagesFel4 = [
    {
      title: "Scalable Capacity",
      desc: "160+ engineers ready to mobilize – augment your team or take full ownership.",

    },
    {
      title: "Platform Flexibility",
      desc: "We work on your preferred design platforms and follow your specific standards.",

    },
    {
      title: "Vendor Integration",
      desc: "Seamless incorporation of vendor data with rigorous technical review.",

    },
    {
      title: "Schedule Adherence",
      desc: "Proven track record of on-time delivery with construction-sequenced work packages.",

    }
  ];

  // Navigation Labels
  const serviceSections = [
    { id: "fel-1", label: "FEL-1 | IDENTIFY" },
    { id: "fel-2", label: "FEL-2 | SELECT" },
    { id: "feed", label: "FEL-3 | DEFINE" },
    { id: "detailed-engineering", label: "FEL-4 | EXECUTE" },
    { id: "epc", label: "EPC | EXECUTE" },
    { id: "epcm", label: "EPCM | MANAGE" },
    { id: "pmc", label: "PMC | OVERSIGHT" },
    { id: "owners-engineer", label: "OWNER'S ENG" },
    { id: "process-technology", label: "TECH | INTEGRATION" },
    { id: "brownfield", label: "BROWNFIELD" },
    { id: "laser-scan", label: "LASER SCAN" }
  ];

  const [activeSection, setActiveSection] = useState("feed");

  // Scroll Spy to update active section
  // Scroll Spy to update active section
  useEffect(() => {
    const contentArea = document.getElementById('services-content-area');
    if (!contentArea) return;

    const handleScroll = () => {
      // Use scrollTop of the container + offset
      const scrollPosition = contentArea.scrollTop + 150;

      for (const section of serviceSections) {
        const element = document.getElementById(section.id);
        if (element) {
          // Get position relative to the container? 
          // element.offsetTop works if element is direct child, but it's nested.
          // Use getBoundingClientRect logic relative to container top.

          // Easier: element.offsetTop is generally safe if strict relative/absolute positioning isn't messing it up.
          // But simpler:
          const areaRect = contentArea.getBoundingClientRect();
          const elemRect = element.getBoundingClientRect();

          // Calculate element's top position relative to container's visible top
          const relativeTop = elemRect.top - areaRect.top + contentArea.scrollTop;
          const relativeBottom = elemRect.bottom - areaRect.top + contentArea.scrollTop;

          if (scrollPosition >= relativeTop && scrollPosition < relativeBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    contentArea.addEventListener("scroll", handleScroll);
    return () => contentArea.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const contentArea = document.getElementById('services-content-area');

    if (element && contentArea) {
      const areaRect = contentArea.getBoundingClientRect();
      const elemRect = element.getBoundingClientRect();

      // Target scroll position = current scrollTop + (element top relative to viewport - content top relative to viewport) - offset
      const offset = 40; // Small top padding
      const targetScroll = contentArea.scrollTop + (elemRect.top - areaRect.top) - offset;

      contentArea.scrollTo({ top: targetScroll, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const engagementModels = [
    {
      title: "Full Detail Engineering",
      desc: "End-to-end ownership from FEED handover to IFC (Issued for Construction).",

    },
    {
      title: "Team Augmentation",
      desc: "Dedicated resources embedded directly into your project team.",

    },
    {
      title: "Discipline Packages",
      desc: "Specific scope like piping design, structural analysis, or electrical detailing.",

    }
  ];

  // EPC Data
  const epcPillars = [
    {
      title: "ENGINEERING",
      items: ["Complete detail design", "3D model & drawings", "Fast-track delivery", "Design optimisation"],

      bg: "bg-slate-50"
    },
    {
      title: "PROCUREMENT",
      items: ["Technical specifications", "Bid evaluation (TBE)", "Vendor document review", "Inspection services"],

      bg: "bg-white"
    },
    {
      title: "CONSTRUCTION",
      items: ["Site engineering", "Technical queries resolution", "As-built updates", "Commissioning support"],

      bg: "bg-slate-50"
    }
  ];

  const advantagesEpc = [
    {
      title: "EPC Contractor Support",
      desc: "Engineering capacity on demand—scale up quickly for large-scale projects.",

    },
    {
      title: "Owner's EPC Team",
      desc: "Supplementing your in-house team with specialised technical disciplines.",

    },
    {
      title: "Cost Advantage",
      desc: "Competitive India-based rates to improve overall project margins.",

    },
    {
      title: "Extended Hours",
      desc: "Strategic India-USA time zone coverage to accelerate project schedules.",

    }
  ];

  // EPCM Data
  const featuresEpcm = [
    {
      title: "Complete Project Control",
      desc: "Clients retain direct contracts with vendors and contractors – ensuring full visibility into costs and decisions.",

    },
    {
      title: "Expert Management",
      desc: "Professional project management from concept to commissioning without losing owner control.",

    },
    {
      title: "Flexible Change Management",
      desc: "Easier to incorporate scope changes without high contractor premiums; you manage the trade-offs.",

    },
    {
      title: "Single Point of Contact",
      desc: "One dedicated team coordinating engineering, procurement, and construction activities on your behalf.",

    }
  ];

  const advantagesEpcm = [
    {
      title: "Integrated Delivery",
      desc: "Engineering, procurement support, and construction oversight provided by one cohesive team.",

    },
    {
      title: "Local Presence",
      desc: "A strong India vendor network combined with expert site supervision capability.",

    },
    {
      title: "Transparent Reporting",
      desc: "Real-time project dashboards, cost tracking, and schedule monitoring.",

    },
    {
      title: "Risk Mitigation",
      desc: "Independent oversight that protects your interests throughout the entire project.",

    }
  ];

  // PMC Data
  const featuresPmc = [
    {
      title: "Schedule & Cost Control",
      desc: "Real-time monitoring, variance analysis, and proactive recovery plans to protect your baseline.",

    },
    {
      title: "Contractor Performance",
      desc: "Independent monitoring of contractor deliverables, milestones, and quality standards.",

    },
    {
      title: "Risk & Change Management",
      desc: "Systematic risk tracking, change order evaluation, and impact assessment to avoid cost overruns.",

    },
    {
      title: "Management Dashboards",
      desc: "Executive-level reporting with KPIs, trends, and actionable insights for decision-making.",

      isDashboard: true
    }
  ];

  const advantagesPmc = [
    {
      title: "Technical + Management",
      desc: "PMC backed by engineering depth – we understand the technical issues behind delays.",

    },
    {
      title: "Project Veterans",
      desc: "Team includes professionals with major capital project experience across sectors.",

    },
    {
      title: "Independent Voice",
      desc: "We represent your interests, not the contractors'.",

    }
  ];

  // Owner's Engineer Data
  const featuresOe = [
    {
      title: "Design Verification",
      desc: "Independent review of contractor's engineering to ensure compliance with your specifications.",

    },
    {
      title: "Technical Due Diligence",
      desc: "Expert assessment for acquisitions, investments, and technology evaluations.",

    },
    {
      title: "Construction Oversight",
      desc: "Monitor construction progress, equipment compliance, and quality without managing the contractor.",

    },
    {
      title: "Commissioning Verification",
      desc: "Witness equipment testing, verify performance guarantees, and ensure proper handover.",

    }
  ];

  const advantagesOe = [
    {
      title: "Early Engagement Value",
      desc: "The earlier we join, the more we save you – proper planning prevents costly rework.",

    },
    {
      title: "Multi-Sector Expertise",
      desc: "Experience across energy, chemicals, power, and sustainability to validate technology choices.",

    },
    {
      title: "Lender's Engineer",
      desc: "Support for project finance with independent technical assessment.",

    }
  ];

  // Process Technology Integration Data
  const featuresTech = [
    {
      title: "Your Local Representative",
      desc: "Client interface, pre-sales support, regulatory navigation, and local vendor network in India.",

    },
    {
      title: "BOP & OSBL Integration",
      desc: "Complete facility integration including utilities, storage, interconnecting piping, and infrastructure.",

    },
    {
      title: "Inspection & Expediting",
      desc: "Vendor inspection, progress monitoring, quality assurance, and factory acceptance testing.",

    },
    {
      title: "Validation & Compliance",
      desc: "Design validation, Indian regulatory compliance (PESO, SMPV, IBR), and performance verification.",

    }
  ];

  const partnershipModels = [
    {
      title: "Preferred Engineering Partner",
      desc: "Your recommended partner for projects in India.",

    },
    {
      title: "Capacity Extension",
      desc: "Operating as an extension of your team under your brand.",

    },
    {
      title: "Consortium Bidding",
      desc: "Bidding together as a Technology + Engineering team.",

    },
    {
      title: "Technology Commercialization",
      desc: "Helping emerging technologies enter the India market.",

    }
  ];

  // Brownfield Data
  const featuresBrownfield = [
    {
      title: "Optimised Shutdown Scope",
      desc: "Hot work vs. cold work classification, pre-fabrication maximisation, and tie-in optimisation to minimise downtime.",

    },
    {
      title: "As-Built Reality Check",
      desc: "Laser scanning to capture existing conditions—ensuring no surprises during construction.",

    },
    {
      title: "Debottlenecking Studies",
      desc: "Process simulation to identify capacity constraints and deliver cost-effective solutions.",

    },
    {
      title: "Safe Integration",
      desc: "MOC (Management of Change) support, safety reviews for modifications, and proper isolation philosophy for live plant work.",

    }
  ];

  const projectTypes = [
    {
      title: "Capacity Expansion & Efficiency",

    },
    {
      title: "Equipment Replacement & Safety",

    },
    {
      title: "Environmental Compliance",

    },
    {
      title: "Turnaround Engineering",

    }
  ];

  // Laser Scan Data
  const featuresLaser = [
    {
      title: "High-Definition 3D Point Cloud",
      desc: "Millimetre-accurate scan data of your existing facility – applicable for both onshore and offshore assets.",

    },
    {
      title: "Intelligent As-Built Models",
      desc: "3D CAD models with intelligent components for engineering use on your preferred platform.",

    },
    {
      title: "Clash-Free Modifications",
      desc: "Design new equipment within the scan environment to eliminate field fit-up problems entirely.",

    },
    {
      title: "Engineering Deliverables",
      desc: "P&IDs, layouts, isometrics, and structural drawings—all extracted from accurate scan data.",

    }
  ];

  const advantagesLaser = [
    {
      title: "Clash Detection",
      desc: "Eliminate field fit-up issues and ensure seamless integration of new equipment."
    },
    {
      title: "Remote Walkthroughs",
      desc: "Reduce site visits by 80% with millimetre-accurate virtual reality environments."
    },
    {
      title: "Tank Calibration",
      desc: " precise volume analysis and deformation monitoring using 3D laser scanning."
    },
    {
      title: "BIM Integration",
      desc: "Intelligent 3D models compatible with all major engineering platforms."
    }
  ];

  // Trust Footer Data
  const trustPillars = [
    {
      title: "160+ Engineers",
      desc: "Scalable capacity for any project size.",

    },
    {
      title: "Multi-Sector Expertise",
      desc: "Energy, Chemicals, Power, & Sustainability.",

    },
    {
      title: "Cost Advantage",
      desc: "Significant savings with India-based delivery.",

    },
    {
      title: "Global Delivery",
      desc: "Seamless execution via India, Malaysia, & USA.",

    },
    {
      title: "ISO 9001:2015",
      desc: "TUV:SUD certified quality systems.",

    },
    {
      title: "250+ Projects",
      desc: "Proven track record since 2012.",

    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Services"
        description="Comprehensive engineering services including Feasibility Studies (FEL-1/2/3), Detailed Engineering, EPCM, and Laser Scanning."
        url="/services"
      />


      {/* Header and Lifecycle moved inside content area */}

      {/* Main Content with Sidebar */}
      {/* Split Layout: Responsive - Fixed Height Only on Large Screens */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 lg:h-[calc(100vh-80px)] lg:overflow-hidden h-auto overflow-visible">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-full">

          {/* Left Navigation - Sticky/Fixed-Height on Desktop, Hidden/Different on Mobile */}
          <div className="hidden lg:block w-72 flex-shrink-0 h-full overflow-y-auto overscroll-contain custom-scrollbar pb-20">
            <div className="space-y-2 pr-4 pt-10">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
                Services
              </h3>
              <div className="flex flex-col gap-4">
                {serviceSections.map((section, index) => (
                  <BubbleNavLink
                    key={section.id}
                    id={section.id}
                    label={section.label}
                    isActive={activeSection === section.id}
                    index={index}
                    totalItems={serviceSections.length}
                    onClick={() => scrollToSection(section.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Sticky Top */}
          <div className="lg:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 mb-6 -mx-4 px-4 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {serviceSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "px-5 py-3 rounded-full text-base font-bold whitespace-nowrap transition-colors transform active:scale-95",
                    activeSection === section.id
                      ? "bg-[#ED2939] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Responsive scrolling */}
          <div id="services-content-area" className="flex-1 h-auto lg:h-full lg:overflow-y-auto lg:overscroll-contain custom-scrollbar pb-20 lg:pb-32 lg:pr-4 pt-4 lg:pt-10">

            <div className="pt-0 pb-0">
              {/* 2. Section Title - Premium Centered Hybrid */}
              <div className="max-w-7xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-start text-left"
                >
                  <div className="pl-6 border-l-8 border-[#ED2939] inline-block text-left">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                      Project Lifecycle
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
                      Where We Add Value
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* 3. Interactive Project Lifecycle Table/Flow - Reduced Width Chevron Design */}
            <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="flex flex-col lg:flex-row h-auto lg:h-[125px] items-center lg:items-stretch justify-center max-w-[1800px] mx-auto gap-4 lg:gap-0">
                {lifecycleSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.7, duration: 1.0, delay: step.delay }}
                    onClick={() => scrollToSection(step.targetId)}
                    className={`
                    relative w-full lg:w-1/5 h-auto lg:h-auto
                    flex flex-col
                    transition-all duration-300 ease-in-out
                    group cursor-pointer active:scale-95
                    lg:-ml-8 first:lg:ml-0
                    z-10
                    rounded-xl lg:rounded-none
                    overflow-hidden lg:overflow-visible
                `}
                    style={{
                      zIndex: 50 - idx,
                      filter: window.innerWidth >= 1024 ? "drop-shadow(1px 0 0 #ED2939) drop-shadow(0 1px 0 #ED2939) drop-shadow(0 -1px 0 #ED2939)" : "none",
                      marginBottom: window.innerWidth < 1024 ? "1rem" : "0"
                    }}
                  >
                    <motion.div
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={cn(
                        "h-full w-full p-4 lg:p-2 flex flex-col items-center justify-center text-center transition-colors duration-500 bg-white text-black border lg:border-none border-red-100 shadow-sm lg:shadow-none rounded-xl lg:rounded-none",
                        "group-hover:text-[#ED2939] group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-red-100",
                        "group-hover:shadow-[0_20px_60px_rgba(237,41,57,0.15)] group-hover:z-[60]"
                      )}
                      style={{
                        clipPath:
                          window.innerWidth >= 1024
                            ? 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%, 30px 50%)' // Standard chevron
                            : 'none'
                      }}
                    >
                      <div className="w-full lg:px-8">
                        <h3 className="text-xl lg:text-3xl font-black uppercase mb-1 tracking-tighter opacity-100">
                          {step.fel}
                        </h3>
                        <p className="text-xs lg:text-sm font-bold uppercase tracking-wider mb-1 inline-block">
                          {step.action}
                        </p>
                        <div className="space-y-0 text-center">
                          <p className="text-[10px] uppercase tracking-widest opacity-75">Phase</p>
                          <p className="text-xs font-bold">{step.phase}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metadata Header Removed */}

            {/* 4a. Service Detail: FEL-1 */}
            <div id="fel-1" className="max-w-7xl mx-auto pt-6 mb-8 group">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="lg:w-3/4">
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      FEL-1 | IDENTIFY
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Feasibility Study (Concept Development)
                    </p>
                    <div className="max-w-3xl mt-4">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        In FEL-1, we evaluate project options at a conceptual level, review technologies and layouts, estimate costs and schedules at a high level, and identify key risks. The outcome is a recommended concept and business case to justify moving forward.
                      </p>
                    </div>
                  </div>

                  <div className="max-w-3xl mb-10 pl-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight shrink-0">
                      PURPOSE:
                    </h3>
                    <p className="text-lg font-bold text-gray-900 leading-relaxed">
                      Assess whether the project is technically and economically viable.
                    </p>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Key Value Delivered
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "Confident early investment decisions",
                      "Selection of the right technical concept",
                      "High-level cost and schedule visibility"
                    ].map((val, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-4 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300">
                        <p className="text-gray-700 font-bold">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Strategic Focus Sidebar */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-4">
                        {advantagesFel1.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 4b. Service Detail: FEL-2 */}
            <div id="fel-2" className="max-w-7xl mx-auto pt-6 mb-8 group">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="lg:w-3/4">
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      FEL-2 | SELECT
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Pre-FEED (Basis of Design)
                    </p>
                    <div className="max-w-3xl mt-4">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        During FEL-2, engineering definition is matured. We develop the Basis of Design, perform preliminary simulations and equipment sizing, prepare early layouts and PFDs, assess constructability and regulatory needs, and refine cost and schedule accuracy.
                      </p>
                    </div>
                  </div>

                  <div className="max-w-3xl mb-10 pl-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight shrink-0">
                      PURPOSE:
                    </h3>
                    <p className="text-lg font-bold text-gray-900 leading-relaxed">
                      Convert the selected concept into a clearly defined project scope.
                    </p>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Key Value Delivered
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "Clear technical scope definition",
                      "Reduced uncertainty and project risk",
                      "Strong foundation for FEED and execution"
                    ].map((val, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-4 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300">
                        <p className="text-gray-700 font-bold">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Strategic Focus Sidebar */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-4">
                        {advantagesFel2.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 4. Service Detail: FEED | FEL-3 */}
            <div id="feed" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
                {/* Left: What You Get (Feature Grid) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      FEED | FEL-3
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Front-End Engineering Design
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        The most critical phase for capital cost optimisation. We define the project baseline, identify technical risks, and establish the 30% cost estimate accuracy required for Final Investment Decision (FID).
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Core Deliverables
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresFel3.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Strategic Partnership Box - Moved Horizontal */}
                  <div className="mt-8 bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-8">

                    <div className="relative z-10 flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <h4 className="text-[#ED2939] font-black uppercase tracking-widest text-sm">Strategic Partnership</h4>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Energy Sector Focus</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">LCTS Partnership</h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                        For refinery, petrochemical, and LNG projects, leveraging our partnership providing Houston-based process engineering leadership with 80+ years of combined experience.
                      </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                      <Link to="/lcts-partnership">
                        <button className="px-6 py-3 bg-[#ED2939] hover:bg-[#c41e2b] text-white font-bold uppercase tracking-widest text-xs rounded-lg transition-colors shadow-lg shadow-red-900/20">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Sayantrik Advantage */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-4">
                        {advantagesFel3.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* Metrics Bar - Enhanced Premium Design */}
              <div className="mt-12">
                <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 hover:-translate-y-1 transition-transform duration-500">

                  {/* Metric 1 */}
                  <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Duration</p>
                      <p className="text-2xl font-bold text-gray-900 tracking-tight">4-8 Months</p>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Team</p>
                      <p className="text-2xl font-bold text-gray-900 tracking-tight">PM + Leads</p>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FileCheck className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Output</p>
                      <p className="text-2xl font-bold text-gray-900 tracking-tight">FEED Package</p>
                    </div>
                  </div>

                </div>
              </div>



            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 6. Service Detail: DETAILED ENGINEERING | FEL-4 */}
            <div id="detailed-engineering" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-6">
                {/* Left: What You Get (Deliverables Grid) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      DETAILED ENGINEERING
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Precision Execution | FEL-4
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        We transform the process package into a construction-ready blueprints, encompassing all disciplines from process and mechanical to instrumentation and civil.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Construction-Ready Deliverables
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresFel4.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: The Sayantrik Advantage (Core Strengths) */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-1.5">
                        {advantagesFel4.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1 justify-center text-center text-gray-900 bg-white py-2 px-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Flexible Engagement Models - Refined Metrics Style */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 hover:-translate-y-1 transition-transform duration-500">

              {/* Model 1: Full Detail Engineering */}
              <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Full Detail Engineering</p>
                  <p className="text-sm font-medium text-gray-600 leading-tight">End-to-end ownership from FEED handover to IFC.</p>
                </div>
              </div>

              {/* Model 2: Team Augmentation */}
              <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Team Augmentation</p>
                  <p className="text-sm font-medium text-gray-600 leading-tight">Dedicated resources embedded directly into your project team.</p>
                </div>
              </div>

              {/* Model 3: Discipline Packages */}
              <div className="flex-1 w-full flex items-center justify-center gap-5 p-4 group">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-[#ED2939] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#ED2939] mb-1">Discipline Packages</p>
                  <p className="text-sm font-medium text-gray-600 leading-tight">Specific scope like piping design, structural analysis, or electrical.</p>
                </div>
              </div>

            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 8. Service Detail: EPC | Execute */}
            <div id="epc" className="max-w-7xl mx-auto pt-6 mb-8 group">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
                {/* Left: Content */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      EPC: Execute
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Engineering, Procurement & Construction
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Complete engineering backbone for your turnkey projects – from design to commissioning support.
                      </p>
                    </div>
                  </div>

                  {/* EPC Lifecycle - Standardized Grid */}
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Core Pillars
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative">
                    {epcPillars.map((pillar, idx) => (
                      <div key={idx} className={`rounded-xl border border-gray-200 overflow-hidden bg-slate-50 hover:shadow-xl transition-shadow duration-300`}>
                        <div className="bg-gray-900 p-6 flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white tracking-wider">{pillar.title}</h3>
                        </div>
                        <div className="p-8">
                          <ul className="space-y-4">
                            {pillar.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="w-1.5 h-1.5 bg-[#ED2939] rounded-full shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Sidebar */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-2.5">
                        {advantagesEpc.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-3 px-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 9. Service Detail: EPCM | Full Lifecycle */}
            <div id="epcm" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
                {/* Left: What You Get (Management Benefits Grid) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      EPCM | Full Lifecycle
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Engineering, Procurement & Construction Management
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Full transparency and control over your project – we manage, you decide.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Management Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresEpcm.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: The Sayantrik Advantage (Management Depth) */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-2.5">
                        {advantagesEpcm.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-3 px-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 10. Service Detail: PMC | Full Lifecycle */}
            <div id="pmc" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
                {/* Control & Oversight Grid (2x2) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      PMC | Full Lifecycle
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Project Management Consultancy
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Expert oversight that keeps your project on track – schedule, cost, and quality.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Control & Oversight
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresPmc.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Sayantrik Advantage - Boardroom Style Sidebar */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-4">
                        {advantagesPmc.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 11. Service Detail: OWNER'S ENGINEER | Full Lifecycle */}
            <div id="owners-engineer" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-10">
                {/* Left: What You Get (Quality Assurance Grid) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      OWNER'S ENGINEER
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Technical Advisory & Independent Review
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Your technical guardian – independent expertise protecting your investment through full lifecycle oversight.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Quality Assurance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresOe.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: The Sayantrik Advantage (Strategic Value) */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-4">
                        {advantagesOe.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 12. Service Detail: PROCESS TECHNOLOGY INTEGRATION */}
            <div id="process-technology" className="max-w-7xl mx-auto pt-6 mb-8 group">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12">
                {/* Left: What You Get (Integration Grid) */}
                <div className="lg:w-3/4">
                  {/* Header */}
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      PROCESS TECHNOLOGY INTEGRATION
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Licensor Partnership & BOP Engineering
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        We bridge the gap between process technology and physical reality, delivering seamless facility integration and Indian regulatory compliance.
                      </p>
                    </div>
                  </div>



                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Integration Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresTech.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience Block */}
                  <div className="bg-slate-900 text-white p-6 rounded-3xl mt-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="md:w-1/3 relative z-10">
                      <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-[#ED2939]">For Technology Licensors</h3>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-70">& Equipment Suppliers</p>
                    </div>
                    <div className="md:w-2/3 relative z-10 border-l border-white/20 pl-0 md:pl-10">
                      <p className="text-base leading-relaxed text-gray-300">
                        Sayantrik serves as your engineering arm in India and emerging markets. We translate Process Design Packages into fully integrated, constructible facilities, bridging the gap between <span className="text-white font-bold">proprietary technology</span> and <span className="text-white font-bold">local execution</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Partnership Models */}
                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Models
                      </h3>
                      <div className="w-full space-y-4">
                        {partnershipModels.map((model, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {model.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {model.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 13. Service Detail: BROWNFIELD MODIFICATIONS */}
            <div id="brownfield" className="max-w-7xl mx-auto pt-6 mb-8 group">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="lg:w-3/4">
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      BROWNFIELD MODIFICATIONS
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Plant Revamp & Tie-in Engineering
                    </p>
                    <div className="max-w-3xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        We specialise in modifications to live operating assets, where safety, minimal downtime, and exact as-built accuracy are non-negotiable.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">
                    Operational Excellence
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresBrownfield.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Capabilities
                      </h3>
                      <div className="w-full space-y-4">
                        {projectTypes.map((type, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-2 justify-center text-center text-gray-900 bg-white py-4 px-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {type.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* 14. Service Detail: LASER SCAN & DIGITAL TWINS */}
            <div id="laser-scan" className="max-w-7xl mx-auto pt-6 mb-8 group">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <div className="lg:w-3/4">
                  <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                      LASER SCAN & DIGITAL TWINS
                    </h2>
                    <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                      Reality Capture & As-Built Modeling
                    </p>
                    <div className="max-w-xl">
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Eliminate fit-up issues and manual measurement errors. We convert high-definition point clouds into intelligent 3D CAD models.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {featuresLaser.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 border-l-4 border-gray-200 p-6 rounded-r-xl hover:border-[#ED2939] hover:bg-white hover:shadow-md transition-all duration-300 group">

                        <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/4">
                  <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center flex items-center justify-center gap-2 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939]"></span>
                        Strategic Focus
                      </h3>
                      <div className="w-full space-y-1.5">
                        {advantagesLaser.map((adv, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1 justify-center text-center text-gray-900 bg-white py-2 px-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#ED2939]/30 group">
                            <h4 className="text-sm font-bold uppercase tracking-widest group-hover:text-[#ED2939] transition-colors">
                              {adv.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-medium">
                              {adv.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t-2 border-[#ED2939] my-8" />

            {/* Disciplines Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              className="py-16 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 my-16 relative overflow-hidden"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: { opacity: 1, scaleX: 1, transition: { duration: 1.5, delay: 1.0 } }
                }}
                className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-100 via-[#ED2939] to-gray-100"
              />
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleX: 0 },
                  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, delay: 1.0 } }
                }}
                className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-gray-100 via-[#ED2939] to-gray-100"
              />
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">Disciplines We Work</h3>
                <div className="w-16 h-1 bg-[#ED2939] mx-auto mt-4 rounded-full" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 md:px-10 max-w-7xl mx-auto">
                {[
                  "Process",
                  "Mechanical - Static",
                  "Mechanical - Rotary",
                  "Mechanical - HVAC",
                  "Piping",
                  "Civil / Structural / Architectural",
                  "Electrical",
                  "Instrumentation",
                  "Fire & Gas",
                  "Telecom"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: {
                        backgroundColor: "rgba(249, 250, 251, 0.8)",
                        borderColor: "rgb(243, 244, 246)",
                        boxShadow: "none"
                      },
                      visible: {
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(237, 41, 57, 0.3)",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        transition: { duration: 1.5, delay: 1.0 }
                      }
                    }}
                    className="p-6 rounded-xl border h-full flex items-center justify-center min-h-[100px] cursor-default"
                  >
                    <motion.span
                      variants={{
                        hidden: { color: "#000000" },
                        visible: { color: "#ED2939", transition: { duration: 1.5, delay: 1.0 } }
                      }}
                      className="text-sm font-bold leading-tight"
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 15. Closing Trust Section: Why Clients Choose Us */}
            {/* 15. Closing Trust Section: Why Clients Choose Us - Premium Dark Redesign */}
            {/* 15. Closing Trust Section: Why Clients Choose Us - Premium Dark Redesign */}
            <div className="w-full bg-[#ED2939] py-16 mt-16 relative overflow-hidden rounded-2xl">
              {/* Ambient Background Glow */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-black/10 blur-[120px]" />
              </div>

              <div className="max-w-[1200px] mx-auto relative z-10 px-4">
                <div className="mb-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3">
                    Why Clients Choose Us
                  </h2>
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-8 bg-white" />
                    <p className="text-sm text-white font-black uppercase tracking-widest">
                      The Sayantrik Standard
                    </p>
                    <div className="h-px w-8 bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {trustPillars.map((pillar, idx) => (
                    <div key={idx} className="group relative bg-white/10 border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-start gap-4">

                        <div>
                          <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1">{pillar.title}</h3>
                          <p className="text-white/80 text-xs leading-relaxed font-medium group-hover:text-white transition-colors">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Footer */}
            <Footer />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckCircle2, TrendingUp, ShieldCheck, FileCheck, Layers, Globe2, Zap, Users,
  ClipboardList, Hammer, Gauge, Monitor, Link, Calendar, Briefcase, UserPlus, CheckCheck,
  PenTool, Truck, HardHat, Coins, Clock, LayoutDashboard, Eye, Network, BarChart4,
  LineChart, PieChart, Gavel, Scale, AlertTriangle, Landmark, FileSearch, Handshake,
  Factory, CircuitBoard, Search, Rocket, Scan, Box, Cpu, FileCode, Award
} from "lucide-react";

const Services = () => {
  const lifecycleSteps = [
    {
      fel: "FEL-1",
      action: "Identify",
      phase: "Feasibility",
      bg: "bg-[#0a0a0a]",
      delay: 0,
      targetId: "fel3" // Note: Currently mapped to FEL-3 as starting entry
    },
    {
      fel: "FEL-2",
      action: "Select",
      phase: "Pre-FEED",
      bg: "bg-[#ED2939]",
      delay: 0.1,
      targetId: "fel3"
    },
    {
      fel: "FEL-3",
      action: "Define",
      phase: "FEED",
      bg: "bg-[#0a0a0a]",
      delay: 0.2,
      targetId: "fel3"
    },
    {
      fel: "FEL-4",
      action: "Execute",
      phase: "EPC / Detail",
      bg: "bg-[#ED2939]",
      delay: 0.3,
      targetId: "fel4"
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

  // FEL-3 Data
  const featuresFel3 = [
    {
      title: "Investment-Grade Cost Estimates",
      desc: "AFE-quality estimates (±10-15%) backed by a detailed engineering basis and market-validated pricing.",
      icon: <TrendingUp className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "De-Risked Project Definition",
      desc: "Complete safety studies, risk registers, and mitigation plans to minimize surprises during execution.",
      icon: <ShieldCheck className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Execution-Ready Packages",
      desc: "Complete deliverables for seamless transition to EPC: P&IDs, equipment specs, 3D model, and contracting strategy.",
      icon: <Layers className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Confident FID Decisions",
      desc: "Clear project scope, validated schedule, and comprehensive risk assessment to support investment decisions.",
      icon: <FileCheck className="w-8 h-8 text-[#ED2939]" />
    }
  ];

  const advantagesFel3 = [
    {
      title: "Integrated Teams",
      desc: "Process, mechanical, piping, electrical, instrumentation, and civil/structural working as one coordinated unit.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Sector Expertise",
      desc: "Deep experience across refineries, petrochemicals, chemicals, fertilizers, power, and sustainability projects.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Cost Efficiency",
      desc: "India-based execution delivering a significant cost advantage without compromising quality.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Global Standards",
      desc: "Full compliance with international codes and client-specific standards.",
      icon: <Globe2 className="w-5 h-5" />
    }
  ];

  // FEL-4 Data
  const featuresFel4 = [
    {
      title: "Zero-Rework Deliverables",
      desc: "Multi-level QC process (self-check → peer review → lead approval). Clash-free 3D models with full dimensional control.",
      icon: <CheckCheck className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Accurate MTOs & BOQs",
      desc: "Precise material take-offs extracted from 3D models, validated against vendor data, and ready for procurement.",
      icon: <ClipboardList className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Constructability Built-In",
      desc: "Designs reviewed for practical field execution, maintenance access, and construction sequencing.",
      icon: <Hammer className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Fast-Track Capability",
      desc: "160+ engineers allow parallel workstreams, extended hours delivery, and rapid scale-up for aggressive schedules.",
      icon: <Gauge className="w-8 h-8 text-[#ED2939]" />
    }
  ];

  const advantagesFel4 = [
    {
      title: "Scalable Capacity",
      desc: "160+ engineers ready to mobilize – augment your team or take full ownership.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Platform Flexibility",
      desc: "We work on your preferred design platforms and follow your specific standards.",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Vendor Integration",
      desc: "Seamless incorporation of vendor data with rigorous technical review.",
      icon: <Link className="w-5 h-5" />
    },
    {
      title: "Schedule Adherence",
      desc: "Proven track record of on-time delivery with construction-sequenced work packages.",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  // Navigation Labels
  const serviceSections = [
    { id: "fel3", label: "FEL-3 | DEFINE" },
    { id: "fel4", label: "FEL-4 | EXECUTE" },
    { id: "epc", label: "EPC | EXECUTE" },
    { id: "epcm", label: "EPCM | MANAGE" },
    { id: "pmc", label: "PMC | OVERSIGHT" },
    { id: "owners-eng", label: "OWNER'S ENG" },
    { id: "tech", label: "TECH | INTEGRATION" },
    { id: "brownfield", label: "BROWNFIELD" },
    { id: "laser", label: "LASER SCAN" }
  ];

  const [activeSection, setActiveSection] = useState("fel3");

  // Scroll Spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 150; // Offset for header

      for (const section of serviceSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjusted for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const engagementModels = [
    {
      title: "Full Detail Engineering",
      desc: "End-to-end ownership from FEED handover to IFC (Issued for Construction).",
      icon: <Briefcase className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Team Augmentation",
      desc: "Dedicated resources embedded directly into your project team.",
      icon: <UserPlus className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Discipline Packages",
      desc: "Specific scope like piping design, structural analysis, or electrical detailing.",
      icon: <Layers className="w-6 h-6 text-[#ED2939]" />
    }
  ];

  // EPC Data
  const epcPillars = [
    {
      title: "ENGINEERING",
      items: ["Complete detail design", "3D model & drawings", "Fast-track delivery", "Design optimization"],
      icon: <PenTool className="w-10 h-10 text-[#ED2939]" />,
      bg: "bg-slate-50"
    },
    {
      title: "PROCUREMENT",
      items: ["Technical specifications", "Bid evaluation (TBE)", "Vendor document review", "Inspection services"],
      icon: <Truck className="w-10 h-10 text-[#ED2939]" />,
      bg: "bg-white"
    },
    {
      title: "CONSTRUCTION",
      items: ["Site engineering", "Technical queries resolution", "As-built updates", "Commissioning support"],
      icon: <HardHat className="w-10 h-10 text-[#ED2939]" />,
      bg: "bg-slate-50"
    }
  ];

  const advantagesEpc = [
    {
      title: "EPC Contractor Support",
      desc: "Engineering capacity on demand—scale up quickly for large-scale projects.",
      icon: <Users className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Owner's EPC Team",
      desc: "Supplementing your in-house team with specialized technical disciplines.",
      icon: <Briefcase className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Cost Advantage",
      desc: "Competitive India-based rates to improve overall project margins.",
      icon: <Coins className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Extended Hours",
      desc: "Strategic India-USA time zone coverage to accelerate project schedules.",
      icon: <Clock className="w-6 h-6 text-[#ED2939]" />
    }
  ];

  // EPCM Data
  const featuresEpcm = [
    {
      title: "Complete Project Control",
      desc: "Clients retain direct contracts with vendors and contractors – ensuring full visibility into costs and decisions.",
      icon: <LayoutDashboard className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Expert Management",
      desc: "Professional project management from concept to commissioning without losing owner control.",
      icon: <Briefcase className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Flexible Change Management",
      desc: "Easier to incorporate scope changes without high contractor premiums; you manage the trade-offs.",
      icon: <Network className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Single Point of Contact",
      desc: "One dedicated team coordinating engineering, procurement, and construction activities on your behalf.",
      icon: <Users className="w-8 h-8 text-[#ED2939]" />
    }
  ];

  const advantagesEpcm = [
    {
      title: "Integrated Delivery",
      desc: "Engineering, procurement support, and construction oversight provided by one cohesive team.",
      icon: <Layers className="w-5 h-5 text-gray-700" />
    },
    {
      title: "Local Presence",
      desc: "A strong India vendor network combined with expert site supervision capability.",
      icon: <Globe2 className="w-5 h-5 text-gray-700" />
    },
    {
      title: "Transparent Reporting",
      desc: "Real-time project dashboards, cost tracking, and schedule monitoring.",
      icon: <BarChart4 className="w-5 h-5 text-gray-700" />
    },
    {
      title: "Risk Mitigation",
      desc: "Independent oversight that protects your interests throughout the entire project.",
      icon: <ShieldCheck className="w-5 h-5 text-gray-700" />
    }
  ];

  // PMC Data
  const featuresPmc = [
    {
      title: "Schedule & Cost Control",
      desc: "Real-time monitoring, variance analysis, and proactive recovery plans to protect your baseline.",
      icon: <LineChart className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Contractor Performance",
      desc: "Independent monitoring of contractor deliverables, milestones, and quality standards.",
      icon: <Gavel className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Risk & Change Management",
      desc: "Systematic risk tracking, change order evaluation, and impact assessment to avoid cost overruns.",
      icon: <AlertTriangle className="w-8 h-8 text-[#ED2939]" />
    },
    {
      title: "Management Dashboards",
      desc: "Executive-level reporting with KPIs, trends, and actionable insights for decision-making.",
      icon: <PieChart className="w-8 h-8 text-[#ED2939]" />,
      isDashboard: true
    }
  ];

  const advantagesPmc = [
    {
      title: "Technical + Management",
      desc: "PMC backed by engineering depth – we understand the technical issues behind delays.",
      icon: <PenTool className="w-5 h-5 text-white" />
    },
    {
      title: "Project Veterans",
      desc: "Team includes professionals with major capital project experience across sectors.",
      icon: <HardHat className="w-5 h-5 text-white" />
    },
    {
      title: "Independent Voice",
      desc: "We represent your interests, not the contractors'.",
      icon: <Scale className="w-5 h-5 text-white" />
    }
  ];

  // Owner's Engineer Data
  const featuresOe = [
    {
      title: "Design Verification",
      desc: "Independent review of contractor's engineering to ensure compliance with your specifications.",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      title: "Technical Due Diligence",
      desc: "Expert assessment for acquisitions, investments, and technology evaluations.",
      icon: <FileSearch className="w-8 h-8" />
    },
    {
      title: "Construction Oversight",
      desc: "Monitor construction progress, equipment compliance, and quality without managing the contractor.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Commissioning Verification",
      desc: "Witness equipment testing, verify performance guarantees, and ensure proper handover.",
      icon: <CheckCheck className="w-8 h-8" />
    }
  ];

  const advantagesOe = [
    {
      title: "Early Engagement Value",
      desc: "The earlier we join, the more we save you – proper planning prevents costly rework.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "Multi-Sector Expertise",
      desc: "Experience across energy, chemicals, power, and sustainability to validate technology choices.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Lender's Engineer",
      desc: "Support for project finance with independent technical assessment.",
      icon: <Landmark className="w-5 h-5" />
    }
  ];

  // Process Technology Integration Data
  const featuresTech = [
    {
      title: "Your Local Representative",
      desc: "Client interface, pre-sales support, regulatory navigation, and local vendor network in India.",
      icon: <Handshake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "BOP & OSBL Integration",
      desc: "Complete facility integration including utilities, storage, interconnecting piping, and infrastructure.",
      icon: <Factory className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Inspection & Expediting",
      desc: "Vendor inspection, progress monitoring, quality assurance, and factory acceptance testing.",
      icon: <Search className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Validation & Compliance",
      desc: "Design validation, Indian regulatory compliance (PESO, SMPV, IBR), and performance verification.",
      icon: <FileCheck className="w-8 h-8 text-cyan-600" />
    }
  ];

  const partnershipModels = [
    {
      title: "Preferred Engineering Partner",
      desc: "Your recommended partner for projects in India.",
      icon: <Handshake className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Capacity Extension",
      desc: "Operating as an extension of your team under your brand.",
      icon: <Users className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Consortium Bidding",
      desc: "Bidding together as a Technology + Engineering team.",
      icon: <Briefcase className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Technology Commercialization",
      desc: "Helping emerging technologies enter the India market.",
      icon: <Rocket className="w-6 h-6 text-cyan-500" />
    }
  ];

  // Brownfield Data
  const featuresBrownfield = [
    {
      title: "Optimized Shutdown Scope",
      desc: "Hot work vs. cold work classification, pre-fabrication maximization, and tie-in optimization to minimize downtime.",
      icon: <Clock className="w-8 h-8 text-amber-600" />
    },
    {
      title: "As-Built Reality Check",
      desc: "Laser scanning to capture existing conditions—ensuring no surprises during construction.",
      icon: <Search className="w-8 h-8 text-amber-600" />
    },
    {
      title: "Debottlenecking Studies",
      desc: "Process simulation to identify capacity constraints and deliver cost-effective solutions.",
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />
    },
    {
      title: "Safe Integration",
      desc: "MOC (Management of Change) support, safety reviews for modifications, and proper isolation philosophy for live plant work.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />
    }
  ];

  const projectTypes = [
    {
      title: "Capacity Expansion & Efficiency",
      icon: <TrendingUp className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Equipment Replacement & Safety",
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Environmental Compliance",
      icon: <Globe2 className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Turnaround Engineering",
      icon: <Clock className="w-6 h-6 text-amber-500" />
    }
  ];

  // Laser Scan Data
  const featuresLaser = [
    {
      title: "High-Definition 3D Point Cloud",
      desc: "Millimeter-accurate scan data of your existing facility – applicable for both onshore and offshore assets.",
      icon: <Scan className="w-8 h-8 text-violet-600" />
    },
    {
      title: "Intelligent As-Built Models",
      desc: "3D CAD models with intelligent components for engineering use on your preferred platform.",
      icon: <Box className="w-8 h-8 text-violet-600" />
    },
    {
      title: "Clash-Free Modifications",
      desc: "Design new equipment within the scan environment to eliminate field fit-up problems entirely.",
      icon: <Cpu className="w-8 h-8 text-violet-600" />
    },
    {
      title: "Engineering Deliverables",
      desc: "P&IDs, layouts, isometrics, and structural drawings—all extracted from accurate scan data.",
      icon: <FileCode className="w-8 h-8 text-violet-600" />
    }
  ];

  const laserApplications = [
    "Decommissioning planning and tank calibration"
  ];

  // Trust Footer Data
  const trustPillars = [
    {
      title: "160+ Engineers",
      desc: "Scalable capacity for any project size.",
      icon: <Users className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Multi-Sector Expertise",
      desc: "Energy, Chemicals, Power, & Sustainability.",
      icon: <Layers className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Cost Advantage",
      desc: "Significant savings with India-based delivery.",
      icon: <Coins className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "Global Delivery",
      desc: "Seamless execution via India, Malaysia, & USA.",
      icon: <Globe2 className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "ISO 9001:2015",
      desc: "TUV:SUD certified quality systems.",
      icon: <Award className="w-6 h-6 text-[#ED2939]" />
    },
    {
      title: "250+ Projects",
      desc: "Proven track record since 2012.",
      icon: <Briefcase className="w-6 h-6 text-[#ED2939]" />
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* 1. Global Portfolio Info Bar - Premium Hybrid Design */}
      <div className="w-full bg-[#0a0a0a] border-b border-white/10 py-3 top-[64px] z-30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(237,41,57,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center">
            <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] drop-shadow-md">Services Applicable Across All Portfolios</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-gradient-to-b from-transparent via-[#ED2939] to-transparent" />
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-bold text-white uppercase tracking-wider">
              {['Energy', 'Chemicals', 'Power', 'Sustainability'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED2939] group-hover:shadow-[0_0_8px_#ED2939] transition-shadow duration-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-0">
        {/* 2. Section Title - Premium Centered Hybrid */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="pl-6 border-l-8 border-[#ED2939] inline-block text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-2">
                Project Lifecycle
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium uppercase tracking-widest">
                Where We Add Value
              </p>
            </div>
          </motion.div>
        </div>

      </div>



      {/* 3. Interactive Project Lifecycle Table/Flow - Reduced Width Chevron Design */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[160px] items-center lg:items-stretch justify-center max-w-[1380px] mx-auto">
          {lifecycleSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              onClick={() => step.targetId && scrollToSection(step.targetId)}
              className={`
                    relative w-full lg:w-1/5 h-[140px] lg:h-auto
                    flex flex-col
                    transition-all duration-300 ease-in-out
                    group cursor-pointer active:scale-95
                    lg:-ml-8 first:lg:ml-0
                `}
              style={{
                zIndex: 50 - idx,
              }}
            >
              <div
                className={cn(
                  "h-full w-full p-2 flex flex-col items-center justify-center text-center text-white transition-all duration-300",
                  step.bg,
                  step.bg === "bg-[#0a0a0a]" ? "group-hover:bg-[#ED2939]" : "group-hover:bg-[#0a0a0a]",
                  "group-hover:scale-105 group-hover:z-[60] group-hover:shadow-2xl"
                )}
                style={{
                  clipPath:
                    window.innerWidth >= 1024
                      ? idx === 0
                        ? 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)'
                        : idx === lifecycleSteps.length - 1
                          ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 30px 50%)'
                          : 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%, 30px 50%)'
                      : 'none'
                }}
              >
                <div className={`w-full ${idx !== 0 ? 'lg:pl-8' : ''} ${idx !== lifecycleSteps.length - 1 ? 'lg:pr-4' : ''}`}>
                  <h3 className="text-3xl lg:text-4xl font-black uppercase mb-1 tracking-tighter opacity-100">
                    {step.fel}
                  </h3>
                  <p className="text-lg font-bold uppercase tracking-wider mb-2 border-b-2 border-white/20 pb-2 inline-block group-hover:border-white">
                    {step.action}
                  </p>
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase tracking-widest opacity-75">Phase</p>
                    <p className="text-base font-bold">{step.phase}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.2em] mb-8 px-4 border-b-2 border-[#ED2939] pb-2 inline-block">Services</h3>
            {serviceSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full text-left px-4 py-4 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 border-l-4",
                  activeSection === section.id
                    ? "text-[#ED2939] border-[#ED2939] translate-x-1"
                    : "text-gray-400 border-transparent hover:text-gray-900 hover:border-gray-200"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-12 opacity-30">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase">SEC-GS / GLOBAL-SERVICES</span>
            <div className="flex-1 mx-8 h-px bg-gray-200" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#ED2939]">REF-ID: 2025-SYK</span>
          </div>

          {/* 4. Service Detail: FEED | FEL-3 */}
          <div id="fel3" className="max-w-7xl mx-auto border-t border-gray-200 pt-16 mb-20 group">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                FEED | FEL-3
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Front-End Engineering Design
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  The most critical phase for capital cost optimization. We define the project baseline, identify technical risks, and establish the 30% cost estimate accuracy required for Final Investment Decision (FID).
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
              {/* Left: What You Get (Feature Grid) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Core Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresFel3.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Sayantrik Advantage */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Strategic Focus
                </h3>
                <div className="space-y-8">
                  {advantagesFel3.map((adv, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4 last:border-0">
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">{adv.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Partnership Callout Box (Embedded in sidebar for visibility) */}
                <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShieldCheck className="w-24 h-24" />
                  </div>
                  <h4 className="text-[#ED2939] font-black uppercase tracking-widest text-sm mb-2">Strategic Partnership</h4>
                  <h3 className="text-2xl font-bold mb-4">Energy Sector Focus</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    For refinery, petrochemical, and LNG projects, leveraging our <span className="text-white font-bold">LCTS partnership</span> providing Houston-based process engineering leadership with 80+ years of combined experience.
                  </p>
                  <button className="text-sm font-bold uppercase tracking-widest border-b border-[#ED2939] pb-1 hover:text-[#ED2939] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Metrics Footer Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <TrendingUp className="w-6 h-6 text-[#ED2939]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Typical Duration</p>
                  <p className="text-lg font-bold text-gray-900">4-8 Months</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden md:block" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Users className="w-6 h-6 text-[#ED2939]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Team Structure</p>
                  <p className="text-lg font-bold text-gray-900">PM + Lead Engineers</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden md:block" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <FileCheck className="w-6 h-6 text-[#ED2939]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Primary Output</p>
                  <p className="text-lg font-bold text-gray-900">Complete FEED Package</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Service Detail: DETAILED ENGINEERING | FEL-4 */}
          <div id="fel4" className="max-w-7xl mx-auto border-t border-gray-200 pt-16 mb-20 group">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                DETAILED ENGINEERING
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Precision Execution | FEL-4
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  We transform the process package into a construction-ready blueprints, encompassing all disciplines from process and mechanical to instrumentation and civil.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
              {/* Left: What You Get (Deliverables Grid) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Construction-Ready Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresFel4.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Sayantrik Advantage (Core Strengths) */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Strategic Focus
                </h3>
                <div className="space-y-8">
                  {advantagesFel4.map((adv, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4 last:border-0">
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">{adv.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Flexible Engagement Models */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center md:text-left">
                Flexible Engagement Models
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {engagementModels.map((model, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-[#ED2939] hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      {model.icon}
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#ED2939] transition-colors">{model.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {model.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8. Service Detail: EPC | Execute */}
          <div id="epc" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                EPC: Execute
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Engineering, Procurement & Construction
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Complete engineering backbone for your turnkey projects – from design to commissioning support.
                </p>
              </div>
            </div>

            {/* EPC Lifecycle - 3-Column Pillar Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
              {epcPillars.map((pillar, idx) => (
                <div key={idx} className={`rounded-xl border border-gray-200 overflow-hidden ${pillar.bg} hover:shadow-xl transition-shadow duration-300`}>
                  <div className="bg-gray-900 p-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-wider">{pillar.title}</h3>
                    <div className="p-2 bg-white/10 rounded-lg">
                      {pillar.icon}
                    </div>
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

            {/* The Sayantrik Advantage - Competitive Edge */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Globe2 className="w-96 h-96 text-white" />
              </div>

              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-12 relative z-10 border-b border-white/10 pb-6">
                The Sayantrik Advantage
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                {advantagesEpc.map((adv, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl h-fit border border-white/10 group-hover:border-[#ED2939] group-hover:bg-[#ED2939]/10 transition-all duration-300">
                      {adv.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{adv.title}</h4>
                      <p className="text-gray-400 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 9. Service Detail: EPCM | Full Lifecycle */}
          <div id="epcm" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20 group">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                EPCM | Full Lifecycle
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Engineering, Procurement & Construction Management
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Full transparency and control over your project – we manage, you decide.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
              {/* Left: What You Get (Management Benefits Grid) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Management Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresEpcm.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Sayantrik Advantage (Management Depth) */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Strategic Focus
                </h3>
                <div className="space-y-8">
                  {advantagesEpcm.map((adv, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4 last:border-0">
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">{adv.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 10. Service Detail: PMC | Full Lifecycle */}
          <div id="pmc" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                PMC | Full Lifecycle
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Project Management Consultancy
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Expert oversight that keeps your project on track – schedule, cost, and quality.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
              {/* Control & Oversight Grid (2x2) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Control & Oversight
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresPmc.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Sayantrik Advantage - Boardroom Style Sidebar */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Strategic Focus
                </h3>
                <div className="space-y-8">
                  {advantagesPmc.map((adv, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4 last:border-0">
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">{adv.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 11. Service Detail: OWNER'S ENGINEER | Full Lifecycle */}
          <div id="owners-eng" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20 group">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                OWNER'S ENGINEER
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Technical Advisory & Independent Review
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Your technical guardian – independent expertise protecting your investment through full lifecycle oversight.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
              {/* Left: What You Get (Quality Assurance Grid) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Quality Assurance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresOe.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Sayantrik Advantage (Strategic Value) */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Strategic Focus
                </h3>
                <div className="space-y-8">
                  {advantagesOe.map((adv, idx) => (
                    <div key={idx} className="border-b border-gray-50 pb-4 last:border-0">
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">{adv.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 12. Service Detail: PROCESS TECHNOLOGY INTEGRATION */}
          <div id="tech" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20 group">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                PROCESS TECHNOLOGY INTEGRATION
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Licensor Partnership & BOP Engineering
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  We bridge the gap between process technology and physical reality, delivering seamless facility integration and Indian regulatory compliance.
                </p>
              </div>
            </div>

            {/* Target Audience Block */}
            <div className="bg-slate-900 text-white p-10 rounded-3xl mb-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Handshake className="w-64 h-64" />
              </div>
              <div className="md:w-1/3 relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-[#ED2939]">For Technology Licensors</h3>
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">& Equipment Suppliers</p>
              </div>
              <div className="md:w-2/3 relative z-10 border-l border-white/20 pl-0 md:pl-10">
                <p className="text-lg leading-relaxed text-gray-300">
                  Sayantrik serves as your engineering arm in India and emerging markets. We translate Process Design Packages into fully integrated, constructible facilities, bridging the gap between <span className="text-white font-bold">proprietary technology</span> and <span className="text-white font-bold">local execution</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
              {/* Left: What You Get (Integration Grid) */}
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Integration Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresTech.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Partnership Models */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Partnership Models
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {partnershipModels.map((model, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-[#ED2939] hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-3 mb-3">
                        {model.icon}
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#ED2939] transition-colors">{model.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {model.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 13. Service Detail: BROWNFIELD MODIFICATIONS */}
          <div id="brownfield" className="max-w-7xl mx-auto border-t-2 border-[#ED2939] pt-16 mb-20 group">
            <div className="mb-12">
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                BROWNFIELD MODIFICATIONS
              </h2>
              <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                Plant Revamp & Tie-in Engineering
              </p>
              <div className="max-w-3xl">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  We specialize in modifications to live operating assets, where safety, minimal downtime, and exact as-built accuracy are non-negotiable.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="lg:w-3/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Operational Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresBrownfield.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/4">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-8">
                  Project Capabilities
                </h3>
                <div className="space-y-6">
                  {projectTypes.map((type, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0">
                      <div className="w-1.5 h-1.5 bg-[#ED2939] rounded-full" />
                      <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">{type.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 14. Service Detail: LASER SCAN & DIGITAL TWINS */}
          <div id="laser" className="max-w-7xl mx-auto border-t border-gray-200 pt-16 mb-20 group">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="lg:w-3/4">
                <div className="mb-12">
                  <h2 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                    LASER SCAN & DIGITAL TWINS
                  </h2>
                  <p className="text-xl text-[#ED2939] font-bold uppercase tracking-widest mb-6">
                    Reality Capture & As-Built Modeling
                  </p>
                  <div className="max-w-xl">
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      Eliminate fit-up issues and manual measurement errors. We convert high-definition point clouds into intelligent 3D CAD models.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresLaser.map((feature, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-gray-100">
                      <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                      <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/4">
                <div className="sticky top-40 bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4 text-center">
                      The Digital Advantage
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-sm">
                      Reduce site visits by 80% and construction rework by 100% with millimeter-accurate data.
                    </p>
                    <div className="w-full space-y-4">
                      {['Clash Detection', 'Remote Virtual Walkthroughs', 'Tank Calibration', 'BIM Integration'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center text-sm font-bold uppercase tracking-widest text-gray-900 bg-white py-3 px-6 rounded-xl shadow-sm">
                          <CheckCheck className="w-4 h-4 text-[#ED2939]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 15. Closing Trust Section: Why Clients Choose Us */}
          <div className="border-t-2 border-gray-200 py-20 mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                  Why Clients Choose Us
                </h2>
                <p className="text-lg text-[#ED2939] font-black uppercase tracking-widest">
                  The Sayantrik Standard
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trustPillars.map((pillar, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-gray-100">
                    <div className="absolute left-0 top-0 w-1 h-6 bg-[#ED2939]" />
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3 capitalize">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

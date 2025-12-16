export interface ServiceItem {
  title: string;
  items: string[];
}

export interface IndustryService {
  id: string;
  title: string;
  description: string;
  categories: ServiceItem[];
  capability: string;
}

export interface LifecyclePhase {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  standards: string[];
  duration: string;
  teamComposition: string[];
  softwareTools: string[];
}

export const industryServices: IndustryService[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas – Onshore & Offshore",
    description: "Sayantrik delivers full-scope engineering, digitalization, and revamp support for upstream and midstream Oil & Gas assets.",
    categories: [
      {
        title: "Onshore Units",
        items: [
          "Gas–Oil Separation Plants (GOSP)",
          "Early Production Facilities (EPF)",
          "Oil & Gas Gathering Stations",
          "Slug Catchers & Manifolds",
          "Dehydration & Desalting Units",
          "Gas Sweetening (Amine) Units",
          "Gas Compression Stations",
          "Produced Water Treatment Units",
          "Fiscal Metering & Custody Transfer",
          "Cross-country & Field Pipeline Networks"
        ]
      },
      {
        title: "Offshore Units",
        items: [
          "Wellhead Platforms (WHP)",
          "Central Processing Platforms (CPP)",
          "Riser & Manifold Platforms",
          "Flare Systems",
          "Living Quarters (LQ)",
          "Subsea Tie-backs",
          "Satellite Platforms",
          "Brownfield Deck Modifications"
        ]
      }
    ],
    capability: "We support process, piping, mechanical, civil/structural, electrical, instrumentation, stress analysis, laser scanning, 3D modelling, and revamp tie-ins for all Oil & Gas units."
  },
  {
    id: "refineries",
    title: "Refineries",
    description: "We engineer all primary processing, conversion, treating, and utility units of modern refineries.",
    categories: [
      {
        title: "Primary Processing",
        items: [
          "Crude Distillation Unit (CDU)",
          "Vacuum Distillation Unit (VDU)"
        ]
      },
      {
        title: "Conversion Units",
        items: [
          "Fluid Catalytic Cracking Unit (FCCU)",
          "Hydrocracker Unit (HCU)",
          "Delayed Coker Unit (DCU)",
          "Visbreaker Unit",
          "Residue Upgrading Blocks"
        ]
      },
      {
        title: "Reforming & Treating",
        items: [
          "Naphtha / Kerosene / Diesel Hydrotreaters",
          "Catalytic Reforming Units (CCR/SRR)",
          "Merox Treaters"
        ]
      },
      {
        title: "Hydrogen & Sulfur Management",
        items: [
          "Hydrogen Generation Unit (SMR)",
          "Amine Treatment Units",
          "Sour Water Stripper (SWS)",
          "Sulfur Recovery Unit (SRU – Claus)",
          "Tail Gas Treatment Unit (TGTU)"
        ]
      },
      {
        title: "Refinery Offsites",
        items: [
          "Tank Farms",
          "Blending Systems",
          "Loading/Unloading Areas",
          "Utility Networks",
          "Flare Systems"
        ]
      }
    ],
    capability: "We provide complete multi-discipline engineering, shutdown engineering, brownfield tie-ins, 3D digital twins, laser scanning, and detailed engineering across every refinery unit."
  },
  {
    id: "petrochemical",
    title: "Petrochemical & Chemical Plants",
    description: "We support complex petrochemical, polymer, aromatics, and specialty chemical facilities.",
    categories: [
      {
        title: "Olefins & Polymers",
        items: [
          "Steam Crackers",
          "Ethylene/Propylene Recovery Units",
          "Butadiene Extraction",
          "HDPE / LDPE / PP",
          "PVC / PET / ABS / Nylon / Polycarbonates"
        ]
      },
      {
        title: "Aromatics (BTX)",
        items: [
          "Benzene",
          "Toluene",
          "Mixed Xylene",
          "Paraxylene (PX)",
          "PTA Units"
        ]
      },
      {
        title: "Basic & Specialty Chemicals",
        items: [
          "Chlor-Alkali Plants",
          "Sulfuric, Nitric & Phosphoric Acid Plants",
          "Solvent Recovery Plants",
          "Resins & Specialty Chemical Blocks"
        ]
      }
    ],
    capability: "We deliver simulation, sizing, equipment layouts, stress analysis, safety studies, 3D modelling, MTO/BOQ, and complete engineering packages."
  },
  {
    id: "fertilizer",
    title: "Fertilizer & Methanol Units",
    description: "Complete engineering services for ammonia, urea, syngas and methanol complexes.",
    categories: [
      {
        title: "Fertilizer Units",
        items: [
          "Ammonia Plants",
          "Urea (Prilling/Granulation)",
          "Ammonium Nitrate / Ammonium Sulfate",
          "Phosphatic Fertilizers (DAP, NPK)"
        ]
      },
      {
        title: "Methanol & Derivatives",
        items: [
          "Syngas Generation Units",
          "Methanol Synthesis Units",
          "Methanol-to-Olefins (MTO) Units"
        ]
      },
      {
        title: "Associated Utilities",
        items: [
          "CO₂ Recovery",
          "Steam & Power Systems",
          "Cooling Water Networks",
          "Inert Gas Systems"
        ]
      }
    ],
    capability: "We support process, piping, mechanical, civil, electrical, instrumentation, 3D modelling, revamp engineering, brownfield tie-ins, and shutdown planning."
  },
  {
    id: "terminals",
    title: "Terminals & Tank Farms",
    description: "Engineering support for petroleum product storage, distribution, and loading facilities.",
    categories: [
      {
        title: "Storage",
        items: [
          "Crude Oil Tanks",
          "Product Tanks (FO, Diesel, Gasoline)",
          "LPG Spheres",
          "LNG/Ammonia Refrigerated Tanks"
        ]
      },
      {
        title: "Terminal Systems",
        items: [
          "Pump Houses",
          "Truck Loading/Unloading Gantries",
          "Marine Terminals / Jetties",
          "Pipeline Routing (AG/UG)",
          "Blending & Metering Systems",
          "SCADA/Automation Integration"
        ]
      },
      {
        title: "Safety Systems",
        items: [
          "Fire Water Networks",
          "Foam Systems",
          "Gas Detection & Safety Control"
        ]
      }
    ],
    capability: "We deliver tank design support, layout engineering, fire protection systems, pipeline routing, and 3D digitalization."
  },
  {
    id: "utility",
    title: "Utility & Offsite Systems",
    description: "Utilities are the backbone of every process plant — we engineer all utility and offsite facilities.",
    categories: [
      {
        title: "Utility Units",
        items: [
          "Boiler Feed Water Systems",
          "Steam Generation / Condensate Recovery",
          "Cooling Water Systems",
          "Chilled Water Networks",
          "Air Separation Units",
          "Instrument Air & Nitrogen",
          "Raw Water / DM Water / RO Plants",
          "Power Distribution, Substations & MCC Rooms"
        ]
      },
      {
        title: "Offsite Facilities",
        items: [
          "Flare Systems",
          "ETP / STP Plants",
          "Oily Water Systems",
          "Roads, Drains & Infrastructure",
          "Pipe Racks & Pipe Bridges",
          "Loading/Unloading Areas"
        ]
      }
    ],
    capability: "Multi-discipline utility engineering, equipment sizing, 3D modelling, MTO/BOQ, layouts, stress analysis and complete offsite design."
  }
];

export const lifecyclePhases: LifecyclePhase[] = [
  {
    id: "consulting",
    title: "Consulting & Feasibility",
    shortDescription: "Strategic assessment, technology selection, and economic modelling to validate project viability.",
    fullDescription: "Our consulting services provide the strategic foundation for successful capital projects. We partner with clients to navigate the complex earliest stages of project development, moving from an initial idea to a validated business case. This phase involves rigorous techno-economic analysis, site selection studies, and technology screening to identify the optimal configuration for the facility. We help owners minimize investment risk by providing +/- 30% CAPEX/OPEX estimates, developing initial execution strategies, and mapping out regulatory requirements. Our approach combines deep technical expertise with market intelligence to ensure that the proposed solution is not only technically feasible but financially robust and aligned with long-term business goals.",
    deliverables: [
      "Feasibility Study Report",
      "Technology Selection Report",
      "Site Selection & Evaluation Study",
      "Preliminary Heat & Material Balances",
      "Block Flow Diagrams (BFD)",
      "CAPEX/OPEX Estimates (+/- 30%)",
      "Preliminary Project Schedule (Level 1)",
      "Risk Assessment Matrix",
      "Initial Environmental Impact Assessment"
    ],
    standards: [
      "AACE International Recommended Practices (Class 4/5 Estimates)",
      "Client Specific Design General Specifications",
      "API / ASME / ASTM preliminary guidelines",
      "Local Environmental Regulations"
    ],
    duration: "6 - 16 Weeks (Dependent on project complexity)",
    teamComposition: [
      "Process Consultants",
      "Project Managers",
      "Cost Estimators",
      "Technology Licensor Representatives",
      "Environmental Specialists"
    ],
    softwareTools: [
      "Aspen Plus / HYSYS (Simulation)",
      "Aspen Process Economic Analyzer (APEA)",
      "Primavera P6 / MS Project",
      "In-house Techno-Economic Models"
    ]
  },
  {
    id: "feed",
    title: "Front-End Engineering Design (FEED)",
    shortDescription: "Defining the technical project scope, cost, and schedule to FID-ready maturity.",
    fullDescription: "The FEED phase is critical for freezing the design concept and establishing a reliable cost estimate (typically +/- 10-15%) to support the Final Investment Decision (FID). During this phase, we translate the conceptual design into comprehensive engineering packages that define the project's technical scope. This involves developing Process Flow Diagrams (PFDs), Piping and Instrumentation Diagrams (P&IDs), detailed equipment data sheets, and preliminary plot plans. Our team conducts safety reviews (HAZOP/SIL) to ensure inherent safety in the design. We also engage with long-lead item vendors and construction contractors to refine the execution strategy. The output of our FEED is a robust technical package that can be seamlessly transitioned into detailed engineering, minimizing changes and cost overruns during execution.",
    deliverables: [
      "Process Flow Diagrams (PFD) & P&IDs",
      "Process Simulation Report",
      "Equipment Data Sheets & Specifications",
      "Overall Plot Plan & Equipment Layouts",
      "Hazard & Operability Study (HAZOP) Report",
      "Functional Design Specifications",
      "Material Selection Diagrams",
      "Cost Estimate (Class 3, +/- 10-15%)",
      "Level 2 Project Schedule",
      "EPC Tender Packages"
    ],
    standards: [
      "API RP 14C / 14E / 14J",
      "ASME B31.3 / B31.4 / B31.8",
      "IEC 61508 / 61511 (Safety Systems)",
      "NACE MR0175 / ISO 15156",
      "Shell DEP / Aramco SAES / Client Standards"
    ],
    duration: "4 - 9 Months",
    teamComposition: [
      "Process Leads & Engineers",
      "Piping & Layout Engineers",
      "Electrical & Instrumentation Specialists",
      "Civil/Structural Engineers",
      "HSE & Technical Safety Engineers",
      "Procurement Specialists"
    ],
    softwareTools: [
      "Aspen HYSYS / Petro-SIM",
      "SmartPlant P&ID (SPPID)",
      "AutoCAD / MicroStation",
      "ETAP (Electrical)",
      "PHA-Pro (HAZOP)"
    ]
  },
  {
    id: "detail-engineering",
    title: "Detailed Engineering",
    shortDescription: "Development of \"Construction-Ready\" drawings, 3D models, and procurement specifications.",
    fullDescription: "Detailed Engineering is where the project comes to life digitally before physical construction begins. We advance the FEED package into a fully defined, construction-ready design. Central to this phase is the development of an intelligent 3D model (Digital Twin) that integrates all disciplines—piping, civil, structural, electrical, and instrumentation. We produce Issued for Construction (IFC) drawings, including isometrics, loop diagrams, single line diagrams, and structural fabrication drawings. Clash detection and model reviews (30%, 60%, 90%) are conducted rigorously to ensure zero-interference construction. Our detailed engineering also includes comprehensive stress analysis, surge analysis, and vendor drawing review to ensure every component integrates perfectly. The result is a precise blueprint for construction that minimizes field rework.",
    deliverables: [
      "Issued for Construction (IFC) Drawings",
      "3D Model (PDS/PDMS/SP3D)",
      "Piping Isometrics & GA Drawings",
      "Structural Fabrication Drawings",
      "Electrical Single Line Diagrams & Cable Schedules",
      "Instrumentation Loop Diagrams & Hook-ups",
      "Foundation Drawings & Bar Bending Schedules",
      "Vendor Document Review Reports",
      "Piping Stress Analysis Reports",
      "MTO (Material Take Off) & BOQ"
    ],
    standards: [
      "ASME Section VIII Div 1/2",
      "B31.3 / B31.1",
      "AWS D1.1 (Structural Welding)",
      "NPFA / OISD",
      "IEEE / IEC Standards"
    ],
    duration: "8 - 18 Months",
    teamComposition: [
      "Lead Discipline Engineers",
      "3D Modelers & Designers",
      "Stress Analysts",
      "Drafting Team",
      "Model Review coordinators"
    ],
    softwareTools: [
      "Intergraph Smart3D (SP3D) / E3D",
      "Caesar II (Pipe Stress)",
      "STAAD.Pro (Structural)",
      "Navisworks (Model Review)",
      "SmartPlant Instrumentation (SPI)"
    ]
  },
  {
    id: "procurement",
    title: "Procurement Support",
    shortDescription: "Strategic sourcing, vendor management, and technical evaluation of equipment and materials.",
    fullDescription: "Our procurement services bridge the gap between engineering specifications and on-site material availability. We manage the entire procurement cycle for technical equipment and bulk materials. This begins with preparing comprehensive Requisitions for Quotation (RFQ) incorporating all technical and commercial requirements. We conduct rigorous Technical Bid Evaluations (TBE) to ensure vendor proposals meet stringent project standards. Following vendor selection, we perform detailed Vendor Document Review (VDR) to align vendor designs with the overall plant engineering. We also oversee inspection and expediting activities to ensure quality compliance and on-time delivery. Our goal is to ensure the right materials, of the right quality, arrive at the site at the right time.",
    deliverables: [
      "Material Requisitions (MR)",
      "Technical Bid Evaluations (TBE)",
      "Vendor Document Review (VDR)",
      "Inspection & Test Plans (ITP) Review",
      "Expediting Reports",
      "Spare Parts Interchangeability Records (SPIR)",
      "Purchase Order Technical Specifications"
    ],
    standards: [
      "ISO 9001 (Quality Management)",
      "Hydraulic Institute Standards",
      "API 610 / 617 / 650 (Equipment)",
      "Incoterms 2020"
    ],
    duration: "Concurrent with Detailed Engineering",
    teamComposition: [
      "Procurement Managers",
      "Package Engineers (Rotating/Static)",
      "Expeditors",
      "Quality Inspectors (TPI)",
      "Contract Administrators"
    ],
    softwareTools: [
      "SAP / Oracle ERP",
      "Smart Materials (SPMAT)",
      "Document Management Systems (DMS)"
    ]
  },
  {
    id: "construction-mgmt",
    title: "Construction Management Support",
    shortDescription: "Field engineering, supervision, and constructability reviews to ensure safe and quality execution.",
    fullDescription: "We provide technical support and supervision during the construction phase to ensure the engineering design is executed safely and accurately. Our involvement starts early with Constructability Reviews during the engineering phase to optimize installation sequences. On-site, our field engineering team resolves technical queries (RFIs) and manages site modifications. We monitor construction quality, oversee heavy lifts, and ensure compliance with HSE standards. We also assist in tracking progress against the Level 3/4 schedules and managing sub-contractor interfaces. Our presence on-site bridges the gap between the design office and the construction workforce, ensuring design intent is preserved and field issues are resolved rapidly.",
    deliverables: [
      "Constructability Review Reports",
      "Field Change Requests (FCR) / Engineering Change Notes",
      "Heavy Lift Plans",
      "Hydrotest Packages",
      "Non-Conformance Reports (NCR)",
      "Weekly/Monthly Progress Reports",
      "Safety Observation Reports"
    ],
    standards: [
      "OSHA Construction Standards",
      "Local Construction Codes",
      "HSE Project Safety Plan",
      "Quality Control Plans (QCP)"
    ],
    duration: "Project Execution Phase",
    teamComposition: [
      "Construction Managers",
      "Field Engineers (Civil/Mech/E&I)",
      "HSE Supervisors",
      "QA/QC Inspectors",
      "Planning Engineers"
    ],
    softwareTools: [
      "Primavera P6",
      "SmartPlant Construction",
      "Navisworks Freedom (Viewer)"
    ]
  },
  {
    id: "commissioning",
    title: "Commissioning & Start-up",
    shortDescription: "Systematic checking, functional testing, and ramp-up of the facility to stable operation.",
    fullDescription: "The transition from construction to operation is a critical phase where systems are energized and process fluids are introduced. Our commissioning methodology follows a structured Systemization approach. We prepare detailed Pre-Commissioning and Commissioning procedures, checksheets, and schedules. Activities include line walk-downs, punch-listing, mechanical completion verification, leak testing, steam blowing, and loop checks. During start-up, our process experts support the operations team in stabilizing the plant, tuning control loops, and performance testing to prove guaranteed parameters. We ensure a safe, smooth, and documented handover to the operations team.",
    deliverables: [
      "Systemization & Turnover Plan",
      "Pre-Commissioning & Commissioning Procedures",
      "Punch Lists (A/B/C categories)",
      "Mechanical Completion Certificates",
      "Loop Check & Function Test Reports",
      "Ready for Start-up (RFSU) Certificate",
      "Performance Test Run Reports",
      "Operating Manuals (SOPs)"
    ],
    standards: [
      "API RP 1FSC (Facilities Completion)",
      "Pre-startup Safety Review (PSSR) Guidelines",
      "Client Commissioning Standards"
    ],
    duration: "3 - 6 Months",
    teamComposition: [
      "Commissioning Managers",
      "Process Engineers",
      "Control System Specialists",
      "Vendor Representatives",
      "Operations Readiness Team"
    ],
    softwareTools: [
      "ICAPS / Completions Management Systems (CMS)",
      "P&ID markups",
      "DCS / PLC Interface"
    ]
  },
  {
    id: "om-support",
    title: "O&M Support",
    shortDescription: "Asset integrity management, troubleshooting, and optimization for sustained performance.",
    fullDescription: "After the plant is operational, our support continues with Operations & Maintenance services designed to maximize asset life and efficiency. We provide brownfield engineering for small projects, debottlenecking studies, and management of change (MOC) engineering. Our asset integrity management services include Risk Based Inspection (RBI) planning, corrosion monitoring, and fitness-for-service assessments. We also support digitalization initiatives, maintaining the plant's Digital Twin and As-Built drawings to reflect current site conditions. Whether it's troubleshooting a process upset or planning a major turnaround/shutdown, we provide the engineering backing to keep the facility running safely and profitably.",
    deliverables: [
      "As-Built Drawings & Models",
      "Asset Integrity Management Plans",
      "Risk Based Inspection (RBI) Reports",
      "Debottlenecking Studies",
      "Root Cause Analysis (RCA) Reports",
      "Turnaround / Shutdown Workpacks",
      "Management of Change (MOC) Documentation"
    ],
    standards: [
      "API 510 / 570 / 653 (Inspection)",
      "API 580 / 581 (RBI)",
      "OSHA PSM (Process Safety Management)",
      "ISO 55000 (Asset Management)"
    ],
    duration: "Ongoing Life of Asset",
    teamComposition: [
      "Plant Engineers",
      "Maintenance Planners",
      "Inspection Engineers",
      "Reliability Engineers",
      "Safety Specialists"
    ],
    softwareTools: [
      "SAP PM / Maximo",
      "Meridium / Credo (RBI)",
      "PI System (Data Historian)",
      "CAD / Scanning Tools"
    ]
  }
];

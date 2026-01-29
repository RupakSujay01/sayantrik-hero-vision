import ammoniaPlantImg from '../assets/ammonia-plant-3d.png';
import compressorStationImg from '../assets/compressor-station-3d.png';
import sulphuricAcidPlantImg from '../assets/sulphuric-acid-plant-3d.png';

export interface Project {
  name: string;
  location: string;
  description: string;
  image?: string;
}

export const feedProjects: Project[] = [
  {
    name: "LNG/LPG Storage & Regasification (60–90 MW)",
    location: "Europe (Multiple Sites)",
    description: "FEED+ engineering services for LNG/LPG unloading, storage, and vaporization systems. Scope included feasibility validation, process design, storage sizing (30–200 MT), engineering deliverables for all disciplines, RFQ packages, MTOs, and EPC contractor selection support."
  },
  {
    name: "Ammonia Plant Revamp (1650 MTPD)",
    location: "Middle East",
    description: "Detailed engineering for a major ammonia plant revamp including piping rerouting, stress analysis, tie-in engineering, pipe rack modifications, and constructability reviews.",
    image: ammoniaPlantImg
  },
  {
    name: "MB-01 Meglumine Project",
    location: "Concept and Basic Engineering",
    description: "Basic engineering for MB-01 Meglumine Project. Scope included process deliverables (P&IDs, line lists), equipment datasheets, piping layouts, BOQs, electrical system design (SLDs, load lists, cable schedules), HVAC system design, clean room design, CSA reports, and 3D modeling."
  },
  {
    name: "Green Hydrogen Plant (15 TPD)",
    location: "India",
    description: "Pre-FEED engineering for a 15 TPD (625 kg/hr) Green Hydrogen Plant. Developed process design (PFD/P&IDs), electrolyser foundation design, piping/civil MTOs, and static equipment design, including electrical load and I/O lists."
  },
  {
    name: "Green Hydrogen Pilot Plant (2 TPD)",
    location: "India",
    description: "Conducted preliminary engineering for a hydrogen facility. Deliverables included PFD/P&ID development, piping and structural MTOs, instrumentation scope, and electrolyser civil design."
  },
  {
    name: "Grassroot Process Unit (Modular Skids)",
    location: "Singapore",
    description: "Engineering for modularized process skids covering structural design, piping layout, pile cap design, equipment relocation, and sea transportation analysis."
  },
  {
    name: "Electrical System Study (Multi-Product Berth)",
    location: "Middle East",
    description: "Performed FEED-stage electrical modeling including Load Flow, Short Circuit, Motor Starting, Harmonic, and Arc Flash analysis using CYME software."
  },
  {
    name: "Acetophenone Recovery Unit (60 TPD)",
    location: "India",
    description: "Delivered Front-End Engineering Design including process simulation, equipment sizing, layout optimization, and detailed MTOs for cost estimation."
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
    description: "Feasibility 3D model generation for plot optimisation and preliminary MTO for the large-scale RO Plant."
  }
];

export const detailProjects: Project[] = [
  {
    name: "Gas Compressor Station (3W + 1S)",
    location: "Turkey",
    description: "Multi-discipline detailed engineering for a 3+1 Gas Compressor Station (3 Working + 1 Standby). Scope included process design, stress analysis, 3D modeling, electrical SLDs, firefighting/HVAC design, and procurement support. Comprehensive deliverables included PFDs, P&IDs, datasheets, GA drawings, DCS/PLC interface documents, and as-built documentation for EPC execution.",
    image: compressorStationImg
  },
  {
    name: "Sulphuric Acid Plant (600 MTPD)",
    location: "India",
    description: "Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant. Scope included OSBL validation, corrosive service piping (high-temperature/low-pressure), static equipment GA drawings, datasheets, P&IDs, plot plans, MTOs, and vendor document review.",
    image: sulphuricAcidPlantImg
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

export const asBuiltProjects: Project[] = [
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

export const preBidProjects: Project[] = [
  {
    name: "EPC Bid Support for Oil & Gas Sector",
    location: "Middle East",
    description: "Pre-Bid 3D model for Material Take-Off (MTO) and Preliminary Layout optimisation to support the commercial proposal for an EPC Bid."
  },
  {
    name: "Skid-Mounted Water Treatment Unit",
    location: "Philippines",
    description: "Creation of a Fast-Track 3D Model and basic Equipment List to generate an estimated Bill of Material (BOM) for the bid submission."
  }
];

import sulphuricAcid3d from "@/assets/sulphuric-acid-plant-3d.png";
import lngLpgStorage from "@/assets/lng-lpg-storage.jpg";
import greenHydrogenPlant from "@/assets/green-hydrogen-plant.jpg";
import greenHydrogenPilot from "@/assets/green-hydrogen-pilot.png";
import ammoniaPlantRevamp from "@/assets/ammonia-plant-revamp.png";
import acetophenoneRecovery from "@/assets/acetophenone-recovery-unit.jpg";
import cymePowerSystem from "@/assets/cyme-power-system-simulator.jpg";
import roseBankFpso from "@/assets/rose-bank-fpso.jpg";
import mb01Meglumine from "@/assets/mb-01-meglumine-project.png";
import ammoniaPlantElectrical from "@/assets/ammonia-plant-electrical.png";
import emasProject from "@/assets/emas-project.jpg";
import processWaterTankDubai from "@/assets/process-water-tank-dubai.jpg";
import recycledWaterTanks from "@/assets/recycled-water-tanks.jpg";
import lindeHydrogen from "@/assets/linde-hydrogen.jpg";
import ongcOffshore from "@/assets/ongc-offshore.jpg";
import rapidTankFarm from "@/assets/rapid-tank-farm.png";
import cairnNeStage2 from "@/assets/cairn-ne-stage2.jpg";
import lactUnits from "@/assets/lact-units.png";
import gailTerminal from "@/assets/gail-terminal.png";
import praiPowerPlant from "@/assets/prai-power-plant.jpg";
import jawa2Demineralization from "@/assets/jawa2-demineralization.jpg";
import tataSteelSupport from "@/assets/tata-steel-support.jpg";
import raichemAoExtension from "@/assets/raichem-ao-extension.jpg";
import psvVerification from "@/assets/psv-verification.jpg";
import pilotReactorFlaker from "@/assets/pilot-reactor-flaker.png";
import agroPelletFeeding from "@/assets/agro-pellet-feeding.png";
import skidWaterTreatment from "@/assets/skid-water-treatment.jpg";
import gsplAsBuilt from "@/assets/gspl-as-built.png";
import condensateDigitization from "@/assets/condensate-digitization.png";
import platformR12 from "@/assets/platform-r12.png";
import butadienePlant from "@/assets/butadiene-plant.png";
import basf2ehMalaysia from "@/assets/basf-2eh-malaysia.png";
import botasAdapazari from "@/assets/botas-adapazari-compressor.png";
import gtlPilotPlant from "@/assets/gtl-pilot-plant.jpg";
import sulphuricAcidDetailed from "@/assets/sulphuric-acid-plant-detailed.png";
import sulphuricAcid300 from "@/assets/sulphuric-acid-plant-300-mtpd.png";
import onshorePipelines from "@/assets/onshore-pipelines-terminals.png";
import gasMidstreamPipeline from "@/assets/gas-midstream-pipeline.jpg";
import sruThermalReactor from "@/assets/sru-thermal-reactor.png";
import teaInjectionPackage from "@/assets/tea-injection-package.png";
import p80Fpso from "@/assets/p-80-fpso.png";
import edcPlantCivil from "@/assets/edc-plant-civil-structural.png";
import tgvSraacCaustic from "@/assets/tgv-sraac-caustic-soda.png";
import ammoniaPlantRussia from "@/assets/ammonia-plant-russia.png";

export interface Project {
  name: string;
  location: string;
  description: string;
  image?: string;
}

export const feedProjects: Project[] = [
  {
    name: "LNG/LPG Storage & Regasification\n(60–90 MW)",
    location: "Europe (Multiple Sites)",
    description: "FEED and engineering services for LNG/LPG storage and regasification plants across 5 European sites. Scope included feasibility validation, process design, vaporization/storage sizing (30–200 MT), engineering deliverables for all disciplines, RFQ packages, MTOs, and EPC contractor selection support.",
    image: lngLpgStorage
  },
  {
    name: "Green Hydrogen Plant\n(15 TPD)",
    location: "Jharkhand, India",
    description: "Pre-FEED engineering for 15 TPD Green Hydrogen Plant (625 kg/hr) including process design (PFD/P&ID), piping MTOs, civil/structural MTOs, static equipment design, electrical load lists, I/O lists, and electrolyser foundation design.",
    image: greenHydrogenPlant
  },
  {
    name: "Green Hydrogen Pilot Plant\n(2 TPD)",
    location: "Madhya Pradesh, India",
    description: "Pre-FEED for 2 TPD Green Hydrogen Plant including PFD/P&ID development, piping MTOs, civil/structural MTOs, electrolyser foundation design, electrical lists, and instrumentation scope.",
    image: greenHydrogenPilot
  },
  {
    name: "Ammonia Plant Revamp\n(1650 MTPD)",
    location: "USA / UAE",
    description: "FEED for revamping the ammonia faculties from 1050 MTPD capacity to 1600 MTPD capacity. Piping layout/ 3D Model/MTO/TIE-IN Cable layouts Pipe rack adequacy for extensions Pipe support drawings Decommissioning plans for Electricals & Instrument system cabinets and hook up details.",
    image: ammoniaPlantRevamp
  },
  {
    name: "Acetophenone Recovery Unit\n(60 TPD)",
    location: "Gujarat, India",
    description: "Delivered Front-End Engineering Design including process simulation, equipment sizing, layout optimization, and detailed MTOs for cost estimation.",
    image: acetophenoneRecovery
  },
  {
    name: "CYME Power System Simulator",
    location: "Qatar, Middle East",
    description: "FEED for Vapour Recovery System Short circuit Study Motor Starting study Transient Stability Arc Flash Analysis Protective device coordination.",
    image: cymePowerSystem
  },
  {
    name: "ROSE BANK FPSO - FEED Engineering",
    location: "Northwest of Shetland Island, Scotland",
    description: "1) Gas Treating for Dehydration and H2S Removal using chemical scavenging. 2) Gas export via pipeline through the turret (Export to SIRGE pipeline).",
    image: roseBankFpso
  },
  {
    name: "MB-01 Meglumine Project",
    location: "Hyderabad, India",
    description: "Basic engineering for MB-01 Meglumine Project. Scope included process deliverables (P&IDs, line lists), equipment datasheets, piping layouts, BOQs, electrical system design (SLDs, load lists, cable schedules), HVAC system design, clean room design, CSA reports, and 3D modeling.",
    image: mb01Meglumine
  },

];

export const detailProjects: Project[] = [
  {
    name: "Bota's Adapazari Compressor Station Project",
    location: "Turkey",
    description: "Comprehensive detailed engineering and multidisciplinary support for EPC procurement and construction of the Compressor Station Project (3 working + 1 standby compressors, total flow capacity 1,945,000 Sm³/h). Deliverables included: PFDs, P&IDs, datasheets, line/valve lists, GA drawings, stress analysis, 3D model reviews, electrical SLDs, DCS/PLC interface documents, firefighting system design, HVAC layouts, procurement support, and as-built documentation.",
    image: botasAdapazari
  },
  {
    name: "GTL Pilot Plant Engineering Services",
    location: "USA",
    description: "Multi-discipline detailed engineering services are required to progress the project from the FEL phase to Approved for Construction (AFC), including provisions for future commercial plant expansion. The scope covers Mechanical (Static & Rotary), Piping, Instrumentation & Control, Electrical, Civil & Structural, and project interfaces.",
    image: gtlPilotPlant
  },
  {
    name: "Sulphuric Acid Plant (600 MTPD)",
    location: "Gujarat, India",
    description: "Detailed engineering and EPC support for a 600 MTPD Sulphuric Acid Plant, covering high-temperature and low-pressure piping, static equipment design, GA drawings, datasheets, P&IDs, plot plans, MTOs, vendor document review, and validation of the basic engineering package for OSBL facilities.",
    image: sulphuricAcidDetailed
  },
  {
    name: "Sulphuric Acid Plant\n(300 MTPD)",
    location: "Karnataka, India",
    description: "Detailed engineering for a 300 MTPD Sulphuric Acid Plant including civil, structural, piping, electrical, and instrumentation works. Deliverables included: foundations, racks, layouts, static equipment GA drawings, datasheets, P&IDs, MTOs, and vendor reviews with interface to licensor DMCC and client MCFL.",
    image: sulphuricAcid300
  },
  {
    name: "9 MMTPA - Onshore Pipelines & Associated Terminals",
    location: "Chennai, India",
    description: "End-to-end detailed engineering for onshore pipelines and terminals at Cauvery Basin Refinery. Scope covered PFDs, P&IDs, datasheets, HAZOP/SIL support, 3D modeling, plot plans, procurement support, and multidisciplinary design for crude oil/product pipelines, manifold junction, jetty and booster stations.",
    image: onshorePipelines
  },
  {
    name: "Gas Midstream Pipeline System\n(115 km)",
    location: "Turkey",
    description: "Detailed engineering for 115 km of 40-inch gas pipeline including block valve stations and pigging stations. Scope involved route finalization, alignment sheets, crossing drawings (HDD/Open cut), hydraulic calculations, stress analysis, cathodic protection design, and preparation of construction tender packages.",
    image: gasMidstreamPipeline
  },
  {
    name: "SRU Thermal Reactor & Incinerator",
    location: "Mumbai, India",
    description: "3D modelling and detailed engineering. Scope included equipment modeling, piping routing, nozzle orientation checks, clash detection, isometric extraction, and MTO generation for seamless procurement and construction.",
    image: sruThermalReactor
  },
  {
    name: "Refinery TEA Injection Package",
    location: "Rajasthan, India",
    description: "Detailed engineering for TEA Injection Package at HRRL Refinery. Scope included piping, civil, and structural engineering, vendor document reviews, and coordination with licensor Heurtey.",
    image: teaInjectionPackage
  },
  {
    name: "Hydrogen Plant Modular Skids",
    location: "Malaysia",
    description: "Detailed engineering for 21 process skids. Scope included 3D modeling, GA drawings, connection details, and fabrication/erection documentation."
  },
  {
    name: "P-80 FPSO Instrumentation Support",
    location: "Brazil",
    description: "Instrumentation engineering support for Petrobras P-80 FPSO Project in Brazil. Scope included cable scheduling, routing, 3D modeling of tray systems, tray layout sheets, and multidisciplinary coordination for 10 modules.",
    image: p80Fpso
  },
  {
    name: "EDC Plant Civil & Structural",
    location: "Oman",
    description: "Civil and Structural detailed engineering for EDC Plant. Scope included 3D modeling of pipe racks and equipment structures, connection design, foundation deliverables, and structural analysis reports.",
    image: edcPlantCivil
  },
  {
    name: "Ammonia Plant Electrical and Static Equipment",
    location: "Mexico",
    description: "Electrical: Electrical lighting engineering for Ammonia Plant O&U area in Mexico. Scope: lighting design calculations, layouts for 25 areas, illumination reports, and BOQs. \nStatic: Vendor document review of 115 static equipment drawings for Ammonia Plant in Mexico. Scope: GA reviews, detailed drawing checks, and vendor compliance validation.",
    image: ammoniaPlantElectrical
  },
  {
    name: "Effluent Management at Source\n(EMAS)",
    location: "Melaka, Malaysia",
    description: "Detail Design work related to modification of existing effluent treatment plant which includes replacement of CS service water network with GRE, GRVE pipe network. Scope includes all non metallic Piping Detail Design complying to ISO17692 & PTS with 3D Modeling in PDMS, PMS preparation, Admin/Spec customization, Stress Analysis, Surge Analysis, ISO Dwgs, Shop Drawings, GAD, As Built.",
    image: emasProject
  },
  {
    name: "Process Water Tank\n(Dubai Waste Mgmt)",
    location: "UAE/Malaysia",
    description: "Detail Design of Rafter Supported Cone Roof Process Water Tank with BIM 500 Modeling (completed).",
    image: processWaterTankDubai
  },
  {
    name: "Recycled Water System Tanks\n(ADWDA)",
    location: "Malaysia / Abu Dhabi",
    description: "Detailed engineering for new raw water 3 tanks for ABU DHABI.",
    image: recycledWaterTanks
  },
  {
    name: "Sakura Waste Water Treatment Plant",
    location: "Bintulu, Malaysia",
    description: "HDPE waste water piping design works with max size 8” and total length of 2000m including stress analysis, Isometrics, 3D Modeling, piping support drawings and pipe bridges, design of Structural platforms and tank supporting structure."
  },
  {
    name: "Offshore Basket Design",
    location: "Malaysia/Brunei",
    description: "Design approval of scaffloding offshore basket 04 type - total 12 no's as per std. requirement latest ISO 10855-1:2018 DNVGL standard for certification 2.7-1."
  },
  {
    name: "Double Door Chiller Container",
    location: "Malaysia/Brunei",
    description: "Design Calculation and Fabrication drawings of double door chiller container."
  },
  {
    name: "Shop Drawings (Pipe Spool)",
    location: "Johor Bahru, Malaysia",
    description: "Preparing shop drawings for pipe spool and LSP chamber for emerson process management (M) SDN BHD."
  },
  {
    name: "Mineral Wool Insulation Plant",
    location: "Johor Bahru, Malaysia",
    description: "Static Analysis and preparation of Shop drawings for Knauf insulation."
  },
  {
    name: "Linde Hydrogen Manufacturing Unit",
    location: "Port Dickson, Malaysia",
    description: "Structural detailing along with fabrication and erection drawing and single part drawings. Total 180 MT.",
    image: lindeHydrogen
  },
  {
    name: "LPG Bottling Plant (120 TMTPA)",
    location: "Jharkhand, India",
    description: "Detailed Engineering for LPG Bottling Plant."
  },
  {
    name: "Unloading Bay Facility (Cairn Rava)",
    location: "Yanam, India",
    description: "Design and Engineering services for Unloading Bay (Electrical, Piping, Instrumentation and P&ID)."
  },
  {
    name: "Scrubber and BWTS System Retrofit",
    location: "Global (Ships)",
    description: "Detail Engineering of retrofit of scrubber and BWTS system."
  },
  {
    name: "ONGC Western Offshore Platforms Makeover",
    location: "Mumbai High, India",
    description: "Brownfield Modifications of Various platforms of ONGC in western offshore (35 Platforms) 1) Verify the the structural integrity perform the local / global/push over analysis as required for the platforms 2) Study the field survey report for the damaged structures 3) Prepare the Demolition drawings / Construction drawings 4) Submit the report.",
    image: ongcOffshore
  },
  {
    name: "RAPID Tank Farm Project",
    location: "Johor, Malaysia",
    description: "Piping Layout Engineering for firewater network systems -SPI services for Entire Project -SPEL services for Entire Project -Vendor Management services -Completion Management SMCC /PSSR/RFSU.",
    image: rapidTankFarm
  },
  {
    name: "Cairn NE Stage - II Project",
    location: "Rajasthan, India",
    description: "1) Pump sizing and Piping systems Hydraulics 2) Under ground Pipeline Studies 3) Piping Layouts / Isometrics Preparations.",
    image: cairnNeStage2
  },
  {
    name: "GAIL Terminal Drawings",
    location: "Chennai, India",
    description: "Preparation of GAS Terminal Drawings for various consumer sites for layouts that includes piping, electrical, equipment layout, Condensate handling facilities for GAIL, India in Cauvery Basin. This also includes Hazardous area classification drawings as per OISD-113 & IS-5572.",
    image: gailTerminal
  },
  {
    name: "Lact Units at AL Baraka Metering Station",
    location: "Sohar, Oman",
    description: "Detail design for structural steel shed and foundations. Storage tanks design and fabrication drawings Nozzle FEA studies for tanks Piping layouts / piping spool drawings.",
    image: lactUnits
  },
  {
    name: "Prai Combined Cycle Power Plant",
    location: "Penang, Malaysia",
    description: "Detailed Engineering for Water Treatment facilities for a Demineralization SKID based plant -3D MODELING IN CADWORX -Piping layouts/ Isometrics/MTO for procurement -Skid Detailed drawings -Structural MTO -Cable tray / tubing / instrument data sheets / Hookup drawings As built Drawings.",
    image: praiPowerPlant
  },
  {
    name: "Jawa 2 Demineralization Plant Project",
    location: "JAWA, Indonesia",
    description: "Detailed Engineering for Water Treatment facilities for a Demineralization SKID based plant -3D MODELING IN CADWORX -Piping layouts/ Isometrics/MTO for procurement -Skid Detailed drawings -Structural MTO -Cable tray / tubing / instrument data sheets / Hookup drawings.",
    image: jawa2Demineralization
  },
  {
    name: "Engineering support for TATA STEEL",
    location: "Jamshedpur, India",
    description: "Engineering support for TATA STEEL Plant, Jamshedpur. Discipline inolved piping, Mechanical, Structural and Electrical.",
    image: tataSteelSupport
  },
  {
    name: "Raichem AO Block Extension",
    location: "Raichur, India",
    description: "Piping layouts and Isometrics - 8000 Lines Process Hydraulic calculations for piping systems involving for pumps and Reactors , Distillation column Pipe rack design along with Equipment foundation Cable tray routing, Cable sizing, Plant lighting calculations Vendor Interaction for VDR.",
    image: raichemAoExtension
  },
  {
    name: "Waterflood Pipeline Replacement",
    location: "Brunei",
    description: "Riser location and Pipeline Route Study, Shore Approach Design, On-bottom & Lateral stability analysis using in-house spreadsheets, Free span and crossing analysis report, Pipeline and Riser installation analysis, Pre-commissioning and Decommissioning Report, Operating Guidelines Report and MTO report."
  },
  {
    name: "Verification of 700 PSVs",
    location: "USA",
    description: "Verification and validation of ~700 PSVs against latest API standards. Delivered detailed compliance reports, gap analysis, and recommendations across 17 operating scenarios.",
    image: psvVerification
  },
  {
    name: "Pilot Reactor and Flaker Plant",
    location: "Kashipur, India",
    description: "Detailed engineering for Pilot Reactor & Flaker Plant. Scope: basic plant layout, GA drawings, piping/isometrics, civil foundations, structural design, load mapping, emergency access design, control philosophy, utility mapping, and integration planning.",
    image: pilotReactorFlaker
  },
  {
    name: "Agro Pellet Feeding Systems",
    location: "Hyderabad, India",
    description: "Civil & structural design for Agro Pellet Feeding Systems. Scope included conveyor supports, chute/silo foundations, construction drawings, safety-focused designs, and maintenance-friendly layouts.",
    image: agroPelletFeeding
  },
  {
    name: "Chimney Foundation Design",
    location: "Hyderabad, India",
    description: "Civil & structural foundation design for Chimney Project. Delivered foundation analysis, soil condition review, structural drawings, and construction-ready packages."
  },
  {
    name: "Boiler Area External Sheds",
    location: "Hyderabad, India",
    description: "Engineering and structural design for Boiler Area External Sheds. Scope: foundation design, fire-resistant structures, safety integration, access platforms, and final construction drawings."
  },
  {
    name: "Water Treatment Plant (200 MLD)",
    location: "India",
    description: "Large-scale multi-discipline detailed engineering and 3D modeling for a municipal water treatment facility."
  },
  {
    name: "MBR Plant for Municipality",
    location: "India",
    description: "Detailed Engineering and 3D modeling for the MBR Plant, which includes Equipment, Piping, and Structural design and documentation."
  },
  {
    name: "New Sewage Treatment Plant (STP)",
    location: "Andhra Pradesh",
    description: "Detailed Engineering & 3D Modeling services including Equipment, Process Piping, Structural, and GA drawings for a new STP project."
  },
  {
    name: "Demineralization (DM) Plant",
    location: "Visakhapatnam, India",
    description: "Detailed Engineering and 3D model preparation for the Demineralization Plant, including all associated Equipment, Interconnecting Piping, and Structural elements."
  },
  {
    name: "Pre-Fabricated WTP (Power Plant)",
    location: "Odisha, India",
    description: "3D Modeling & Detailed Engineering for a skid-mounted, pre-fabricated WTP for a power plant, including Equipment, Process Piping, and Instrumentation layout."
  }
];

export const asBuiltProjects: Project[] = [
  {
    name: "RO Plant Upgrade",
    location: "Malaysia",
    description: "Updating detailed engineering models to reflect post-construction conditions, including red-line incorporation and final spool documentation."
  },
  {
    name: "Process Piping Rerouting",
    location: "India",
    description: "As-built 3D model updates capturing newly installed piping routes and support structures to ensure accurate plant records."
  },
  {
    name: "GSPL Operational Stations (As-Built)",
    location: "Gujarat, India",
    description: "Preparation of As built drawings (Plot plan, GA and P&ID) HSE drawings.",
    image: gsplAsBuilt
  },
  {
    name: "Effluent Treatment Plant Revamp",
    location: "India",
    description: "Detailed 3D modeling and engineering for equipment, piping, and structural modifications in an operating treatment facility."
  }
];

export const preBidProjects: Project[] = [
  {
    name: "Refinery Expansion (SRU & Utilities)",
    location: "India",
    description: "Provided layout studies, MTOs, and technical bid inputs for Sulphur Recovery and Utility units to support EPC tendering."
  },

  {
    name: "Skid-Mounted Water Treatment Unit",
    location: "Philippines",
    description: "Created preliminary 3D models and equipment lists to generate bid-stage Bill of Materials (BOM) and cost estimates.",
    image: skidWaterTreatment
  },
  {
    name: "Revamp of Urea and Ammonia Plant",
    location: "GOA, India",
    description: "Pre Bid engineering support to EPC bidder Zauri Agro Chemicals limited. Scope included development of the As built 3D models from laser scan. Estimation for new modifications."
  }
];
export const digitalisationProjects: Project[] = [
  {
    name: "Condensate Processing Plant Digitization",
    location: "Middle East / Abu Dhabi",
    description: "Complete Master Document Updating and synchronization of model & documents with respect to all current and completed revamp activities. Activates related to Block 1 to Block 9 and Pipe Racks. Scope Includes: Developing Intelligent SP3D MODEL, Data Gathering and site verification of entire data related to Piping, Equipment, Cable Trays and Structural details.",
    image: condensateDigitization
  },
  {
    name: "Reverse Engineering of Steel Plant",
    location: "Port Dickson, Malaysia",
    description: "Development of 3D model and PDMS tagging for Coke oven area Battery area."
  },
  {
    name: "Platform R.12 & HRA, Offshore",
    location: "Mumbai, India",
    description: "3D Modelling of R.12 Platform and HRA platform PDMS tagging.",
    image: platformR12
  },
  {
    name: "100 KTA Poly Carbonate Plant",
    location: "China",
    description: "Development of SP Intelligent PID 200 PID's in SPPID software."
  },
  {
    name: "TGV SRAAC Caustic Soda Plant",
    location: "Andhra Pradesh, India",
    description: "Laser Scanning and 3D Modeling.",
    image: tgvSraacCaustic
  },
  {
    name: "BASF Aromatics, Butadiene and 2EH Acid Plant",
    location: "Germany",
    description: "Preparation of Hybrid SP3D model, PID verification across dumb model, Highlighting changes with colour code given.",
    image: butadienePlant
  },
  {
    name: "BASF 2-EH Acid Plant",
    location: "Kuantan, Malaysia",
    description: "Developed an intelligent hybrid 3D model for the BASF 2-EH Acid Plant, covering Plant-1, Plant-2, and Tank Farm Areas, using SP3D / Smart 3D (S3D) based on available engineering inputs and LFM (Laser Scan) data. The work supported brownfield verification and modification activities and was executed in compliance with Worley and BASF engineering standards.",
    image: basf2ehMalaysia
  },
  {
    name: "Primitive Modeling for Ammonia Plant",
    location: "Dorogobuzh - Russia",
    description: "Site Traversing and Registration of Each module to be closed at Max 3.5mm error and Entire Plant Primitive model developed and converted to PDMS dump model",
    image: ammoniaPlantRussia
  },
  {
    name: "Confidential Project (P&IDs)",
    location: "Mumbai, India",
    description: "Preparation of PID's in SPPID Software Completed around 500 P&ID's till now."
  }
];

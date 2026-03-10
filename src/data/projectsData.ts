import sulphuricAcid3d from "@/assets/sulphuric-acid-plant-3d.png";
import lngLpgStorage from "@/assets/lng-lpg-storage-new.jpg";
import greenHydrogenPlant from "@/assets/green-hydrogen-plant.jpg";
import greenHydrogenPilot from "@/assets/green-hydrogen-pilot.png";
import ammoniaPlantRevamp from "@/assets/ammonia-plant-revamp.png";
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
import gailTerminal from "@/assets/gail-terminal-new.jpg";
import praiPowerPlant from "@/assets/prai-power-plant.jpg";
import jawa2Demineralization from "@/assets/jawa2-demineralization.jpg";

import raichemAoExtension from "@/assets/raichem-ao-extension.jpg";
import psvVerification from "@/assets/psv-verification.jpg";
import pilotReactorFlaker from "@/assets/pilot-reactor-flaker.png";
import agroPelletFeeding from "@/assets/agro-pellet-feeding.png";

import gsplAsBuilt from "@/assets/gspl-as-built.png";
import condensateDigitization from "@/assets/condensate-processing-new.jpg";
import platformR12 from "@/assets/platform-r12-new.jpg";
import butadienePlant from "@/assets/basf-aromatics.jpg";
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

import intelFalcon from "@/assets/intel-falcon.jpg";
import sakuraWasteWater from "@/assets/sakura-waste-water.jpg";
import offshoreBasket from "@/assets/offshore-basket.jpg";
import shopDrawings from "@/assets/shop-drawings.jpg";
import gsplAsBuiltNew from "@/assets/gspl-as-built-new.jpg";
import acetophenoneRecovery from "@/assets/acetophenone-recovery.jpg";
import nrlSru from "@/assets/nrl-sru.jpg";
import ureaAmmoniaRevamp from "@/assets/urea-ammonia-revamp.png";
import tgvSraacNew from "@/assets/tgv-sraac-updated.jpg";
import cokeDrumReplacement from "@/assets/coke-drum-replacement.png";
import mrplRefinery from "@/assets/mrpl-refinery.png";

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
    name: "CYME Power System Simulator",
    location: "Qatar, Middle East",
    description: "FEED for Vapour Recovery System Short circuit Study Motor Starting study Transient Stability Arc Flash Analysis Protective device coordination.",
    image: cymePowerSystem
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
    name: "Thermal Reactor & Incinerator packages &  PDP Validation for Sulphur Recovery Unit (SRU)",
    location: "Bihar, India",
    description: "Detailed engineering of Thermal Reactor & Incinerator Packages and 40 static equipment units for IOCL SRU. Scope: review of licensor package, 3D model development, datasheets, GA drawings, fabrication drawings, and as-built documentation.",
    image: sruThermalReactor
  },
  {
    name: "Refinery TEA Injection Package",
    location: "Rajasthan, India",
    description: "Detailed engineering for TEA Injection Package at HRRL Refinery. Scope included to close 90% model review comments from piping, civil, and structural engineering, Fabrication drawings for structures. Modules lifiting analysis reports verifications.",
    image: teaInjectionPackage
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
    description: "Civil & structural engineering design Scope included modularization design, 3D modeling, pile caps, vent blower sheds, pedestals, and structural detailing. (Incineration unit, Piperack and vent blower shed) for Vinyls Program 1260 KTA EDC Plant.",
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
    name: "Linde Hydrogen Manufacturing Unit",
    location: "Port Dickson, Malaysia",
    description: "Structural detailing along with fabrication and erection drawing and single part drawings. Total 180 MT.",
    image: lindeHydrogen
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
    image: lactUnits
  },
  {
    name: "Lact Units at AL Baraka Metering Station",
    location: "Sohar, Oman",
    description: "Detail design for structural steel shed and foundations. Storage tanks design and fabrication drawings Nozzle FEA studies for tanks Piping layouts / piping spool drawings.",
    image: gailTerminal
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
    name: "Raichem AO Block Extension",
    location: "Raichur, India",
    description: "Piping layouts and Isometrics - 8000 Lines Process Hydraulic calculations for piping systems involving for pumps and Reactors , Distillation column Pipe rack design along with Equipment foundation Cable tray routing, Cable sizing, Plant lighting calculations Vendor Interaction for VDR.",
    image: raichemAoExtension
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
    name: "Agro Pellet Feeding Systems, Chimney Foundation Design, and Boiler Area External Sheds",
    location: "Hyderabad, India",
    description: "Civil & structural design for Agro Pellet Feeding Systems, Chimney Foundation, and Boiler Area External Sheds. Scope included conveyor supports, chute/silo foundations, foundation analysis, soil condition review, fire-resistant structures, safety integration, access platforms, maintenance-friendly layouts, and final construction-ready structural drawings and packages.",
    image: agroPelletFeeding
  },
  {
    name: "Industrial Water Tanks (INTEL FALCON)",
    location: "Kulim, Malaysia",
    description: "Detail Design for Dome Roof Industrial Water Tanks 14.0 m Dia x 20.0 m Ht including Tank Ring Beam Foundation Design, Nozzle FEA.",
    image: intelFalcon
  },
  {
    name: "Sakura Waste Water Treatment Plant",
    location: "Bintulu, Malaysia",
    description: "HDPE waste water piping design works with max size 8” and total length of 2000m including stress analysis, Isometrics, 3D Modeling, piping support drawings and pipe bridges, design of Structural platforms and tank supporting structure.",
    image: sakuraWasteWater
  },
  {
    name: "Offshore Basket & Chiller Container Design",
    location: "Malaysia/Brunei",
    description: "Design approval of scaffolding offshore basket 04 type (total 12 nos) as per std. requirement latest ISO 10855-1:2018 DNVGL standard for certification 2.7-1. Design Calculation and Fabrication drawings of double door chiller container.",
    image: offshoreBasket
  },
  {
    name: "Shop Drawings & Static Analysis for Process Plants",
    location: "Johor Bahru, Malaysia",
    description: "Preparing shop drawings for pipe spool and LSP chamber for Emerson Process Management (M) SDN BHD. Static Analysis and preparation of Shop drawings for Knauf insulation mineral wool plant.",
    image: shopDrawings
  },
  {
    name: "GSPL Operational Stations (As-Built)",
    location: "Gujarat, India",
    description: "Preparation of As built drawings (Plot plan, GA and P&ID) HSE drawings.",
    image: gsplAsBuiltNew
  },
];

export const preBidProjects: Project[] = [
  {
    name: "Acetophenone Recovery Unit (60 TPD)",
    location: "Gujarat, India",
    description: "Pre Bid engineering support to EPC bidder. Scope included development of multi dicpline engineering MTO and cost estimates",
    image: acetophenoneRecovery
  },
  {
    name: "Pre-Bid Engineering Support for Sulphur Recovery Unit (SRU) - Numaligarh Refinery Expansion Project",
    location: "NRL, Assam",
    description: "The project involves providing pre-bid engineering consultancy services for the EPCC-3 package of the Numaligarh Refinery Expansion Project, specifically focusing on the Sulphur Recovery Unit (SRU). The engineering support provided to ISGEC Heavy Engineering Ltd. encompasses several distinct plant areas, namely the Amine Regeneration Unit (ARU), Sour Water Stripper Unit (SWS), Sulphur Recovery Unit (SRU), and Tail Gas Treating Unit (TGTU). The primary responsibilities include preparing pre-bid queries for tender clarifications, identifying and supplying missing data necessary to complete vendor enquiry specifications, and performing technical compliance checks on vendor bids. Additionally, the scope entails providing cost impact sheets following vendor offer reviews and developing L1/L2 project management schedules",
    image: nrlSru
  },
  {
    name: "Revamp of Urea and Ammonia Plant",
    location: "GOA, India",
    description: "Support Owner operator: Scope include laser scaning and development of 3D asbuilt model, which will help the EPC bidders for understanding the plant coditions and make clear EPC bid for plant expansion. Interfaced with Licensor and EPC partners for the model deployments into there work environment.",
    image: ureaAmmoniaRevamp
  },
];

export const asBuiltProjects: Project[] = [
  {
    name: "GSPL As-Built Documentation",
    location: "India",
    description: "Complete as-built engineering documentation and verification for the GSPL pipeline infrastructure project.",
    image: gsplAsBuilt
  },
];

export const digitalisationProjects: Project[] = [
  {
    name: "Condensate Processing Plant Digitization",
    location: "Middle East / Abu Dhabi",
    description: "Complete Master Document Updating and synchronization of model & documents with respect to all current and completed revamp activities. Activates related to Block 1 to Block 9 and Pipe Racks. Scope Includes: Developing Intelligent MODEL, Data Gathering and site verification of entire data related to Piping, Equipment, Cable Trays and Structural details.\nHelped to get the 3D Print of the model to show case in ADIPEC.",
    image: condensateDigitization
  },
  {
    name: "Platform R.12 & HRA, Offshore",
    location: "Mumbai, India",
    description: "3D primitive model was developed based on the captured and validated data, and subsequently converted into DGN file format to ensure compatibility with the client’s engineering platform. Post-delivery, continuous technical support was extended to the EPC contractor to facilitate downstream engineering activities, design integration, and execution planning.",
    image: platformR12
  },
  {
    name: "TGV SRAAC Caustic Soda Plant",
    location: "Andhra Pradesh, India",
    description: "TGV New Chlorine System Expansion Project, laser scanning and detailed site data acquisition were carried out to capture existing plant conditions in support of the capacity enhancement of the caustic soda production facility from 1,000 TPD to 1,500 TPD. Based on the validated as-built data, comprehensive 3D modeling was developed, including piping layouts and updated plot plans, enabling seamless integration of new systems within the existing infrastructure while ensuring constructability and operational continuity.",
    image: tgvSraacNew
  },
  {
    name: "BASF Aromatics",
    location: "Germany",
    description: "Preparation of 3d model from Point cloud and  PID verification redline mark up of PID's and GA drawings.",
    image: butadienePlant
  },
  {
    name: "Intelligent 3D Model Development for BASF 2-EH Acid Plant",
    location: "Kuantan, Malaysia",
    description: "Developed an intelligent hybrid 3D model for the BASF 2-EH Acid Plant, covering Plant-1, Plant-2, and Tank Farm Areas, using SP3D / Smart 3D (S3D) based on available engineering inputs and LFM (Laser Scan) data. The work supported brownfield verification and modification activities and was executed in compliance with Worley and BASF engineering standards.",
    image: basf2ehMalaysia
  },

  {
    name: "3D laser Scanning and constructability review for COKE Drum replacements",
    location: "Jamnagar, India",
    description: "Laser scanning, detailed survey, and point cloud registration were executed on the elevated platform under live operating conditions, precisely capturing the as-built structural geometry with high-fidelity accuracy. The resultant digital deliverables — including the registered point cloud and validated 3D model — formed the engineering basis for a comprehensive structural reassessment conducted in close technical interface with RIL and FW Houston. This rigorous validation process provided the engineering confidence required to define the cut elevation at 106 meters and execute a complex single-lift operation with controlled risk, full technical precision, and assured structural integrity.",
    image: cokeDrumReplacement
  },
  {
    name: "Capacity Enhancement of MRPL Refinery Unit PSA-2 / RSU",
    location: "Mangalore",
    description: "Laser scanning, detailed site survey, and point cloud registration were successfully executed to capture accurate as-built conditions of the facility. Based on the registered data, a primitive 3D model was developed and delivered to the client as a foundational digital representation. Subsequently, a fully intelligent 3D model incorporating engineering attributes and system intelligence was developed and submitted to support detailed engineering, design validation, and future modification activities.",
    image: mrplRefinery
  },
];


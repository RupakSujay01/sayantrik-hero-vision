export interface PortfolioItem {
    id: string;
    title: string;
    navTitle?: string;
    category: 'Energy' | 'Chemicals' | 'Power' | 'Sustainability';
    description: string[];
}

export const portfolioData: PortfolioItem[] = [
    // === CATEGORY 1: ENERGY ===
    {
        id: 'upstream',
        title: 'Upstream Oil & Gas',
        category: 'Energy',
        description: [
            '**From Reservoir to Surface – Maximising Recovery, Minimising Risk**',
            'Sayantrik provides end-to-end engineering support for upstream oil and gas facilities, covering both onshore production facilities and complex offshore platforms. Our expertise spans the complete production chain from wellhead to export, ensuring optimal hydrocarbon recovery while maintaining the highest safety and environmental standards.',
            '',
            '**Onshore Production Facilities**',
            '• **Gas-Oil Separation Plants (GOSP):** Multi-stage separation systems for efficient oil-gas-water segregation, designed for varying API gravities and GOR ratios.',
            '• **Early Production Facilities (EPF):** Fast-track modular solutions for accelerating first oil/gas, optimising field development economics.',
            '• **Oil & Gas Gathering Stations:** Centralized collection systems with slug handling, metering, and routing capabilities.',
            '• **Slug Catchers & Manifolds:** Liquid surge management for pipeline networks, finger-type and vessel-type configurations.',
            '• **Dehydration & Desalting Units:** Electrostatic desalters, glycol dehydration, and molecular sieve systems for export-quality crude.',
            '• **Produced Water Treatment:** Oil removal, filtration, and disposal/reinjection systems meeting environmental discharge limits.',
            '• **Booster & Gas Compression:** Reciprocating and centrifugal compression for gas lift, gas gathering, and export.',
            '',
            '**Offshore Platforms & Facilities**',
            '• **Wellhead Platforms (WHP):** Unmanned and manned platform topsides design, supporting drilling and production operations.',
            '• **Central Processing Platforms (CPP):** Full processing capabilities including separation, compression, water treatment, and power generation.',
            '• **FPSO Engineering Support:** Topsides process design, module integration, and brownfield modifications for floating production units.',
            '• **Subsea Tie-backs:** Flowline and riser engineering, subsea manifold integration, and host platform modifications.',
            '• **Flare Systems & Safety:** HP/LP flare system design, radiation studies, and emergency depressurization systems.',
            '• **Brownfield Deck Modifications:** Weight-sensitive upgrades, tie-in engineering, and shutdown planning for operating platforms.'
        ]
    },
    {
        id: 'midstream',
        title: 'Midstream – Gas Treatment & Processing',
        navTitle: 'Midstream',
        category: 'Energy',
        description: [
            '**Bridging Production to Market – Treating, Processing, and Transporting Natural Gas**',
            'The midstream sector involves inlet separation, treating, processing, storing, marketing, and transporting natural gas and natural gas liquids (NGLs). Our expertise covers the complete gas processing chain from raw wellhead gas to pipeline-quality sales gas and fractionated NGL products.',
            '',
            '**Gas Treatment Systems**',
            '• **Acid Gas Removal (AGR):** Amine-based systems (MDEA, DEA, Sulfinol) for H₂S and CO₂ removal to meet pipeline specifications.',
            '• **Gas Sweetening Units:** Selective and bulk removal processes for sour gas treating with optimised solvent selection.',
            '• **Dehydration Systems:** TEG contactors and molecular sieve units achieving water dewpoint specifications.',
            '• **Mercury Removal Units:** Activated carbon and sulfur-impregnated adsorbents protecting downstream cryogenic equipment.',
            '• **Sulfur Recovery Units (SRU):** Modified Claus process with tail gas treatment achieving >99.9% sulfur recovery.',
            '• **Sour Water Stripping:** Single and two-stage strippers for ammonia and H₂S removal from process water.',
            '',
            '**Gas Processing & NGL Recovery**',
            '• **Cryogenic Gas Processing:** Turbo-expander plants achieving high ethane and propane recovery (>95%) from lean and rich gas feeds.',
            '• **NGL Fractionation:** De-ethanizers, de-propanizers, de-butanizers, and splitters producing on-spec purity products.',
            '• **Condensate Stabilization:** Patent-approved technology solving inconsistent product quality, optimising energy consumption, and right-sizing equipment.',
            '• **Gas Gathering & Compression:** Field compression systems, pipeline boosting, and transmission station design.',
            '• **Plant Modularization:** Skid-mounted and modular gas processing units for remote locations and accelerated deployment.'
        ]
    },
    {
        id: 'downstream',
        title: 'Downstream – Refining',
        category: 'Energy',
        description: [
            '**Transforming Crude into Value – From Atmospheric Tower to Final Products**',
            'Downstream refining transforms crude oil and natural gas into marketable petroleum products including gasoline, kerosene, diesel, lubricants, waxes, and LPG. Our refinery engineering expertise covers the complete processing chain from crude receipt through product blending and dispatch.',
            '',
            '**Primary Processing Units**',
            '• **Crude Distillation Unit (CDU):** Atmospheric distillation with pre-flash, desalting, and heat integration for maximum energy recovery.',
            '• **Vacuum Distillation Unit (VDU):** Deep-cut vacuum columns producing LVGO, HVGO, and vacuum residue for downstream conversion.',
            '',
            '**Conversion & Upgrading Units**',
            '• **Fluid Catalytic Cracking (FCC):** High-conversion units with regenerator optimisation, catalyst management, and product flexibility.',
            '• **Hydrocracker Unit (HCU):** Single and two-stage configurations for middle distillate and lube base stock production.',
            '• **Delayed Coking Unit (DCU):** Bottom-of-barrel upgrading converting vacuum residue to lighter products and petroleum coke.',
            '• **Visbreaker Unit:** Thermal cracking for fuel oil viscosity reduction and vacuum residue upgrading.',
            '• **Catalytic Reforming (CCR):** Continuous regeneration reformers producing high-octane gasoline and aromatics (BTX).',
            '',
            '**Treating & Finishing Units**',
            '• **Hydrotreating Units:** Naphtha, kerosene, diesel, and VGO hydrotreaters for sulfur, nitrogen, and metals removal.',
            '• **Hydrodesulfurization (HDS):** Ultra-low sulfur diesel (ULSD) production meeting Euro VI/BS-VI specifications (<10 ppm S).',
            '• **Merox Treating:** Mercaptan oxidation for LPG and light naphtha sweetening.',
            '• **Isomerization:** Light naphtha octane improvement for gasoline pool optimisation.',
            '',
            '**Heavy Oil Processing (Specialised Expertise)**',
            'Our heavy oil processing capabilities include industry-recognised expertise in delayed coking, with specialists having 30+ years of experience in design, operation, troubleshooting, and optimisation of bottom-of-barrel conversion units.',
            '• **Delayed Coking:** Coke drum cycling, heater design, hydraulic decoking systems, and coke quality optimisation.',
            '• **Fluid Coking / Flexicoking:** Continuous coking processes with integrated gasification.',
            '• **Solvent Deasphalting (SDA):** Propane and butane-based deasphalting for DAO production.',
            '• **Residue Hydrocracking:** H-Oil and LC-Fining ebullated bed processes for residue upgrading.'
        ]
    },
    {
        id: 'petrochemicals',
        title: 'Petrochemicals & Polymers',
        category: 'Energy',
        description: [
            '**Building Blocks of Modern Industry – Olefins, Aromatics, and Derivatives**',
            'Petrochemical complexes convert hydrocarbon feedstocks into the chemical building blocks that form the foundation of countless industries. We provide comprehensive engineering across the petrochemical value chain from steam crackers to polymer plants.',
            '',
            '**Olefins Production**',
            '• **Steam Crackers:** Ethylene and propylene production from naphtha, ethane, LPG, and gas oil feedstocks.',
            '• **Ethylene Recovery Units:** Cryogenic separation and purification to polymer-grade ethylene specifications.',
            '• **Propylene Recovery:** Splitter columns achieving chemical and polymer-grade propylene purity.',
            '• **Butadiene Extraction:** Extractive distillation for rubber-grade 1,3-butadiene production.',
            '',
            '**Aromatics (BTX) Complex**',
            '• **Aromatic Extraction:** Sulfolane and reformate splitting for benzene, toluene, and xylene recovery.',
            '• **Paraxylene Units:** Adsorption and crystallization technologies for PX production.',
            '• **PTA Plants:** Purified terephthalic acid production for polyester manufacturing.',
            '',
            '**Polymer Plants**',
            '• **Polyethylene (PE):** HDPE, LDPE, and LLDPE plants using gas-phase, slurry, and solution processes.',
            '• **Polypropylene (PP):** Bulk and gas-phase polymerization for homo and copolymer grades.',
            '• **PVC Plants:** Vinyl chloride monomer (VCM) and suspension/emulsion PVC production.',
            '• **PET & Engineering Plastics:** Polyester, ABS, nylon, and polycarbonate manufacturing facilities.'
        ]
    },
    {
        id: 'gas-monetization',
        title: 'Gas Monetization',
        category: 'Energy',
        description: [
            '**Converting Stranded Gas into Value – Multiple Pathways, Optimal Solutions**',
            'Gas monetization transforms natural gas resources into transportable, marketable products. The evaluation of gas monetization options is a multidimensional problem requiring systematic analysis of gas quality, market access, infrastructure, and economics to select the optimal pathway.',
            '',
            '**Our Systematic Approach**',
            '• **Asset Evaluation:** Assessing gas field quantity, quality, and production cost as the foundation for all studies.',
            '• **Options Screening:** Comprehensive evaluation of all monetization alternatives against site-specific constraints.',
            '• **Economic Modeling:** Detailed CAPEX/OPEX analysis, NPV calculations, and sensitivity studies.',
            '• **Risk & Market Analysis:** Market demand forecasting, price projections, and risk quantification.',
            '• **Technology Selection:** Final pathway selection based on integrated technical and commercial assessment.',
            '',
            '**Monetization Pathways**',
            '• **GAS-TO-LIQUIDS (GTL) – PILOT SCALE DEVELOPMENT:** Sayantrik is actively working on pilot-scale GTL technology development. Fischer-Tropsch synthesis converts natural gas to premium synthetic fuels including ultra-clean diesel, high-quality naphtha, and specialty waxes. Our pilot-scale work focuses on modular, small-scale GTL solutions suitable for stranded gas monetization and remote locations.',
            '• **Liquefied Natural Gas (LNG):** Liquefaction plants, cryogenic storage, and regasification terminals for long-distance gas transport.',
            '• **LPG Production:** Propane and butane extraction for domestic and industrial fuel markets.',
            '• **CNG Infrastructure:** Compression stations for vehicle fuel and small-scale industrial applications.',
            '• **Methanol Production:** Syngas generation and methanol synthesis for chemical feedstock and fuel blending.',
            '• **Ammonia & Fertilizers:** Steam methane reforming for hydrogen production and ammonia/urea synthesis.',
            '• **Power Generation:** Gas-fired combined cycle plants for domestic consumption and export.'
        ]
    },
    {
        id: 'terminals',
        title: 'Terminals & Storage Infrastructure',
        category: 'Energy',
        description: [
            '**Strategic Storage & Logistics – Ensuring Supply Chain Resilience**',
            'Terminal and storage facilities are critical infrastructure linking production to markets. We provide comprehensive engineering for tank farms, loading systems, and distribution infrastructure for crude oil, refined products, chemicals, and gases.',
            '',
            '**Storage Systems**',
            '• **Atmospheric Tanks:** Fixed and floating roof tanks for crude oil and petroleum products per API 650.',
            '• **Pressurized Storage:** Spheres and bullets for LPG, propane, and butane per ASME Section VIII.',
            '• **Refrigerated Tanks:** Full containment and single containment tanks for LNG, ammonia, and ethylene.',
            '• **Chemical Storage:** Specialised materials and safety systems for corrosive and hazardous chemicals.',
            '',
            '**Terminal Systems**',
            '• **Marine Terminals:** Jetty loading/unloading with marine loading arms, vapor recovery, and ship/shore interface systems.',
            '• **Truck & Rail Loading:** Bottom and top loading systems with metering, overfill protection, and grounding systems.',
            '• **Pipeline Terminals:** Receipt/delivery manifolds, pig launchers/receivers, and tank gauging systems.',
            '• **Metering & Custody Transfer:** Fiscal metering systems with prover loops per API MPMS standards.',
            '• **Blending Systems:** In-line and batch blending for gasoline, diesel, and specialty products.',
            '• **Fire Protection:** Foam systems, firewater networks, and detection per NFPA and OISD standards.'
        ]
    },
    {
        id: 'pipelines',
        title: 'Cross-Country Pipelines',
        category: 'Energy',
        description: [
            '**Connecting Resources to Markets – Safe, Efficient Hydrocarbon Transport**',
            'Pipeline systems are the arteries of the energy industry, safely transporting crude oil, refined products, and natural gas over vast distances. Our pipeline engineering covers route selection through commissioning, with expertise in all terrain types and operating conditions.',
            '',
            '• **Route Selection & Survey:** GIS-based corridor analysis, environmental constraints mapping, and ROW optimisation.',
            '• **Hydraulic Analysis:** Steady-state and transient flow modeling, surge analysis, and operational optimisation.',
            '• **Pipeline Sizing & Stress Analysis:** Wall thickness calculations per ASME B31.4/B31.8, flexibility analysis, and support design.',
            '• **Special Crossings:** HDD, river crossings, road/rail crossings, and thrust boring designs.',
            '• **Pump & Compressor Stations:** Mainline and booster stations with control systems and emergency shutdown.',
            '• **Corrosion Protection:** External coating, cathodic protection, and internal lining systems.',
            '• **Pipeline Integrity:** ILI tool selection, integrity assessment, and remaining life evaluation.'
        ]
    },

    // === CATEGORY 2: CHEMICALS ===
    {
        id: 'basic-chemicals',
        title: 'Basic & Commodity Chemicals',
        category: 'Chemicals',
        description: [
            '**Foundation of the Chemical Industry – High-Volume Essential Products**',
            'Basic chemicals form the foundation of countless industrial processes. Our expertise covers design, operation support, and optimisation of facilities producing acids, alkalis, and other essential industrial chemicals.',
            '',
            '**Inorganic Acids**',
            '• **Sulfuric Acid Plants:** Contact process plants from 100-3000 MTPD, including heat recovery systems and oleum production.',
            '• **Nitric Acid Plants:** Weak and concentrated nitric acid via ammonia oxidation and absorption.',
            '• **Phosphoric Acid Plants:** Wet process plants from phosphate rock digestion.',
            '• **Hydrochloric Acid:** Synthesis and byproduct HCl recovery and purification.',
            '',
            '**Chlor-Alkali & Industrial Gases**',
            '• **Chlor-Alkali Plants:** Membrane cell electrolysis producing chlorine, caustic soda, and hydrogen.',
            '• **Calcium Chloride:** Specialised expertise in calcium chloride production and processing.',
            '• **Industrial Gas Plants:** Air separation units (ASU) for oxygen, nitrogen, and argon production.'
        ]
    },
    {
        id: 'specialty-chemicals',
        title: 'Specialty & Fine Chemicals',
        category: 'Chemicals',
        description: [
            '**High-Value Products – Precision Engineering for Demanding Applications**',
            'Specialty chemicals require precise process control, high-purity standards, and flexible manufacturing capabilities. We design facilities meeting the stringent requirements of pharmaceutical intermediates, agrochemicals, and performance materials.',
            '',
            '• **Pharmaceutical Intermediates:** cGMP-compliant facilities with clean room design and batch processing.',
            '• **Agrochemicals:** Pesticide, herbicide, and fertilizer manufacturing with safety systems.',
            '• **Resins & Adhesives:** Polymer synthesis reactors and finishing systems.',
            '• **Solvent Recovery:** Distillation and purification systems for solvent recycling and waste minimisation.',
            '• **Catalyst Manufacturing:** Precious metal and base metal catalyst production facilities.'
        ]
    },
    {
        id: 'fertilizers',
        title: 'Fertilizers & Methanol',
        category: 'Chemicals',
        description: [
            '**Feeding the World – Nitrogen Fertilizers and Chemical Building Blocks**',
            'Fertilizer complexes convert natural gas into the nitrogen-based products essential for global food security. We provide engineering for the complete chain from hydrogen production through granulated product handling.',
            '',
            '**Ammonia & Hydrogen**',
            '• **Steam Methane Reforming (SMR):** Primary and secondary reforming for syngas generation.',
            '• **Ammonia Synthesis:** High-pressure loop design with advanced catalyst systems.',
            '• **CO₂ Recovery:** Amine-based capture for urea production and enhanced oil recovery.',
            '',
            '**Downstream Fertilizers**',
            '• **Urea Plants:** Total recycle and stripping processes with prilling or granulation.',
            '• **Ammonium Nitrate (AN):** Solution production and prilling with safety considerations.',
            '• **NPK Complex Fertilizers:** Granulation and blending plants for custom formulations.',
            '• **DAP/MAP Plants:** Phosphatic fertilizer production from ammonia and phosphoric acid.',
            '',
            '**Methanol & Derivatives**',
            '• **Methanol Synthesis:** Low-pressure synthesis from syngas with high-efficiency converters.',
            '• **Methanol-to-Olefins (MTO):** Conversion technology for ethylene and propylene production.',
            '• **Formaldehyde:** Silver and metal oxide catalyst processes for formaldehyde production.'
        ]
    },

    // === CATEGORY 3: POWER ===
    {
        id: 'thermal-power',
        title: 'Thermal Power',
        category: 'Power',
        description: [
            '**Efficient Combustion – Maximising Heat Rate, Minimising Emissions**',
            'Thermal power plants remain essential for reliable baseload generation. We provide engineering for new plants and efficiency upgrades, focusing on heat rate optimisation and emissions reduction to meet evolving environmental standards.',
            '',
            '• **Combined Cycle Gas Turbines (CCGT):** High-efficiency plants achieving 60%+ thermal efficiency with HRSG optimisation.',
            '• **Simple Cycle Gas Turbines:** Peaking and emergency power with fast-start capabilities.',
            '• **Coal-Fired Power Plants:** Supercritical and ultra-supercritical boiler designs with FGD and SCR systems.',
            '• **Heat Recovery Steam Generators:** Multi-pressure HRSG design for maximum steam cycle efficiency.',
            '• **Steam Turbine Islands:** Condensing and back-pressure turbines with auxiliaries.'
        ]
    },
    {
        id: 'cogeneration',
        title: 'Cogeneration/CHP',
        category: 'Power',
        description: [
            '**Dual-Purpose Efficiency – Simultaneous Power and Process Steam**',
            'Cogeneration systems maximise fuel utilisation by producing both electricity and useful thermal energy. We design integrated CHP systems for refineries, petrochemical plants, and industrial facilities achieving 80%+ overall efficiency.',
            '',
            '• **Industrial Cogeneration:** Process steam and power integration for manufacturing facilities.',
            '• **Refinery Power Plants:** Self-generation utilising refinery fuel gas and off-gases.',
            '• **Trigeneration Systems:** Combined cooling, heating, and power (CCHP) for commercial and industrial applications.',
            '• **Waste Heat Recovery:** ORC systems and steam generation from process waste heat.'
        ]
    },
    {
        id: 'captive-power',
        title: 'Captive & Emergency Power',
        category: 'Power',
        description: [
            '**Reliable On-Site Generation – Ensuring Uninterrupted Operations**',
            'Captive power systems provide energy security for critical industrial operations. We design standalone and grid-parallel systems ensuring reliability while optimising fuel costs and maintaining compliance with grid codes.',
            '',
            '• **Captive Power Plants:** Dedicated generation for industrial complexes with fuel flexibility.',
            '• **Emergency Power Systems:** Diesel generators and UPS systems for critical loads.',
            '• **Islanding Capabilities:** Black-start and islanded operation design for essential facilities.',
            '• **Grid Integration:** Synchronization, protection, and power quality systems.'
        ]
    },
    {
        id: 'power-infrastructure',
        title: 'Infrastructure & Distribution',
        category: 'Power',
        description: [
            '**Delivering Power Safely – From Generation to Point of Use**',
            'Electrical infrastructure connects power sources to loads safely and reliably. We design complete electrical systems including substations, distribution networks, and protection systems per international standards.',
            '',
            '• **HV/MV Substations:** GIS and AIS substations up to 400kV with protection and control systems.',
            '• **Power Distribution:** MV/LV networks, motor control centers, and switchgear.',
            '• **Protection Systems:** Relay coordination, arc flash studies, and safety systems.',
            '• **Earthing & Lightning:** Grounding grid design and lightning protection per IEEE/IEC standards.',
            '• **Power Quality:** Harmonic filters, power factor correction, and voltage regulation.'
        ]
    },

    // === CATEGORY 4: SUSTAINABILITY ===
    {
        id: 'green-hydrogen',
        title: 'Green Hydrogen',
        category: 'Sustainability',
        description: [
            '**Clean Energy Carrier – Enabling Deep Decarbonization**',
            'Green hydrogen, produced via electrolysis powered by renewable energy, is key to decarbonizing hard-to-abate sectors including heavy transport, steel, and chemicals. We provide engineering across the hydrogen value chain from production through end-use applications.',
            '',
            '• **Electrolyzer Plants:** PEM and alkaline electrolysis systems from pilot scale to GW installations.',
            '• **Renewable Integration:** Solar and wind-coupled hydrogen production with power management.',
            '• **Hydrogen Compression:** Reciprocating and ionic compressors for storage and transmission.',
            '• **Storage Systems:** Compressed gas, liquid hydrogen, and underground storage options.',
            '• **Distribution Infrastructure:** Pipelines, tube trailers, and refueling station design.',
            '• **Techno-Economic Analysis:** LCOH calculations, business case development, and project feasibility.'
        ]
    },
    {
        id: 'ccus',
        title: 'Carbon Capture, Utilisation & Storage (CCUS)',
        category: 'Sustainability',
        description: [
            '**Capturing Carbon – Enabling Net-Zero Industrial Operations**',
            'CCUS is essential for decarbonizing existing industrial assets and enabling low-carbon hydrogen and power production. We provide comprehensive CCUS services from carbon footprint assessment through capture system design and storage site evaluation.',
            '',
            '**Our CCUS Approach**',
            '• **Carbon Balance Mapping:** Identifying all CO₂ emission sources – process units, utilities, heaters, and off-gases.',
            '• **Emitter Categorization:** Ranking by volume, concentration, and capture complexity to identify "low-hanging fruit".',
            '• **Technology Selection:** Best Available Technology (BAT) assessment for pre- and post-combustion capture.',
            '• **Economic Assessment:** CAPEX/OPEX estimates, carbon credit valuation, and ROI analysis.',
            '',
            '**Capture & Processing**',
            '• **Post-Combustion Capture:** Amine-based absorption for flue gas CO₂ removal.',
            '• **Pre-Combustion Capture:** Syngas shift and CO₂ separation for IGCC and hydrogen plants.',
            '• **CO₂ Purification:** Distillation and dehydration to pipeline or injection specifications.',
            '• **CO₂ Compression:** Multi-stage compression for supercritical transport and injection.',
            '',
            '**Utilisation & Storage**',
            '• **Enhanced Oil Recovery (EOR):** CO₂ flooding for increased oil production and permanent storage.',
            '• **Geological Sequestration:** Saline aquifer and depleted reservoir storage site evaluation.',
            '• **Industrial Utilisation:** CO₂ as feedstock for chemicals, building materials, and synthetic fuels.'
        ]
    },
    {
        id: 'saf',
        title: 'Sustainable Aviation Fuel (SAF)',
        category: 'Sustainability',
        description: [
            '**Decarbonizing the Skies – Drop-In Fuels for Cleaner Aviation**',
            'Sustainable aviation fuel is critical for reducing aviation\'s carbon footprint while utilising existing aircraft and infrastructure. SAF can reduce lifecycle GHG emissions by up to 80% compared to conventional jet fuel, with additional benefits in reduced particulate and sulfur emissions.',
            '',
            '**SAF Pathways**',
            '• **HEFA (Hydroprocessed Esters & Fatty Acids):** Used cooking oil, waste fats, and agricultural oils converted via hydrotreatment.',
            '• **Fischer-Tropsch (FT):** Syngas from biomass or municipal waste converted to jet fuel.',
            '• **Alcohol-to-Jet (ATJ):** Ethanol or isobutanol conversion to sustainable jet fuel.',
            '• **Power-to-Liquid (PtL):** E-fuels from green hydrogen and captured CO₂.',
            '',
            '**Benefits Beyond GHG Reduction**',
            '• **Agricultural Benefits:** Extra revenue for farmers, erosion control, and biodiversity enhancement.',
            '• **Waste Valorization:** Converting waste oils, fats, and agricultural residues into high-value products.',
            '• **Air Quality:** Lower SOx, NOx, and particulate emissions improving local air quality.',
            '• **Aircraft Performance:** Improved combustion characteristics and reduced engine maintenance.'
        ]
    },
    {
        id: 'rng-biogas',
        title: 'Renewable Natural Gas (RNG) & Biogas',
        category: 'Sustainability',
        description: [
            '**Waste to Energy – Converting Organic Residues to Pipeline-Quality Gas**',
            'Renewable natural gas is a gaseous fuel derived from biomass or certified waste streams with composition and heating value equivalent to fossil natural gas. RNG enables decarbonization of existing gas infrastructure without equipment modifications.',
            '',
            '**Biogas Production**',
            '• **Anaerobic Digestion:** Mesophilic and thermophilic digesters for organic waste processing.',
            '• **Feedstock Handling:** Agricultural waste, food waste, sewage sludge, and industrial organic waste.',
            '• **Landfill Gas Recovery:** Collection systems for municipal solid waste landfills.',
            '',
            '**Upgrading to RNG**',
            '• **CO₂ Removal:** Membrane, PSA, and amine-based upgrading to >95% methane.',
            '• **Contaminant Removal:** H₂S, siloxane, and moisture removal to pipeline specifications.',
            '• **Grid Injection:** Compression and quality monitoring for natural gas network injection.',
            '• **Vehicle Fuel:** Bio-CNG compression and dispensing for transport applications.'
        ]
    },
    {
        id: 'biomass',
        title: 'Biomass Gasification',
        category: 'Sustainability',
        description: [
            '**Advanced Thermal Conversion – Syngas from Sustainable Feedstocks**',
            'Biomass gasification converts organic materials into syngas through partial oxidation at high temperatures. This versatile technology handles challenging feedstocks with variable quality while producing clean syngas for power, fuels, or chemicals production.',
            '',
            '• **Gasifier Technologies:** Fixed bed, fluidized bed, and entrained flow configurations for various feedstocks.',
            '• **Feedstock Flexibility:** Wood chips, agricultural residues, energy crops, and waste materials.',
            '• **Syngas Cleanup:** Tar removal, particulate filtration, and sulfur cleanup systems.',
            '• **Power Generation:** Gas engines and turbines for electricity production.',
            '• **Fuel Synthesis:** Fischer-Tropsch and methanol synthesis from bio-syngas.',
            '• **Biochar Production:** Carbon-negative soil amendment from gasification residues.'
        ]
    },
    {
        id: 'waste-volume',
        title: 'Municipal Solid Waste to Energy',
        category: 'Sustainability',
        description: [
            '**Closing the Loop – Converting Waste into Valuable Energy**',
            'Waste-to-energy facilities convert non-recyclable municipal solid waste into electricity, heat, or fuel, reducing landfill volumes while recovering energy. Modern WtE plants achieve high efficiency with strict emissions control meeting stringent environmental standards.',
            '',
            '**WtE Technologies**',
            '• **Mass Burn Incineration:** Moving grate combustion with energy recovery for mixed MSW.',
            '• **Refuse-Derived Fuel (RDF):** Pre-processed waste for industrial co-firing and cement kilns.',
            '• **Plasma Gasification:** High-temperature treatment for hazardous and complex waste streams.',
            '• **Pyrolysis:** Thermal decomposition producing oils, char, and gas products.',
            '',
            '**Supporting Infrastructure**',
            '• **Transfer Stations:** Waste consolidation and sorting for efficient transport.',
            '• **Engineered Landfills:** Liner systems, leachate management, and landfill gas recovery.',
            '• **Emissions Control:** Flue gas treatment meeting EU WID and local standards.'
        ]
    },
    {
        id: 'circular-economy',
        title: 'Circular Economy Solutions',
        category: 'Sustainability',
        description: [
            '**Beyond Linear – Designing Out Waste, Keeping Materials in Use**',
            'The circular economy replaces the traditional \'take-make-waste\' model with systems that eliminate waste, keep products and materials in use, and regenerate natural systems. We help clients identify and implement circular economy opportunities across their operations.',
            '',
            '**Circular Economy Framework**',
            '• **Eliminate Waste & Pollution:** Process optimisation and waste stream minimisation at source.',
            '• **Keep Materials in Use:** Recovery, recycling, and reprocessing systems.',
            '• **Regenerate Natural Systems:** Bio-based feedstocks and ecosystem restoration.',
            '',
            '**Applications**',
            '• **Plastic Recycling:** Mechanical and chemical recycling to pellets and monomers.',
            '• **Tire Recycling:** Conversion to thermoplastic elastomers (TPE) and carbon black.',
            '• **Waste Heat Recovery:** ORC systems and heat integration capturing process waste heat.',
            '• **Water Recycling:** Treatment and reuse systems achieving zero liquid discharge.',
            '• **Industrial Symbiosis:** Connecting waste streams from one process as feedstock for another.'
        ]
    },
    {
        id: 'renewable-integration',
        title: 'Renewable Energy Integration',
        category: 'Sustainability',
        description: [
            '**Harnessing Nature – Solar, Wind, and Beyond**',
            'Renewable energy sources offer sustainable power generation with minimal environmental impact. We provide engineering support for integrating renewable generation into industrial facilities and supporting hybrid energy systems.',
            '',
            '• **Solar PV Systems:** Rooftop and ground-mount installations with inverter and grid connection.',
            '• **Wind Power:** Onshore wind farm integration and site assessment support.',
            '• **Battery Storage:** Energy storage systems for renewable intermittency management.',
            '• **Hybrid Systems:** Solar-wind-storage-diesel combinations for remote facilities.',
            '• **Grid Integration:** Power quality, protection, and net metering systems.',
            '• **Geothermal:** Site assessment and heat extraction system design.'
        ]
    }
];

import { VerticalTabsSection } from './VerticalTabsSection';

const disciplinesData = [
    {
        id: 'process',
        title: 'Process',
        description: [
            'Our Process Engineering discipline is the core of our designs, ensuring optimal functionality and safety. We develop heat and material balances, PFDs, and P&IDs to define the plant\'s operating conditions.',
            'We focus on energy efficiency and waste minimisation. Our process engineers work closely with other disciplines to ensure the seamless integration of all plant systems.'
        ]
    },
    {
        id: 'mechanical-static',
        title: 'Mechanical - Static',
        description: [
            'The Mechanical Static discipline handles the design and analysis of stationary equipment such as pressure vessels, heat exchangers, and storage tanks. We ensure compliance with international codes like ASME and API.',
            'Our experts perform detailed stress analysis and finite element analysis (FEA) to guarantee structural integrity. We select materials that withstand harsh operating environments and ensure long-term reliability.'
        ]
    },
    {
        id: 'mechanical-rotary',
        title: 'Mechanical - Rotary',
        description: [
            'Our Rotary Equipment team specialises in the selection and specification of pumps, compressors, turbines, and fans. We ensure that rotating machinery meets process requirements and reliability standards.',
            'We conduct vibration analysis and support installation and commissioning activities. Our goal is to maximise equipment availability and minimise maintenance costs.'
        ]
    },
    {
        id: 'mechanical-hvac',
        title: 'Mechanical - HVAC',
        description: [
            'We design robust HVAC systems for industrial control rooms, substations, and plant buildings. Our solutions maintain optimal environmental conditions for both personnel comfort and equipment protection.',
            'We prioritize energy-efficient designs and compliance with safety regulations. Our HVAC systems handle hazardous area classifications and ensure proper ventilation and filtration.'
        ]
    },
    {
        id: 'piping',
        title: 'Piping',
        description: [
            'Piping Engineering is a critical component of our projects, involving layout design, stress analysis, and material selection. We create detailed 3D models to optimise routing and ensure constructability.',
            'We handle complex piping networks for various fluids and pressures. Our designs focus on safety, accessibility for maintenance, and minimising pressure drops.'
        ]
    },
    {
        id: 'civil-structural',
        title: 'Civil / Structural',
        description: [
            'Our Civil and Structural Engineering team designs foundations, steel structures, and buildings for industrial facilities. We ensure that all structures can withstand operating loads and environmental forces.',
            'We use advanced analysis software to optimise structural designs for economy and safety. Our scope includes site grading, drainage systems, and architectural design of plant buildings.'
        ]
    },
    {
        id: 'electrical',
        title: 'Electrical',
        description: [
            'We provide comprehensive Electrical Engineering services, including power distribution, lighting, and earthing systems. We design single line diagrams, cable schedules, and substation layouts.',
            'Safety and reliability are our top priorities. We perform power system studies such as load flow, short circuit, and relay coordination to ensure a stable and safe power supply.'
        ]
    },
    {
        id: 'instrumentation',
        title: 'Instrumentation',
        description: [
            'Our Instrumentation discipline covers field instrument selection, control system design (DCS/PLC), and safety instrumented systems (SIS). We ensure precise control and monitoring of plant processes.',
            'We develop loop diagrams, logic diagrams, and hook-up drawings. Our designs enhance process visibility and automation level, leading to improved operational efficiency.'
        ]
    },
    {
        id: 'fire-gas',
        title: 'Fire & Gas',
        description: [
            'We design advanced Fire & Gas detection and suppression systems to protect personnel and assets. Our solutions include detector layout, system architecture design, and integration with plant safety systems.',
            'We conduct coverage mapping and consequence analysis. Our aim is to ensure early detection and effective response to any hazardous incidents.'
        ]
    },
    {
        id: 'telecom',
        title: 'Telecom',
        description: [
            'Our Telecom Engineering services encompass plant-wide communication systems, including CCTV, PA/GA, LAN/WAN, and radio systems. We ensure reliable connectivity for operations and safety.',
            'We design robust infrastructure that withstands industrial environments. Our systems support data transmission, security monitoring, and emergency communication needs.'
        ]
    }
];

export const DisciplinesSection = () => {
    return (
        <section className="bg-white py-4 w-full">
            <VerticalTabsSection data={disciplinesData} />
        </section>
    );
};

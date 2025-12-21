import { VerticalTabsSection } from './VerticalTabsSection';

const servicesData = [
    {
        id: 'feed',
        title: 'FEED',
        description: [
            'Front-End Engineering Design (FEED) is a critical phase where we define the technical requirements and project cost estimates. Our meticulous approach ensures that potential risks are identified and mitigated early on.',
            'We deliver comprehensive design packages that serve as the foundation for the EPC phase. This includes process flow diagrams, layout plans, and preliminary equipment specifications tailored to client needs.'
        ]
    },
    {
        id: 'detailed-engineering',
        title: 'Detailed Engineering',
        description: [
            'Our Detailed Engineering services transform conceptual designs into construction-ready drawings and specifications. We cover all disciplines including civil, structural, mechanical, piping, electrical, and instrumentation.',
            'Using advanced 3D modeling software, we ensure clash detection and seamless integration of all systems. Our focus is on accuracy and constructability to minimize field rework and delays.'
        ]
    },
    {
        id: 'epc',
        title: 'EPC',
        description: [
            'Engineering, Procurement, and Construction (EPC) is our turnkey solution for executing complex projects. We take full responsibility for the entire project lifecycle, from design to commissioning.',
            'Our integrated team ensures seamless coordination between engineering, procurement, and construction activities. We are committed to delivering projects on time, within budget, and to the highest quality standards.'
        ]
    },
    {
        id: 'epcm',
        title: 'EPCM',
        description: [
            'In the Engineering, Procurement, and Construction Management (EPCM) model, we act as the client\'s representative. We manage the project execution, overseeing contractors and suppliers to ensure compliance with project goals.',
            'This approach provides clients with greater control and flexibility. We bring our expertise in project management, contract administration, and site supervision to deliver successful outcomes.'
        ]
    },
    {
        id: 'pmc',
        title: 'PMC',
        description: [
            'Our Project Management Consultancy (PMC) services provide expert guidance and oversight for large-scale industrial projects. We help clients navigate complex challenges and ensure project objectives are met.',
            'We implement robust project controls, risk management strategies, and quality assurance processes. Our goal is to protect the client\'s interests and maximize the return on investment.'
        ]
    },
    {
        id: 'owners-engineer',
        title: "Owner's Engineer",
        description: [
            'As Owner\'s Engineer, we serve as an independent technical advisor to the project owner. We review designs, monitor construction progress, and ensure that the project meets all technical and regulatory requirements.',
            'We provide an unbiased perspective, helping clients make informed decisions throughout the project lifecycle. Our involvement mitigates risks and enhances value engineering opportunities.'
        ]
    },
    {
        id: 'process-technology',
        title: 'Process Technology Integration',
        description: [
            'We specialize in the integration of advanced process technologies to optimize plant performance. Our team evaluates and selects the best available technologies to meet specific production goals.',
            'From licensing support to detailed process design, we ensure seamless implementation. We focus on energy efficiency, yield improvement, and sustainability in every technology integration project.'
        ]
    },
    {
        id: 'brownfield',
        title: 'Brownfield Modifications',
        description: [
            'Our Brownfield Modification services are designed to upgrade and expand existing facilities with minimal disruption to operations. We conduct thorough site surveys and feasibility studies to plan execution strategies.',
            'We handle debottlenecking, revamps, and modernization projects. Our engineering solutions prioritize safety and operational continuity, ensuring existing assets are leveraged effectively.'
        ]
    },
    {
        id: 'laser-scan',
        title: 'Laser Scan & Digital Twins',
        description: [
            'We utilize state-of-the-art Laser Scanning technology to create accurate 3D as-built models of existing facilities. This data is the foundation for creating Digital Twins for asset management.',
            'Digital Twins allow for real-time monitoring and predictive maintenance. Our digital solutions enhance operational visibility and enable data-driven decision-making for plant lifecycle management.'
        ]
    }
];

export const ServicesSection = () => {
    return (
        <section className="bg-white py-12 w-full">
            <VerticalTabsSection data={servicesData} />
        </section>
    );
};

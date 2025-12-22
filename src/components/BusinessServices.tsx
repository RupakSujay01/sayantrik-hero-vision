import { VerticalTabsSection } from './VerticalTabsSection';


interface ServiceData {
    id: string;
    title: string;
    description: string[];
}

const services: ServiceData[] = [
    {
        id: 'refinery',
        title: 'Refinery',
        description: [
            'Our Refinery solutions focus on optimizing meaningful throughput and enhancing process efficiency. We provide state-of-the-art engineering services that cater to both brownfield modifications and greenfield projects.',
            'We leverage advanced simulation tools and industry expertise to ensure compliance with environmental standards while maximizing profitability. Our team is dedicated to delivering robust and safe refinery operations.'
        ]
    },
    {
        id: 'oil-gas-onshore',
        title: 'Oil & Gas - Onshore',
        description: [
            'For Oil & Gas Onshore projects, we offer comprehensive engineering support ranging from wellhead to processing facilities. Our designs prioritize safety, operability, and maintainability in challenging environments.',
            'We integrate cutting-edge technologies to streamline production and reduce operational costs. Our tailored approach ensures that each project meets specific regional and technical requirements.'
        ]
    },
    {
        id: 'oil-gas-offshore',
        title: 'Oil & Gas - Offshore',
        description: [
            'Our Oil & Gas Offshore capabilities cover the full spectrum of topside engineering and subsea tie-backs. We understand the unique challenges of the marine environment and design resilient systems accordingly.',
            'From fixed platforms to floating production storage and offloading (FPSO) units, we deliver engineering excellence. Our focus is on minimizing downtime and ensuring the structural integrity of all offshore assets.'
        ]
    },
    {
        id: 'pipelines',
        title: 'Cross Counter Pipelines',
        description: [
            'We specialize in the design and engineering of Cross Counter Pipelines for the efficient transport of hydrocarbons. Our services include route selection, hydraulic analysis, and stress analysis to ensure safe and reliable transmission.',
            'We employ rigorous safety standards and advanced monitoring technologies to prevent leaks and ensure pipeline integrity. Our solutions are designed to traverse diverse terrains with minimal environmental impact.'
        ]
    },
    {
        id: 'storage-terminals',
        title: 'Storage Terminals',
        description: [
            'Our expertise in Storage Terminals encompasses the design of tank farms for crude oil, refined products, and chemicals. We ensure optimal layout, safety systems, and loading/unloading facilities.',
            'We focus on automation and inventory management systems to enhance operational efficiency. Compliance with international safety codes and environmental regulations is at the core of our storage terminal designs.'
        ]
    },
    {
        id: 'gas-compressor',
        title: 'Gas Compressor Station',
        description: [
            'We provide specialized engineering for Gas Compressor Stations to maintain pressure and flow in natural gas pipelines. Our designs optimize compressor performance and energy efficiency.',
            'Our team handles everything from equipment selection to station layout and control systems. We ensure reliable operation and ease of maintenance, crucial for the continuous supply of natural gas.'
        ]
    },
    {
        id: 'chemicals',
        title: 'Chemicals',
        description: [
            'Our Chemicals sector services cover a wide range of processing facilities. We assist in process scale-up, plant design, and optimization for commodity and specialty chemical production.',
            'We prioritize process safety management and efficient resource utilization. Our engineering solutions help clients adapt to changing market demands and regulatory landscapes.'
        ]
    },
    {
        id: 'speciality-chemicals',
        title: 'Speciality Chemicals',
        description: [
            'In the realm of Speciality Chemicals, we offer bespoke engineering solutions for high-value, low-volume products. We understand the precise control and purity requirements of this sector.',
            'Our designs incorporate flexible manufacturing limits and advanced process controls. We work closely with clients to bring innovative chemical products to market quickly and safely.'
        ]
    },
    {
        id: 'green-hydrogen',
        title: 'Green Hydrogen',
        description: [
            'We are at the forefront of the energy transition with our Green Hydrogen engineering services. We design facilities for electrolysis, storage, and distribution of hydrogen produced from renewable energy sources.',
            'Our goal is to support the decarbonization of heavy industries and transportation. We provide techno-economic analysis and engineering designs that make green hydrogen projects viable and scalable.'
        ]
    },
    {
        id: 'powerplants',
        title: 'Powerplants',
        description: [
            'Our Powerplants services encompass the design and engineering of conventional and renewable energy generation facilities. We focus on maximizing efficiency and reducing emissions.',
            'From thermal power plants to solar and wind integrations, we deliver comprehensive solutions. We ensure grid stability and reliable power generation to meet the growing energy needs.'
        ]
    }
];

export const BusinessServices = () => {
    return (
        <section className="bg-white py-4 w-full">
            <VerticalTabsSection data={services} />
        </section>
    );
};

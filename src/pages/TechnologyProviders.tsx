import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Plus, Building2, Factory, Zap, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BubbleNavLink } from '@/components/ui/BubbleNavLink';
import { SEO } from "@/components/SEO";

const TechnologyProviders = () => {
    const [activeSection, setActiveSection] = useState('opportunity');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 130;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "auto"
            });
            setActiveSection(id);
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['opportunity', 'offerings', 'sectors', 'models', 'why-us'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sidebarLinks = [
        { id: 'opportunity', label: 'The Opportunity' },
        { id: 'offerings', label: 'What Sayantrik Offers' },
        { id: 'sectors', label: 'Technology Sectors' },
        { id: 'models', label: 'Partnership Models' },
        { id: 'why-us', label: 'Why Choose Sayantrik' },
    ];

    const sectors = [
        {
            id: 'energy',
            icon: Factory,
            title: 'Energy',
            color: 'text-[#ED2939]',
            bg: 'bg-red-50',
            items: ['Upstream: EOR, Water Treatment', 'Midstream: Gas Processing, NGL', 'Downstream: Refining, Coking, FCC', 'LNG & GTL: Liquefaction, Regasification']
        },
        {
            id: 'chemicals',
            icon: CheckCircle2,
            title: 'Chemicals',
            color: 'text-[#ED2939]',
            bg: 'bg-red-50',
            items: ['Basic: Acids, Chlor-Alkali', 'Fertilisers: Ammonia, Urea, DAP', 'Methanol: Synthesis, MTO', 'Petrochemicals: Olefins, Aromatics', 'Polymers: PE, PP, PVC']
        },
        {
            id: 'power',
            icon: Zap,
            title: 'Power',
            color: 'text-[#ED2939]',
            bg: 'bg-red-50',
            items: ['Thermal: CCGT, HRSG', 'Cogeneration: CHP, Waste Heat', 'Captive Power Plants', 'Grid Systems: Substations']
        },
        {
            id: 'sustainability',
            icon: Leaf,
            title: 'Sustainability',
            color: 'text-[#40a829]',
            bg: 'bg-green-50',
            items: ['Hydrogen: Green/Blue H₂', 'CCUS: Carbon Capture, EOR', 'Biofuels: SAF, RNG, Ethanol', 'Waste-to-Energy', 'Circular Economy']
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Technology Providers"
                description="Join Sayantrik Engineers as a technology partner. We offer local expertise and seamless integration for global technology licensors."
                url="/technology-providers"
            />
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-16 relative">

                {/* Sticky Sidebar - Desktop Only */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-32">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                            Navigation
                        </h3>
                        <div className="flex flex-col gap-4">
                            {sidebarLinks.map((link, index) => (
                                <BubbleNavLink
                                    key={link.id}
                                    id={link.id}
                                    label={link.label}
                                    isActive={activeSection === link.id}
                                    index={index}
                                    totalItems={sidebarLinks.length}
                                    onClick={() => scrollToSection(link.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Sticky Top */}
                <div className="lg:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 mb-6 -mx-4 px-4 overflow-x-auto">
                    <div className="flex space-x-2 min-w-max">
                        {sidebarLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors",
                                    activeSection === link.id
                                        ? "bg-[#ED2939] text-white shadow-md"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-12 pb-8">
                    {/* Section 1: The Opportunity */}
                    <motion.section
                        id="opportunity"
                        initial={{ opacity: 0, y: 20, borderColor: "rgba(229, 231, 235, 1)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            borderColor: "#ED2939",
                            boxShadow: "0 20px 25px -5px rgba(237, 41, 57, 0.1), 0 10px 10px -5px rgba(237, 41, 57, 0.04)"
                        }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.5 }}
                        className="scroll-mt-32 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-500"
                    >
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#ED2939] bg-red-50 rounded-full border border-red-100">
                                    PARTNERSHIP PROGRAMME
                                </span>
                                <motion.h1
                                    className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight"
                                    whileInView={{ color: "#111827" }} // Keeping title dark for readability
                                >
                                    Your Technology. Our Local Expertise.<br />
                                    <span className="text-[#ED2939]">Together, We Deliver.</span>
                                </motion.h1>
                                <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed text-justify">
                                    An open invitation to technology licensors, process developers, and equipment suppliers to partner with Sayantrik Engineers for comprehensive project execution across India and emerging markets.
                                </p>
                            </div>

                            <div className="bg-gray-900 text-white rounded-xl p-6 shadow-inner relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
                                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#ED2939] transition-colors">Why Establish a Local Arm?</h3>
                                        <p className="text-gray-300 leading-relaxed text-sm text-justify">
                                            We offer far more than just engineering execution. We become your extended arm in India – representing your technology, ensuring seamless integration with local facilities, and providing on-ground support throughout the project lifecycle.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['Local Representation', 'BOP Integration', 'Inspection Services', 'Regulatory Compliance'].map((item) => (
                                            <div key={item} className="bg-white/10 p-3 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                                <span className="text-sm font-medium text-gray-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 2: What Sayantrik Offers (ISBL-BOP Bridge) */}
                    <motion.section
                        id="offerings"
                        initial={{ opacity: 0, y: 20, borderColor: "rgba(229, 231, 235, 1)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            borderColor: "#ED2939",
                            boxShadow: "0 20px 25px -5px rgba(237, 41, 57, 0.1), 0 10px 10px -5px rgba(237, 41, 57, 0.04)"
                        }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.5 }}
                        className="scroll-mt-24 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-500"
                    >
                        <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                                What We Offer
                            </h2>
                            <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                                End-to-End Execution
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* ISBL - BOP Bridge */}
                            <div className="grid md:grid-cols-11 gap-4 items-stretch">
                                {/* Left Pane */}
                                <div className="md:col-span-4 md:col-start-2 bg-gray-50/50 border border-gray-200 rounded-xl p-4 shadow-sm hover:border-[#ED2939]/30 transition-colors">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                        ISBL - LICENSOR CORE
                                    </h3>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Core Process Design',
                                            'Proprietary Equipment',
                                            'Process Guarantees',
                                            'Start-up Supervision'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#ED2939] rounded-full mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bridge Icon */}
                                <div className="md:col-span-1 flex items-center justify-center py-4 md:py-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 180 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-lg z-10 cursor-pointer"
                                    >
                                        <Plus className="w-5 h-5 text-white" />
                                    </motion.div>
                                </div>

                                {/* Right Pane */}
                                <div className="md:col-span-4 bg-gray-50/50 border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 transition-colors relative overflow-hidden">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center relative z-10">
                                        BOP & OSBL INTEGRATION
                                    </h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">BOP Integration</h4>
                                            <ul className="space-y-1.5 text-sm text-gray-600">
                                                <li>• Utility Systems</li>
                                                <li>• Power Distribution</li>
                                                <li>• Control Room/DCS</li>
                                                <li>• Fire Protection</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">OSBL Facilities</h4>
                                            <ul className="space-y-1.5 text-sm text-gray-600">
                                                <li>• Raw Material Storage</li>
                                                <li>• Product Dispatch</li>
                                                <li>• ETP / WTP</li>
                                                <li>• Pipe Racks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Grid (Inspection, Validation, Support) */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="border border-gray-100 rounded-xl p-5 hover:border-[#ED2939]/30 hover:bg-red-50/30 transition-all cursor-default h-full text-center">
                                    <h3 className="text-sm font-bold text-gray-900 mb-3 border-b pb-2 uppercase tracking-wide">Inspection Services</h3>
                                    <ul className="space-y-1.5 text-xs text-gray-600">
                                        <li>• Vendor Progress Monitoring</li>
                                        <li>• Stage-wise Hold Points</li>
                                        <li>• FAT Witnessing</li>
                                        <li>• Schedule Tracking & Expediting</li>
                                    </ul>
                                </div>
                                <div className="border border-gray-100 rounded-xl p-5 hover:border-[#ED2939]/30 hover:bg-red-50/30 transition-all cursor-default h-full text-center">
                                    <h3 className="text-sm font-bold text-gray-900 mb-3 border-b pb-2 uppercase tracking-wide">Validation & Compliance</h3>
                                    <ul className="space-y-1.5 text-xs text-gray-600">
                                        <li>• Design Validation vs Licensor Req</li>
                                        <li>• Indian Regulatory (IBR, PESO)</li>
                                        <li>• Safety Verification (SIL/HAZOP)</li>
                                        <li>• Environmental Clearance Support</li>
                                    </ul>
                                </div>
                                <div className="border border-gray-100 rounded-xl p-5 hover:border-[#ED2939]/30 hover:bg-red-50/30 transition-all cursor-default h-full text-center">
                                    <h3 className="text-sm font-bold text-gray-900 mb-3 border-b pb-2 uppercase tracking-wide">Your Local Arm Support</h3>
                                    <ul className="space-y-1.5 text-xs text-gray-600">
                                        <li>• Pre-Sales Technical Support</li>
                                        <li>• Local Vendor Network Access</li>
                                        <li>• Client Interface Management</li>
                                        <li>• Feasibility & Cost Estimation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3: Technology Sectors */}
                    <motion.section
                        id="sectors"
                        initial={{ opacity: 0, y: 20, borderColor: "rgba(229, 231, 235, 1)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            borderColor: "#ED2939",
                            boxShadow: "0 20px 25px -5px rgba(237, 41, 57, 0.1), 0 10px 10px -5px rgba(237, 41, 57, 0.04)"
                        }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.5 }}
                        className="scroll-mt-24 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-500"
                    >
                        <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                                Sectors We Support
                            </h2>
                            <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                                Industry Expertise
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {sectors.map((sector) => (
                                <div key={sector.id} className="group rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-300 hover:shadow-md bg-white">
                                    <div className="p-4 h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ED2939] transition-colors">{sector.title}</h3>
                                        </div>

                                        <div className="space-y-1.5">
                                            {sector.items.map((item, idx) => (
                                                <div key={idx} className="flex items-start text-sm text-gray-600">
                                                    <span className={cn("mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", sector.bg.replace('bg-', 'bg-').replace('50', '500'))} />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 4: Partnership Models */}
                    < motion.section
                        id="models"
                        initial={{ opacity: 0, y: 20, borderColor: "rgba(229, 231, 235, 1)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            borderColor: "#ED2939",
                            boxShadow: "0 20px 25px -5px rgba(237, 41, 57, 0.1), 0 10px 10px -5px rgba(237, 41, 57, 0.04)"
                        }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.5 }}
                        className="scroll-mt-24 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-500"
                    >
                        <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                                Partnership Models
                            </h2>
                            <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                                Flexible Collaboration
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Preferred Engineering Partner",
                                    desc: "We become your recommended partner for licensed projects.",
                                    benefits: ["Consistent Quality", "Familiar Teams", "Reduced Risk"],
                                    tag: "Best for Global Licensors"
                                },
                                {
                                    title: "Capacity Extension",
                                    desc: "Operating as an extension of your in-house team.",
                                    benefits: ["Scalable Resources", "No Fixed Overhead", "Seamless Integration"],
                                    tag: "Best for Tech Startups"
                                },
                                {
                                    title: "Joint Venture / Consortium",
                                    desc: "Consortium formation for specific large-scale projects.",
                                    benefits: ["Single Responsibility", "Competitive Pricing", "Shared Risk"],
                                    tag: "Best for EPC Bids"
                                },
                                {
                                    title: "Commercialization Partner",
                                    desc: "Developing standard engineering packages for modular solutions.",
                                    benefits: ["Faster Time-to-Market", "Standard Packages", "Modular Solutions"],
                                    tag: "Best for Emerging Tech"
                                }
                            ].map((model, idx) => (
                                <div key={idx} className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-white hover:border-[#ED2939]/50 transition-all duration-300 cursor-default">
                                    <div className="text-xs font-bold text-gray-400 mb-2">MODEL 0{idx + 1}</div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{model.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">{model.desc}</p>

                                    <div className="border-t border-gray-100 pt-3 mb-4">
                                        <ul className="space-y-1.5">
                                            {model.benefits.map((benefit, bIdx) => (
                                                <li key={bIdx} className="text-xs text-gray-500 flex items-center">
                                                    <span className="w-1 h-1 bg-[#ED2939] rounded-full mr-2" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wide rounded">
                                            {model.tag}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section >

                    {/* Section 5: Why Choose Sayantrik */}
                    < motion.section
                        id="why-us"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, margin: "-10%" }} // Keep "Why Us" simple as it's fully colored
                        transition={{ duration: 0.5 }}
                        className="scroll-mt-24"
                    >
                        <div className="bg-[#ED2939] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl hover:shadow-2xl transition-shadow duration-300">

                            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-xl md:text-3xl font-bold mb-6">Built on Trust & Expertise</h2>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <div className="text-3xl font-bold mb-1">160+</div>
                                            <div className="text-white/80 text-sm">Skilled Engineers</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold mb-1">250+</div>
                                            <div className="text-white/80 text-sm">Projects Delivered</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold mb-1">13+</div>
                                            <div className="text-white/80 text-sm">Years Experience</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold mb-1">ISO</div>
                                            <div className="text-white/80 text-sm">9001:2015 Certified</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Confidentiality', 'Technical Integrity', 'Transparent Communication'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-xs border border-white/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                    <h3 className="text-lg font-bold mb-3">Ready to Partner?</h3>
                                    <p className="text-white/90 mb-6 text-sm leading-relaxed text-justify">
                                        Establish your engineering arm in India with a partner that understands the nuances of local execution and world-class technology.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-block w-full py-3 bg-white text-[#ED2939] font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-sm text-center"
                                    >
                                        Contact Our Partnership Team
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.section >


                </div>
            </div>
        </div>
    );
};

export default TechnologyProviders;

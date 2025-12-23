import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Factory, Globe2, Users, Layout, Settings } from "lucide-react";

const LctsPartnership = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative text-white py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/lcts-bg.png" alt="LCTS Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/80" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(237,41,57,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(237,41,57,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 border border-[#ED2939] rounded-full bg-[#ED2939]/10 backdrop-blur-sm">
                            <span className="text-[#ED2939] font-bold tracking-widest text-xs uppercase">Strategic Alliance</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
                            Sayantrik Engineers <span className="text-[#ED2939]">&</span> LCTS
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
                            Lucke Consulting Technology Services LLC <span className="text-gray-500 mx-2">|</span> Houston, Texas, USA
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-[#ED2939]" /> Professional</span>
                            <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-[#ED2939]" /> Innovative</span>
                            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-[#ED2939]" /> Safe</span>
                            <span className="flex items-center"><Users className="w-4 h-4 mr-2 text-[#ED2939]" /> Reliable</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Quote */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex items-center justify-center border-2 border-gray-900/10 rounded-full px-4 py-3 md:px-8 bg-gray-50/50 backdrop-blur-sm">
                            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight whitespace-normal md:whitespace-nowrap flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                <span>World-Class Process Engineering Expertise</span>
                                <span className="text-[#ED2939] text-xl md:text-2xl font-black">+</span>
                                <span>Full-Spectrum Multi-Discipline Engineering Delivery</span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        "The partnership between L&T Construction & Strategic (LCTS) and Sayantrik Engineers India Pvt Ltd represents a powerful synergy in the global engineering landscape. This collaboration combines LCTS’s vast infrastructure and project execution scale with Sayantrik’s specialized multi-disciplinary engineering expertise."
                    </p>
                </div>
            </section>

            {/* The Partnership Model */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Partnership Model</h2>
                        <div className="h-1 w-20 bg-[#ED2939]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center flex-wrap gap-2">
                                <span>Process Engineering</span>
                                <span className="text-[#ED2939] text-3xl mx-1">+</span>
                                <span>Multi-Discipline Engineering</span>
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our strategic partnership creates a seamless integration of process technology expertise from LCTS with multi-discipline engineering delivery from Sayantrik. This model delivers the best of both worlds – deep process knowledge from Houston-based industry veterans combined with cost-effective, high-quality engineering execution.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Seamless integration of Concept to Commissioning",
                                    "Houston-based Technology Leadership",
                                    "Cost-effective Indian Engineering Execution",
                                    "Unified Project Delivery"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-[#ED2939] rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            {/* 2-Column Comparison Table style for capabilities */}
                            <div className="grid grid-cols-2 divide-x divide-gray-200">
                                <div className="px-4">
                                    <h4 className="font-bold text-[#ED2939] mb-4 uppercase tracking-wide">LCTS (Houston)</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Process Design & Simulation</li>
                                        <li>Technology Selection</li>
                                        <li>Licensor Management</li>
                                        <li>HAZOP Facilitation</li>
                                        <li>Start-up Support</li>
                                    </ul>
                                </div>
                                <div className="px-4 pl-8">
                                    <h4 className="font-bold text-[#ED2939] mb-4 uppercase tracking-wide">Sayantrik (India)</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Detail Engineering</li>
                                        <li>3D Plant Modeling</li>
                                        <li>Piping & Stress Analysis</li>
                                        <li>Civil & Structural</li>
                                        <li>Instrumentation & Control</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Responsibility Matrix (Styled Table) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Project Delivery Matrix</h2>
                        <div className="h-1 w-20 bg-[#ED2939]" />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-black bg-white text-sm">
                            <thead>
                                <tr className="bg-[#ED2939] text-white">
                                    <th className="border border-black px-6 py-4 text-left font-bold w-1/5 uppercase tracking-wide">Project Phase</th>
                                    <th className="border border-black px-6 py-4 text-left font-bold w-2/5 uppercase tracking-wide">LCTS (Process Lead)</th>
                                    <th className="border border-black px-6 py-4 text-left font-bold w-2/5 uppercase tracking-wide">Sayantrik (Detail Lead)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-black hover:bg-gray-50">
                                    <td className="border border-black px-6 py-4 font-bold text-gray-900">Feasibility</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Technology screening, yield studies, economic analysis.</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Plot plan options, preliminary cost estimates.</td>
                                </tr>
                                <tr className="border border-black hover:bg-gray-50">
                                    <td className="border border-black px-6 py-4 font-bold text-gray-900">Pre-FEED</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Process design basis, PFDs, H&MB, equipment sizing.</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Preliminary layouts, equipment lists, CAPEX estimates.</td>
                                </tr>
                                <tr className="border border-black hover:bg-gray-50">
                                    <td className="border border-black px-6 py-4 font-bold text-gray-900">FEED</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Process design package, P&IDs, datasheets, HAZOP support.</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">All discipline deliverables, 3D model, AFE-quality estimates.</td>
                                </tr>
                                <tr className="border border-black hover:bg-gray-50">
                                    <td className="border border-black px-6 py-4 font-bold text-gray-900">Detail Design</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Process engineering support, technical queries, vendor review.</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">IFC deliverables, MTOs, procurement support, construction docs.</td>
                                </tr>
                                <tr className="border border-black hover:bg-gray-50">
                                    <td className="border border-black px-6 py-4 font-bold text-gray-900">Commissioning</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">Start-up support, troubleshooting, performance optimization.</td>
                                    <td className="border border-black px-6 py-4 text-gray-700">As-built documentation, red-line updates, final model.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Engineering Matrix (Styled Table) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Engineering Deliverables</h2>
                        <div className="h-1 w-20 bg-[#ED2939]" />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-black bg-white text-sm">
                            <thead>
                                <tr className="bg-[#ED2939] text-white">
                                    <th className="border border-black px-6 py-4 text-left font-bold w-1/4 uppercase tracking-wide">Discipline</th>
                                    <th className="border border-black px-6 py-4 text-left font-bold w-3/4 uppercase tracking-wide">Core Deliverables & Specializations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { discipline: "Process Engineering", desc: "Simulations (HYSYS), Flare Header Analysis, Hydraulic Calculations, Utility Design, and Operating Manuals." },
                                    { discipline: "Piping Engineering", desc: "3D Modeling, Pipe Stress Analysis (CAESAR II), Support Design, Isometrics, and Material Take-Offs (MTO)." },
                                    { discipline: "Mechanical/Static", desc: "Pressure Vessel Design (PV Elite), Storage Tank Design, Heat Exchanger Design (TEMA), and Skidded Package Design." },
                                    { discipline: "Electrical", desc: "Single Line Diagrams (SLD), Load Lists, Cable Schedules, Lighting/Earthing Design, and Substations." },
                                    { discipline: "Instrumentation", desc: "Instrument Index, Control Philosophies, Loop Diagrams, I/O Lists, and DCS/PLC Architecture." },
                                    { discipline: "Civil & Structural", desc: "Structural Analysis (STAAD.Pro), Foundation Design, Pipe Rack Design, and Blast-Resistant Building Design." }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border border-black hover:bg-gray-50">
                                        <td className="border border-black px-6 py-4 font-bold text-gray-900">{row.discipline}</td>
                                        <td className="border border-black px-6 py-4 text-gray-700">{row.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Benefits / Synergy */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Strategic Synergy & Global Compliance</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Globe2 className="w-8 h-8 text-[#ED2939] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Engineering Standards</h4>
                                        <p className="text-sm text-gray-600">Full compliance with ASME, API, ASTM, AISC, Shell DEP, and Saudi Aramco Standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Settings className="w-8 h-8 text-[#ED2939] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Technology Stack</h4>
                                        <p className="text-sm text-gray-600">Integrated use of Aveva E3D, Hexagon SmartPlant, and advanced simulation software.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Users className="w-8 h-8 text-[#ED2939] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Resource Strength</h4>
                                        <p className="text-sm text-gray-600">A combined workforce of 160+ experienced engineers and designers capable of handling 100,000+ man-hours annually.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Client Benefits</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "TECHNICAL EXCELLENCE", text: "Access to 80+ years of combined process expertise from Houston industry veterans." },
                                    { title: "COST EFFICIENCY", text: "Competitive pricing through India-based engineering delivery without compromising quality." },
                                    { title: "SINGLE POINT", text: "One contract, one interface - seamless coordination between process and detail engineering." },
                                    { title: "GLOBAL DELIVERY", text: "24-hour follow-the-sun operations with offices in Houston, Hyderabad, and Kuala Lumpur." },
                                    { title: "QUALITY ASSURED", text: "ISO 9001:2015 certified processes with rigorous quality control and review procedures." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-[#ED2939] flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-gray-900">{item.title}:</span> <span className="text-gray-600">{item.text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built on Trust & Expertise Box */}
            <section className="bg-[#ED2939] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Built on Trust & Expertise</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
                            <div>
                                <h3 className="text-4xl font-bold mb-2">160+</h3>
                                <p className="text-white/90 font-medium">Skilled Engineers</p>
                                <p className="text-xs text-white/70 mt-1">Scalable capacity for any project size</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">250+</h3>
                                <p className="text-white/90 font-medium">Projects Delivered</p>
                                <p className="text-xs text-white/70 mt-1">Proven track record across sectors</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">40-50%</h3>
                                <p className="text-white/90 font-medium">Cost Advantage</p>
                                <p className="text-xs text-white/70 mt-1">Savings with India-based delivery</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold mb-2">ISO</h3>
                                <p className="text-white/90 font-medium">9001:2015 Certified</p>
                                <p className="text-xs text-white/70 mt-1">TUV:SUD quality management</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                                LCTS Partnership: 80+ Years Exp.
                            </div>
                            <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                                Global Delivery: India, Malaysia, USA
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LctsPartnership;

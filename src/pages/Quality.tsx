import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";

const Quality = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
                    {/* Placeholder background - using generic abstract or dark pattern if no image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                </div>

                <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Quality Policy
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                            Excellence in every deliverable, integrity in every action.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-12 gap-12 items-start">
                        {/* Left Sidebar / Icon */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-32">
                                <Award className="w-16 h-16 text-[#40a829] mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Commitment</h3>
                                <div className="h-1 w-12 bg-[#40a829] mb-4" />
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Quality is not just a standard to be met, but a value to be upheld in everything we do.
                                </p>
                            </div>
                        </div>

                        {/* Main Text */}
                        <div className="md:col-span-8 lg:col-span-9">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed pl-8 border-l-4 border-[#40a829] mb-12">
                                    "Sayantrik Engineers is committed to delivering high-quality, reliable, and value-driven engineering consultancy services to the Oil & Gas, Refinery, Petrochemical, Chemical, and pharmaceutical industries."
                                </blockquote>

                                <div className="prose prose-lg text-gray-600 space-y-8 text-justify">
                                    <p>
                                        We strive to consistently meet and exceed client expectations through technical excellence, disciplined project execution, compliance with international standards, and continuous improvement in all our processes.
                                    </p>
                                    <p>
                                        Our team is dedicated to maintaining the highest levels of safety, integrity, and professionalism while fostering a culture of innovation, competency development, and customer focus to ensure sustainable growth and long-term partnerships.
                                    </p>
                                </div>

                                {/* Key Pillars */}
                                <div className="grid md:grid-cols-3 gap-6 mt-16">
                                    {[
                                        { title: "Technical Excellence", desc: "Rigorous adherence to global standards (ASME, API, ISO)." },
                                        { title: "Continuous Improvement", desc: "Always evolving our processes for better efficiency." },
                                        { title: "Customer Focus", desc: "Building long-term partnerships through value-driven delivery." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-[#40a829]" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;

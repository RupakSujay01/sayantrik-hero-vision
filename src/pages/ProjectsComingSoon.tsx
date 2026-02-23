import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import bgImage from "@/assets/oil-plant-hq.jpg";

const ProjectsComingSoon = () => {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black font-['Outfit']">
            <SEO
                title="Projects Coming Soon"
                description="Our premium project portfolio is currently being curated. Stay tuned for a showcase of our global engineering excellence."
            />

            {/* Background with subtle zoom animation */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-cover bg-center grayscale-[30%]"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-10 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-heading font-bold tracking-[0.2em] uppercase bg-primary text-white rounded-sm">
                        Under Curation
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Our Projects <br />
                        <span className="text-primary italic">Coming Soon</span>
                    </h1>

                    <div className="w-24 h-1 bg-primary mx-auto mb-8" />

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-heading font-light">
                        We are currently refining our project portfolio to showcase our latest engineering triumphs across
                        the energy and chemical sectors. Stay tuned for a deeper look into our global integration solutions.
                    </p>
                </motion.div>
            </div>

            {/* Subtle bottom edge line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20" />
        </div>
    );
};

export default ProjectsComingSoon;

import { Link, useLocation, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BubbleNavLink } from "@/components/ui/BubbleNavLink";

const ProjectLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop();

    const sidebarLinks = [
        { id: "feed", label: "FEED Engineering", path: "/projects/feed" },
        { id: "detail", label: "Detail Engineering", path: "/projects/detail" },
        { id: "as-built", label: "As-Built Engineering", path: "/projects/as-built" },
        { id: "pre-bid", label: "Pre-Bid Engineering", path: "/projects/pre-bid" },
        { id: "digitalisation", label: "Digitalisation Projects", path: "/projects/digitalisation" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-10 pb-0">
                {/* Title Section */}
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex flex-col items-start text-left">
                        <div className="pl-6 border-l-8 border-[#ED2939] inline-block text-left">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                                Our Projects
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
                                Engineering Excellence Delivered
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
                {/* Sticky Sidebar */}
                <div className="hidden lg:block w-64 shrink-0">
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
                                    isActive={currentPath === link.id || location.pathname === link.path}
                                    index={index}
                                    totalItems={sidebarLinks.length}
                                    to={link.path}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 pb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;

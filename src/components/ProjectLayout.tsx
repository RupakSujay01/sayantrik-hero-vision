import { motion } from "framer-motion";
import { Link, useLocation, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const ProjectLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop();

    const sidebarLinks = [
        { id: "feed", label: "FEED Engineering", path: "/projects/feed" },
        { id: "detail", label: "Detail Engineering", path: "/projects/detail" },
        { id: "as-built", label: "As-Built Engineering", path: "/projects/as-built" },
        { id: "pre-bid", label: "Pre-Bid Engineering", path: "/projects/pre-bid" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-10 pb-0">
                {/* Title Section */}
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="pl-6 border-l-8 border-[#ED2939] inline-block text-left">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                                Our Projects
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
                                Engineering Excellence Delivered
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
                {/* Sticky Sidebar */}
                <div className="hidden lg:block w-64 shrink-0">
                    <div className="sticky top-32 space-y-1">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                            Navigation
                        </h3>
                        {sidebarLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.path}
                                className={cn(
                                    "block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-2",
                                    currentPath === link.id || location.pathname === link.path
                                        ? "bg-red-50 text-[#ED2939] border-[#ED2939]"
                                        : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 pb-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;

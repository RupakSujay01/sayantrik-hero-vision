import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TabData {
    id: string;
    title: string;
    navTitle?: string;
    description: string[];
}

interface VerticalTabsSectionProps {
    data: TabData[];
    defaultActiveId?: string;
    containerClassName?: string;
    accentColor?: 'red' | 'green';
}

export const VerticalTabsSection = ({
    data,
    defaultActiveId,
    containerClassName,
    accentColor = 'red'
}: VerticalTabsSectionProps) => {
    const location = useLocation();

    // Initialize state properly based on URL hash if present
    const getInitialId = () => {
        if (location.hash) {
            const hashId = location.hash.replace('#', '');
            if (data.some(item => item.id === hashId)) {
                return hashId;
            }
        }
        return defaultActiveId || data[0]?.id;
    };

    const [activeId, setActiveId] = useState(getInitialId());

    // Listen for hash changes
    useEffect(() => {
        if (location.hash) {
            const hashId = location.hash.replace('#', '');
            if (data.some(item => item.id === hashId)) {
                setActiveId(hashId);

                // Allow time for tab switch before scrolling context
                setTimeout(() => {
                    const element = document.getElementById(hashId); // Note: We need to ensure elements have IDs if we want direct scroll, 
                    // OR just rely on this component rendering the right content.
                    // Since layout is fixed side-by-side, switching content is usually enough.
                    // If we want to scroll the WINDOW to the component:
                    const wrapper = document.getElementById('vertical-tabs-container');
                    if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.hash, data]);

    const activeItem = data.find(item => item.id === activeId) || data[0];

    // Determine color classes
    const activeBg = accentColor === 'green' ? "bg-[#40a829]" : "bg-[#ED2939]";
    const activeText = accentColor === 'green' ? "text-white" : "text-white";
    const activeBorder = accentColor === 'green' ? "border-[#40a829]" : "border-[#ED2939]";
    const ringColor = accentColor === 'green' ? "ring-[#40a829]/20" : "ring-[#ED2939]/20";
    const hoverBorder = accentColor === 'green' ? "hover:border-[#40a829]/20" : "hover:border-[#ED2939]/20";
    const headingText = accentColor === 'green' ? "text-[#40a829]" : "text-[#ED2939]";

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div id="vertical-tabs-container" className={cn("w-full", containerClassName)}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-8 lg:gap-16">
                {/* Left Column - Navigation (Fixed) */}
                <div className="w-full md:w-64 flex-shrink-0 pt-6 md:pt-10">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                        Navigation
                    </h3>
                    <div className="flex flex-col space-y-2 h-[calc(100vh-160px)] overflow-y-auto pr-2 custom-scrollbar">
                        {data.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveId(item.id)}
                                className={cn(
                                    "w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-2",
                                    activeId === item.id
                                        ? accentColor === 'green'
                                            ? "bg-green-50 text-[#40a829] border-[#40a829]"
                                            : "bg-red-50 text-[#ED2939] border-[#ED2939]"
                                        : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                <span className="whitespace-normal text-left block">{item.navTitle || item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column - Content (Independent Scroll) */}
                <div className="flex-1 pr-6 md:pr-12">
                    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className={cn("mb-8 pl-6 border-l-4", accentColor === 'green' ? "border-[#40a829]" : "border-[#ED2939]")}>
                                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                                        {activeItem.title}
                                    </h2>
                                    {/* Optional Subtitle if we had one, for now just the standardized title */}
                                </div>
                                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                    {activeItem.description.map((line, idx) => {
                                        // Header: **Text**
                                        if (line.startsWith('**') && line.endsWith('**')) {
                                            return (
                                                <h3 key={idx} className={cn("text-xl font-bold mt-6 mb-2", accentColor === 'green' ? "text-[#40a829]" : "text-gray-800")}>
                                                    {line.replace(/\*\*/g, '')}
                                                </h3>
                                            );
                                        }
                                        // List Item: • **Bold**: Text or • Text
                                        if (line.includes('•')) {
                                            const content = line.replace('•', '').trim();
                                            const hasBoldStart = content.startsWith('**');

                                            if (hasBoldStart) {
                                                const parts = content.split('**');
                                                // parts[0] is empty, parts[1] is bold text, parts[2] is rest
                                                return (
                                                    <div key={idx} className="flex items-start ml-4 mb-2">
                                                        <span className={cn("mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0", accentColor === 'green' ? "bg-[#40a829]" : "bg-[#ED2939]")} />
                                                        <span>
                                                            <strong className="text-gray-900">{parts[1]}</strong>
                                                            {parts[2]}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={idx} className="flex items-start ml-4 mb-2">
                                                    <span className={cn("mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0", accentColor === 'green' ? "bg-[#40a829]" : "bg-[#ED2939]")} />
                                                    <span>{content}</span>
                                                </div>
                                            );
                                        }
                                        // Empty line for spacing
                                        if (line.trim() === '') {
                                            return <br key={idx} />;
                                        }
                                        // Default Paragraph
                                        return <p key={idx}>{line}</p>;
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

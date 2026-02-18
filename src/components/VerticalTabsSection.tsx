import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

import { BubbleNavLink } from './ui/BubbleNavLink';

interface VerticalTabsSectionProps {
    data: any[];
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

    // ... (rest of the component)

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
                    const element = document.getElementById(hashId);
                    const wrapper = document.getElementById('vertical-tabs-container');
                    if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.hash, data]);

    // Scroll content to top when tab changes
    useEffect(() => {
        const contentArea = document.getElementById('portfolio-content-area');
        if (contentArea) {
            contentArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [activeId]);

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
                    <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 md:h-[calc(100vh-160px)] pr-2 custom-scrollbar overscroll-contain snap-x md:snap-none">
                        {data.map((item, index) => (
                            <BubbleNavLink
                                key={item.id}
                                id={item.id}
                                label={item.navTitle || item.title}
                                isActive={activeId === item.id}
                                index={index}
                                totalItems={data.length}
                                onClick={() => setActiveId(item.id)}
                                accentColor={accentColor}
                                className="w-auto md:w-full flex-shrink-0 whitespace-nowrap snap-start"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column - Content (Independent Scroll) */}
                <div className="w-full md:flex-1 md:pr-12 md:pl-0">
                    {/* Simplified mobile layout: No fixed verify or hidden overflow. Standard block. */}
                    <div id="portfolio-content-area" className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm min-h-[500px] md:h-[calc(100vh-160px)] overflow-visible md:overflow-y-auto custom-scrollbar overscroll-contain">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                transition={{
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.5
                                }}
                                className="space-y-6 md:space-y-6 pb-20 md:pb-0" // Add bottom padding for mobile scroll
                            >
                                <div className={cn("mb-6 md:mb-8 pl-4 md:pl-6 border-l-4", accentColor === 'green' ? "border-[#40a829]" : "border-[#ED2939]")}>
                                    <h2 className={cn("text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter", accentColor === 'green' ? "text-[#40a829]" : "text-gray-900")}>
                                        {activeItem.title}
                                    </h2>
                                    {/* Optional Subtitle if we had one, for now just the standardized title */}
                                </div>
                                <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
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

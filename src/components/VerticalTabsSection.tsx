import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TabData {
    id: string;
    title: string;
    description: string[];
}

interface VerticalTabsSectionProps {
    data: TabData[];
    defaultActiveId?: string;
    containerClassName?: string;
}

export const VerticalTabsSection = ({
    data,
    defaultActiveId,
    containerClassName
}: VerticalTabsSectionProps) => {
    const [activeId, setActiveId] = useState(defaultActiveId || data[0]?.id);

    const activeItem = data.find(item => item.id === activeId) || data[0];

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className={cn("w-full", containerClassName)}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column - Navigation */}
                <div className="md:col-span-3 lg:col-span-2 flex flex-col space-y-3">
                    {data.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-left transition-all duration-300 ease-in-out font-medium text-sm w-full truncate",
                                "border shadow-sm hover:shadow-md",
                                activeId === item.id
                                    ? "bg-[#ED2939] text-white border-[#ED2939] shadow-lg scale-105 ring-2 ring-[#ED2939]/20"
                                    : "bg-white text-gray-700 border-gray-100 hover:border-[#ED2939]/20 hover:bg-gray-50 hover:scale-105"
                            )}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Right Column - Content */}
                <div className="md:col-span-9 lg:col-span-10 bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#ED2939]">
                                {activeItem.title}
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                {activeItem.description.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VerticalTabsSection } from './VerticalTabsSection';
import { cn } from '@/lib/utils';

import { portfolioData } from '@/data/portfolio-data';

export const BusinessServices = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') as 'Energy' | 'Chemicals' | 'Power' | 'Sustainability' | null;
    const validCategories = ['Energy', 'Chemicals', 'Power', 'Sustainability'];

    // Initialize active category from URL or default to 'Energy'
    const [activeCategory, setActiveCategory] = useState<'Energy' | 'Chemicals' | 'Power' | 'Sustainability'>(
        (categoryParam && validCategories.includes(categoryParam)) ? categoryParam : 'Energy'
    );

    // Sync state with URL parameter changes
    useEffect(() => {
        if (categoryParam && validCategories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    // Scroll to top when category changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeCategory]);

    const filteredServices = portfolioData.filter(service => service.category === activeCategory);

    // Dynamic colors based on category
    const isSustainability = activeCategory === 'Sustainability';
    const activeColor = isSustainability ? "bg-[#40a829]" : "bg-[#ED2939]";
    const hoverColor = isSustainability ? "hover:text-[#40a829]" : "hover:text-[#ED2939]";
    const ringColor = isSustainability ? "ring-[#40a829]" : "ring-[#ED2939]";

    return (
        <section className={cn(
            "w-full transition-colors duration-500",
            isSustainability ? "bg-gradient-to-br from-green-50/50 to-white" : "bg-white"
        )}>
            {/* Category Toggles - Sticky */}
            <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100/50 shadow-sm transition-all duration-300">
                <div className="flex justify-center">
                    <div className="inline-flex bg-gray-100 p-1 rounded-full flex-wrap justify-center shadow-inner">
                        {(['Energy', 'Chemicals', 'Power', 'Sustainability'] as const).map((category) => {
                            const isActive = activeCategory === category;
                            const isGreen = category === 'Sustainability';

                            // Determine toggle styles dynamically
                            let activeStyle = "bg-[#ED2939] text-white shadow-md transform scale-105";
                            let hoverStyle = "text-gray-600 hover:text-[#ED2939] hover:bg-white/60";

                            if (isGreen) {
                                activeStyle = "bg-[#40a829] text-white shadow-md transform scale-105";
                                hoverStyle = "text-gray-600 hover:text-[#40a829] hover:bg-white/60";
                            }

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={cn(
                                        "w-32 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center m-1 md:m-0",
                                        isActive ? activeStyle : hoverStyle
                                    )}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <VerticalTabsSection
                // Force re-render of tabs when category changes
                key={activeCategory}
                data={filteredServices}
                // Pass custom color to tab component if needed
                accentColor={isSustainability ? 'green' : 'red'}
            />
        </section>
    );
};

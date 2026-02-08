import { useEffect, useState, useRef } from "react";
import heroBg from "@/assets/hero-bg-new.jpg";

const CoreValues = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0,
                // Trigger when element is 60% up from bottom (starts very late)
                // Untrigger when element goes below 60% from bottom (shrinks EARLIER when scrolling up)
                rootMargin: "-10% 0px -60% 0px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const values = [
        {
            title: "Client Partnership",
            desc: "We succeed when our clients succeed—their goals are our goals",
        },
        {
            title: "Technical Excellence",
            desc: "Uncompromising accuracy and engineering rigor in every deliverable",
        },
        {
            title: "Integrity",
            desc: "Honest assessments, realistic commitments, transparent communication",
        },
        {
            title: "Innovation",
            desc: "Continuously adopting new technologies and methodologies to deliver better outcomes",
        },
        {
            title: "Continuous Learning",
            desc: "Building knowledge and capability across all disciplines",
        },
        {
            title: "Quality",
            desc: "Certified processes and systematic approach as a way of life",
        },
        {
            title: "Collaboration",
            desc: "Multi-disciplinary teamwork across geographies and disciplines",
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 z-0 bg-slate-900/90" />
            {/* Used slate-900/90 to give a dark, premium backdrop for the content which is likely on white cards */}

            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-12 text-left">
                    <div className="inline-block">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                            Our Core Values
                        </h2>
                        <div
                            className={`h-2 bg-[#40a829] rounded-full transition-all duration-500 ease-in-out ${isVisible ? "w-full" : "w-2"
                                }`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 max-w-4xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group p-4 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-md hover:shadow-xl hover:border-[#40a829]/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4"
                        >
                            {/* Clean Numbering */}
                            <div className="text-2xl md:text-3xl font-bold text-[#40a829]/35 group-hover:text-[#40a829]/55 transition-colors shrink-0 w-12 text-center">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            <div className="flex-1 flex flex-col md:flex-row md:items-center md:gap-6 z-10 w-full">
                                <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#40a829] transition-colors shrink-0 md:w-1/3">
                                    {value.title}
                                </h4>

                                <p className="text-sm text-slate-600 leading-relaxed font-medium md:flex-1 md:border-l md:border-slate-300 md:pl-6">
                                    {value.desc}
                                </p>
                            </div>

                            {/* Hover Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#40a829]/0 group-hover:bg-[#40a829] transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;

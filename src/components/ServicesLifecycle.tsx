import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { lifecyclePhases } from '../data/services-data';

interface ServicesLifecycleProps {
    onPhaseSelect: (id: string) => void;
    activePhaseId?: string;
}

const ServicesLifecycle: React.FC<ServicesLifecycleProps> = ({ onPhaseSelect, activePhaseId }) => {
    return (
        <div className="w-full mb-12 overflow-x-auto pb-4">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-max md:min-w-0 md:w-full gap-4 md:gap-2">
                {lifecyclePhases.map((phase, index) => {
                    const isActive = activePhaseId === phase.id;
                    const isLast = index === lifecyclePhases.length - 1;

                    return (
                        <React.Fragment key={phase.id}>
                            {/* Phase Node */}
                            <div
                                className={`
                  relative flex items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-300
                  w-40 h-24 text-center border-2
                  ${isActive
                                        ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                                        : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:bg-accent/50'}
                `}
                                onClick={() => onPhaseSelect(phase.id)}
                            >
                                <span className="text-sm font-bold leading-tight">
                                    {phase.title}
                                </span>

                                {/* Active Indicator Arrow (Desktop - Bottom) */}
                                {isActive && (
                                    <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-primary">
                                        <ChevronDown size={24} fill="currentColor" />
                                    </div>
                                )}
                            </div>

                            {/* Connector Arrow */}
                            {!isLast && (
                                <div className="text-muted-foreground/30 flex-shrink-0">
                                    <ArrowRight className="hidden md:block" size={24} />
                                    <ChevronDown className="block md:hidden" size={24} />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesLifecycle;

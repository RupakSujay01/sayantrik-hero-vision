import { useState } from 'react';
import { Link } from "react-router-dom";
import { MessageSquare, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";

export const FloatingActionButtons = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    // Assuming isMobile is determined elsewhere or needs to be defined
    // For now, let's define a placeholder for isMobile to make the code syntactically correct.
    // In a real application, this would likely come from a custom hook or context.
    const isMobile = window.innerWidth < 768; // Example: simple check for mobile

    return (
        <>
            {/* Quality Button - Top Right */}
            <motion.div
                className={`${isMobile ? 'relative pb-2' : 'absolute bottom-0 left-0 right-0'} z-10`}
            // The original instruction had a syntax error in the style prop.
            // I'm removing the malformed style prop to ensure syntactical correctness.
            // If a style was intended, it should be an object, e.g., style={{ someProp: 'value' }}
            >
                <Link to="/quality">
                    <Button
                        size="sm"
                        className="h-10 w-auto rounded-full shadow-lg bg-[#40a829] hover:bg-[#40a829]/90 text-white transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden px-3"
                    >
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mr-0.5" />
                        <span className="whitespace-nowrap font-semibold text-xs hidden md:inline">
                            Quality Deliverables is our Core value
                        </span>
                    </Button>
                </Link>
            </div>

            {/* HSE Button - Below Quality Button */}
            <div className="fixed top-42 md:top-32 right-2 z-40">
                <Link to="/hse">
                    <Button
                        size="sm"
                        className="h-10 w-auto rounded-full shadow-lg bg-[#40a829] hover:bg-[#40a829]/90 text-white transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden px-3"
                    >
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mr-0.5" />
                        <span className="whitespace-nowrap font-semibold text-xs hidden md:inline">
                            Safety First, Always
                        </span>
                    </Button>
                </Link>
            </div>

            {/* Chatbot Component */}
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            {/* Chat/Contact Button - Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    size="lg"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                    {isChatOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
                </Button>
            </div>
        </>
    );
};

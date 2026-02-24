import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MessageSquare, CheckCircle2, X, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingActionButtons = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        checkMobile();
        handleScroll(); // Check initial scroll position

        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Quality Button - Top Right */}
            <div
                className={`fixed right-2 z-40 ${isMobile ? 'top-28' : 'top-20'}`}
            >
                <Link to="/quality">
                    <motion.div
                        initial={false}
                        animate={{
                            width: hasScrolled ? 40 : (isMobile ? 40 : "auto"),
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-10 bg-[#40a829] hover:bg-[#40a829]/90 text-white rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                    >
                        <div className="flex items-center px-3 h-full">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                            <AnimatePresence mode="popLayout" initial={false}>
                                {!hasScrolled && !isMobile && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        animate={{ opacity: 1, width: "auto", marginLeft: 6 }}
                                        exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="whitespace-nowrap font-semibold text-xs hidden md:inline"
                                    >
                                        Quality Deliverables is our Core value
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* HSE Button - Below Quality Button */}
            <div className={`fixed right-2 z-40 ${isMobile ? 'top-40' : 'top-32'}`}>
                <Link to="/hse">
                    <motion.div
                        initial={false}
                        animate={{
                            width: hasScrolled ? 40 : (isMobile ? 40 : "auto"),
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-10 bg-[#40a829] hover:bg-[#40a829]/90 text-white rounded-full shadow-lg flex items-center justify-center overflow-hidden"
                    >
                        <div className="flex items-center px-3 h-full">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                            <AnimatePresence mode="popLayout" initial={false}>
                                {!hasScrolled && !isMobile && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        animate={{ opacity: 1, width: "auto", marginLeft: 6 }}
                                        exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="whitespace-nowrap font-semibold text-xs hidden md:inline"
                                    >
                                        Safety First, Always
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* Chatbot Component */}
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            {/* Enquiry Form Component */}
            <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

            {/* Floating Buttons Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                {/* Enquiry Button */}
                <Button
                    size="lg"
                    onClick={() => setIsEnquiryOpen(true)}
                    className="h-14 w-14 rounded-full shadow-[0_10px_25px_-5px_rgba(232,160,32,0.4)] bg-[#e8a020] hover:bg-[#f0c050] text-[#0a0d12] transition-all duration-300 hover:scale-110 flex items-center justify-center border-none"
                    title="Submit Enquiry"
                >
                    <ClipboardList className="h-9 w-9" />
                </Button>

                {/* Chat Toggle */}
                <Button
                    size="lg"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                    {isChatOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
                </Button>
            </div>
        </>
    );
};

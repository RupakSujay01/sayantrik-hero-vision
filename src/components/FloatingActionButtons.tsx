import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MessageSquare, CheckCircle2, X, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "@/hooks/useEnquiry";

export const FloatingActionButtons = () => {
    const { isEnquiryOpen, openEnquiry, closeEnquiry, requestedClientType } = useEnquiry();
    const [isChatOpen, setIsChatOpen] = useState(false);
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
                className={`fixed right-0 z-40 ${isMobile ? 'top-28' : 'top-20'}`}
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
            <div className={`fixed right-0 z-40 ${isMobile ? 'top-40' : 'top-32'}`}>
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

            <EnquiryForm
                isOpen={isEnquiryOpen}
                onClose={closeEnquiry}
                initialClientType={requestedClientType}
            />

            {/* Floating Buttons Bottom Right */}
            <div className="fixed bottom-6 right-0 z-50 flex flex-col gap-4 items-center">
                {/* Enquiry Button */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black drop-shadow-[0_0_6px_rgba(237,41,57,0.8)]">Any Query</span>
                    <Button
                        size="lg"
                        onClick={() => openEnquiry()}
                        className="h-14 w-14 rounded-full shadow-[0_10px_25px_-5px_rgba(237,41,57,0.4)] bg-[#ED2939] hover:bg-[#ff3b4b] text-white transition-all duration-300 hover:scale-110 flex items-center justify-center border-none ring-2 ring-white/40 ring-offset-2 ring-offset-[#ED2939]"
                        title="Submit Enquiry"
                    >
                        <ClipboardList className="h-9 w-9" />
                    </Button>
                </div>

                {/* Chat Toggle */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black drop-shadow-[0_0_6px_rgba(237,41,57,0.8)]">Ask Chikoo</span>
                    <Button
                        size="lg"
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 flex items-center justify-center ring-2 ring-white/40 ring-offset-2 ring-offset-primary"
                    >
                        {isChatOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
                    </Button>
                </div>
            </div>
        </>
    );
};

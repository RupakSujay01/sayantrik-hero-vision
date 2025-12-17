import { Link } from "react-router-dom";
import { MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingActionButtons = () => {
    return (
        <>
            {/* Safety Button - Top Right */}
            <div className="fixed top-20 right-2 z-40">
                <Link to="/hse">
                    <Button
                        size="sm"
                        className="h-10 w-auto rounded-full shadow-lg bg-[#40a829] hover:bg-[#40a829]/90 text-white transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden px-3"
                    >
                        <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                        <span className="whitespace-nowrap font-semibold text-xs">
                            Safety is Not a Priority. It's a Value.
                        </span>
                    </Button>
                </Link>
            </div>

            {/* Contact Button - Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50">
                <Link to="/contact">
                    <Button
                        size="lg"
                        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    >
                        <MessageSquare className="h-6 w-6" />
                    </Button>
                </Link>
            </div>
        </>
    );
};

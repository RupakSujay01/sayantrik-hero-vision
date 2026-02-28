import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted/declined cookies
        const consent = localStorage.getItem("sayantrik_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("sayantrik_cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("sayantrik_cookie_consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0a0a0a] border-t border-slate-800 shadow-2xl transform transition-transform duration-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-4 text-slate-300">
                    <Info className="w-6 h-6 text-[#ED2939] shrink-0 mt-1 md:mt-0" />
                    <p className="text-sm">
                        We use cookies and similar technologies (like Google Analytics) to measure site traffic and improve your experience. By continuing to browse, you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                    <Button
                        variant="outline"
                        onClick={handleDecline}
                        className="flex-1 md:flex-none border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        Decline
                    </Button>
                    <Button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none bg-[#ED2939] hover:bg-red-700 text-white"
                    >
                        Accept Cookies
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;

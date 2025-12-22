import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BusinessServices } from "@/components/BusinessServices";

const Business = () => {
    return (
        <div className="min-h-screen">
            <div className="w-full">
                <div className="animate-fade-in-up w-full">
                    {/* Heading removed as per request */}
                    <BusinessServices />
                </div>
            </div>
        </div>
    );
};

export default Business;

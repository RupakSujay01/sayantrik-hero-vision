import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BusinessServices } from "@/components/BusinessServices";

const Business = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                <div className="mx-auto space-y-12 animate-fade-in-up w-full">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                            Our Business
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Exploring new horizons and delivering value across diverse business sectors.
                        </p>
                    </div>

                    <BusinessServices />
                </div>
            </div>
        </div>
    );
};

export default Business;

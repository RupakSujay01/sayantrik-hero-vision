import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Business = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                        Our Business
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Exploring new horizons and delivering value across diverse business sectors.
                    </p>

                    <div className="p-12 bg-muted/30 rounded-lg border border-border dashed-border">
                        <p className="text-lg font-medium text-muted-foreground">Content for Business section coming soon...</p>
                    </div>

                    <Link to="/contact">
                        <Button size="lg" className="font-semibold">
                            Partner With Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Business;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Disciplines = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                        Our Disciplines
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Expertise across multiple engineering disciplines to ensure project success.
                    </p>

                    <div className="p-12 bg-muted/30 rounded-lg border border-border dashed-border">
                        <p className="text-lg font-medium text-muted-foreground">Content for Disciplines section coming soon...</p>
                    </div>

                    <Link to="/projects">
                        <Button size="lg" className="font-semibold">
                            View Our Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Disciplines;

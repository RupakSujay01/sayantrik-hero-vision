import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingContactButton = () => {
    return (
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
    );
};

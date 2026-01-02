import { DisciplinesSection } from "@/components/DisciplinesSection";

const Disciplines = () => {
    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="w-full px-6 md:px-12">
                <div className="space-y-4 animate-fade-in-up w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary pl-1">
                        Our Disciplines
                    </h1>

                    <DisciplinesSection />
                </div>
            </div>
        </div>
    );
};

export default Disciplines;

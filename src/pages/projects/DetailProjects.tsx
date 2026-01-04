import { Card, CardContent } from "@/components/ui/card";
import { detailProjects } from "@/data/projectsData";

const DetailProjects = () => {
    return (
        <section>
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                    Detail Engineering
                </h2>
                <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                    Comprehensive Execution
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {detailProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] group bg-white">
                        <CardContent className="p-0 relative h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                            <div className="relative h-full flex flex-col justify-end p-6">
                                <div className="mb-3">
                                    <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                                        {project.location}
                                    </span>
                                </div>
                                <h3
                                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                                    style={{
                                        textShadow: '0 0 10px hsl(var(--primary) / 0.1)'
                                    }}
                                >
                                    {project.name}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                                    {project.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default DetailProjects;

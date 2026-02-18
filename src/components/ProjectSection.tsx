import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SEO } from "@/components/SEO";

export interface Project {
    name: string;
    location: string;
    description: string;
    image?: string;
}

interface ProjectSectionProps {
    title: string;
    subtitle: string;
    projects: Project[];
}

const ProjectSection = ({ title, subtitle, projects }: ProjectSectionProps) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const _getDisplayLocation = (loc: string) => {
        if (!loc) return "";
        if (loc.includes("India")) return "India";
        // Heuristic: If there is a comma, take the last part (often Country).
        if (loc.includes(",")) return loc.split(",").pop()?.trim();
        // If "City - State/Country" format
        if (loc.includes("-")) {
            const parts = loc.split("-");
            // Heuristic: If "India - State", return "India"
            if (parts[0].trim() === "India") return "India";
        }
        return loc;
    };

    return (
        <section>
            <SEO
                title={title}
                description={`${title} - ${subtitle}. Explore our delivered projects.`}
                url="/projects"
            />
            <div className="mb-10 pl-6 border-l-4 border-[#ED2939]">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                    {title}
                </h2>
                <p className="text-sm font-bold text-[#ED2939] uppercase tracking-widest mt-2">
                    {subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative border-primary/10 min-h-[280px] cursor-pointer group bg-white"
                        onClick={() => handleProjectClick(project)}
                    >
                        <CardContent className="p-0 relative h-full">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105 opacity-20"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300 opacity-50" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="mb-2">
                                    <span className="text-xs font-bold text-[#ED2939] bg-[#ED2939]/10 px-3 py-1 rounded-full border border-[#ED2939]/20">
                                        {_getDisplayLocation(project.location)}
                                    </span>
                                </div>
                                <h3
                                    className="text-xl font-bold text-slate-900 inline-block w-fit group-hover:text-[#ED2939] transition-colors duration-300"
                                    style={{
                                        textShadow: '0 0 10px rgba(255,255,255,0.8)'
                                    }}
                                >
                                    {project.name}
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-6xl p-0 overflow-hidden bg-white border-none shadow-2xl">
                    <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white relative">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#ED2939]" />

                            <DialogHeader className="mb-8">
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest rounded-full">
                                        <span className="w-2 h-2 rounded-full bg-[#ED2939]" />
                                        {selectedProject?.location}
                                    </span>
                                </div>
                                <DialogTitle className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
                                    {selectedProject?.name}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="prose prose-lg text-slate-600 leading-relaxed text-left">
                                <p>{selectedProject?.description}</p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative bg-slate-50 flex items-center justify-center p-8">
                            {selectedProject?.image ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name || "Project Image"}
                                    className="w-full h-full object-contain max-h-[500px]"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-200 rounded-xl">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">No Image Available</span>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ProjectSection;

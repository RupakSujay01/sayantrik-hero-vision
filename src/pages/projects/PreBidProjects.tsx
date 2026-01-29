import { preBidProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";

const PreBidProjects = () => {
    return (
        <ProjectSection
            title="Pre-Bid Engineering"
            subtitle="MTOs & Feasibility"
            projects={preBidProjects}
        />
    );
};

export default PreBidProjects;

import { detailProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";

const DetailProjects = () => {
    return (
        <ProjectSection
            title="Detail Engineering"
            subtitle="Comprehensive Execution"
            projects={detailProjects}
        />
    );
};

export default DetailProjects;

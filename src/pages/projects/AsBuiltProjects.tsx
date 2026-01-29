import { asBuiltProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";

const AsBuiltProjects = () => {
    return (
        <ProjectSection
            title="As-Built Engineering"
            subtitle="Site Verification & Updates"
            projects={asBuiltProjects}
        />
    );
};

export default AsBuiltProjects;

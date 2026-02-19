import { digitalisationProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";

const DigitalisationProjects = () => {
    return (
        <ProjectSection
            title="Digitalisation Projects"
            subtitle="Smart Plant & Digital Twins"
            projects={digitalisationProjects}
        />
    );
};

export default DigitalisationProjects;

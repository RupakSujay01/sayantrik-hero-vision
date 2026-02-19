import { feedProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";


const FeedProjects = () => {
    return (
        <ProjectSection
            title="FEED Engineering"
            subtitle="Front-End Engineering Design"
            projects={feedProjects}
        />
    );
};

export default FeedProjects;

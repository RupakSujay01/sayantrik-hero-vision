import { feedProjects } from "@/data/projectsData";
import ProjectSection from "@/components/ProjectSection";
import sulphuricAcid3d from "@/assets/sulphuric-acid-plant-3d.png";

const FeedProjects = () => {
    const mainProject = {
        name: "Sulphuric Acid Plant (600 MTPD)",
        location: "Gujarat, India",
        description: "Delivered early engineering covering process validation, high-temperature/low-pressure piping philosophy, static equipment sizing, P&IDs, plot plans, GA drawings, and vendor document review.",
        image: sulphuricAcid3d
    };

    const allProjects = [mainProject, ...feedProjects];

    return (
        <ProjectSection
            title="FEED Engineering"
            subtitle="Front-End Engineering Design"
            projects={allProjects}
        />
    );
};

export default FeedProjects;

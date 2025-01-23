import { ProjectCard } from "modules/ProjectCardModules/ProjectCard/ProjectCard";
import { ProjectCardVideo } from "modules/ProjectCardModules/ProjectCardVideo/ProgectCardVideo";
import { Container } from "UI/index";
import { ProgectCardMoreProjects } from "modules/ProjectCardModules/ProgectCardMoreProjects/ProgectCardMoreProjects";


export const ProjectCardPage = () => {
    return (
        <div>
            <Container>
                <ProjectCard/>
                <ProjectCardVideo videoId="eA0lHNZ1KCA"/>
                <ProgectCardMoreProjects/>
            </Container>
        </div>
    );
};


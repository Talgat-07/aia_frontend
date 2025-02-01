import { ProjectCard } from "modules/ProjectCardModules/ProjectCard/ProjectCard";
import { ProjectCardVideo } from "modules/ProjectCardModules/ProjectCardVideo/ProgectCardVideo";
import { Container, MoreProjects } from 'UI/index';
import Image from 'assets/img/moreProjects.png';
import { path } from 'utils/constants/constants.js';


export const ProjectCardPage = () => {
   const MoreProjectsConfig =
      {
         title:'Больше проектов',
         image: Image,
         subtitle: "Больше проектов",
         text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus..",
         buttons: [
            { text: "Реализованные проекты", link: path.realizeProjects },
            { text: "Архитектурное проектирование", link: path.architectureProjects },
            { text: "Дизайн общественных пространств", link: path.publicSpacesInterior },
            { text: 'Дизайн домов', link: path.houseDesignPage },
         ],
      }
    return (
            <Container>
                <ProjectCard/>
                <ProjectCardVideo videoId="eA0lHNZ1KCA"/>
                <MoreProjects config={MoreProjectsConfig}/>
            </Container>
    );
};


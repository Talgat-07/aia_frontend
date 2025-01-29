import { BlockTitle, Container } from 'UI/index.js';
import {RealizeProjects} from 'modules/RealizeProjectsPageModules/components/RealizeProjects.jsx';

export const RealizeProjectsPage = () => {
   const  realizeConfig = {
       heading: 'Реализованные проекты',
       button:null
    }
    return (
        <Container >
            <BlockTitle config={realizeConfig} />
            <RealizeProjects/>

        </Container>
    );
};


import { Container } from 'UI/Container/Container.jsx';
import { PublicArchitecture } from 'modules/PublicArchitectureModule/PublicArchitecture.jsx';
import {BlockTitle} from 'UI/BlockTitle/BlockTitle.jsx';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import { path } from 'utils/constants/constants.js';
import img from 'assets/img/RealProjects.png'

export const PublicArchitecturePage = () => {

   const moreProjectsData = {
      image: img,
      subtitle: 'subtitle',
      text: 'text',
      buttons: [
         { text: 'Реализованные проекты', link: path.realizeProjects},
         { text: 'Архитектурное проектирование', link: path.architectureProjects},
         { text: 'Дизайн общественных пространств', link: path.publicSpacesInterior},
         { text: 'Дизайн квартир', link: path.apartmentDesignPage},
      ],
   }

   const  realizeConfig = {
      heading: 'Общественные здания',
      button:null
   }

    return (
       <Container>
          <BlockTitle config={realizeConfig} />
          <PublicArchitecture />
          <MoreProjects config={moreProjectsData}/>
       </Container>
    );
};


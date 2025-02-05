import { Container } from 'UI/Container/Container.jsx';
import {BlocksArchitecture} from 'modules/BlocksArchitectureModule/BlocksArchitecture.jsx';
import {BlockTitle} from 'UI/BlockTitle/BlockTitle.jsx';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import { path } from 'utils/constants/constants.js';
import img from 'assets/img/moreProjects.png'


export const BlocksArchitecturePage = () => {

   const  realizeConfig = {
      heading: 'Поселки и кварталы',
      button:null
   }

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

   return (
      <Container>
         <BlockTitle config={realizeConfig} />
         <BlocksArchitecture />
         <MoreProjects config={moreProjectsData}/>
      </Container>
   )
}
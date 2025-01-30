import { Container } from 'UI/Container/Container.jsx';
import {PrivateArchitecture} from 'modules/PrivateArchitectureModule/components/PrivateArchitecture.jsx';
import { BlockTitle } from 'UI/BlockTitle/BlockTitle.jsx';
import { path } from 'utils/constants/constants.js';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import image from 'assets/img/RealProjects.png'


export const PrivateArchitecturePage = () => {

   const  realizeConfig = {
      heading: 'Частные дома',
      button:null
   }
   const moreProjectsData = {
      image: image,
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
         <PrivateArchitecture/>
         <MoreProjects config={moreProjectsData}/>

      </Container>
   )
}
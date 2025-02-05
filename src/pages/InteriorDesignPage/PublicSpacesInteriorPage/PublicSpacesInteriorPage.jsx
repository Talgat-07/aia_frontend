import { Container } from 'UI/Container/Container.jsx';
import { PublicSpacesInterior } from 'modules/PublicSpacesInteriorModule/PublicSpacesInterior.jsx';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import { path } from 'utils/constants/constants.js';
import img from 'assets/img/moreProjects.png'
import { BlockTitle } from 'UI/BlockTitle/BlockTitle.jsx';


export const PublicSpacesInteriorPage = () => {
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
   const blockConfig = {
      heading: 'Дизайн общественных пространств',
      button: true,
      linkWidth: '467px',
   }
   return (
      <Container>
         <BlockTitle config={blockConfig}/>
         <PublicSpacesInterior />
         <MoreProjects config={moreProjectsData}/>

      </Container>
   )
}
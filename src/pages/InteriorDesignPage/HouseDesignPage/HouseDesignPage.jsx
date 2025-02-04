import { HouseDesign } from 'modules/HouseDesignModule/HouseDesign.jsx';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import Image from 'assets/img/moreProjects.png';
import { path } from 'utils/constants/constants.js';
import { BlockTitle } from 'UI/BlockTitle/BlockTitle.jsx';

export const HouseDesignPage = () => {
   const config =
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
   const startBlockConfig = {
      heading: 'Дизайн домов и коттеджей',
      button: true,
      linkWidth: '467px',
   }
   return (
      <>
         <BlockTitle config={startBlockConfig}/>
         <HouseDesign />
         <MoreProjects config={config}/>

      </>
   );
};

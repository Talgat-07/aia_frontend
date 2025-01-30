import { Outlet, useLocation } from 'react-router-dom';
import {
   MoreProjects,
   HeroBlock,
   Container,
   EngineeringBlock,
   NewProjects,
   IndividualBlock,
   YoutubeBlock,
} from 'UI/index.js';
import { path } from 'utils/constants/constants.js';

export const ArchitectureProjectsPage = () => {
   const location = useLocation();
   const isRootRoute = location.pathname === path.architectureProjects;

   const config = {
      heroBlock: {
         showBreadCrumbs: true,
         showCustomButton: false,
         showWhatsAppIcon: false,
         video: null,
      },
      moreProjects: {
         image: null,
         title: 'Больше проектов',
         text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet consectetur. Mi tristique risus..",
         subtitle: null,
         buttons: [
            { text: "Частные дома", link: path.privateArchitecture },
            { text: "Общественные здания", link: path.publicArchitecture },
            { text: "Поселки и кварталы", link: path.blocksArchitecture },
         ],
      },
      projects: {
         cards: [
            {
               link: path.privateArchitecture,
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Частные дома',
               text: 'Описание частных домов',
            },
            {
               link: path.publicArchitecture,
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Общественные здания',
               text: 'Описание общественных зданий',
            },
            {
               link: path.blocksArchitecture,
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Коттеджные поселки',
               text: 'Описание коттеджных поселков',
            }
         ]
      }
   };

   return (
      <Container>
         {isRootRoute && (
            <>
               <HeroBlock config={config.heroBlock} />
               <EngineeringBlock />
               <NewProjects config={config.projects} />
               <MoreProjects config={config.moreProjects} />
               <IndividualBlock />
               <YoutubeBlock backgroundColor={"white"} videoId="eA0lHNZ1KCA"/>

            </>
         )}
         <Outlet />
      </Container>
   );
};

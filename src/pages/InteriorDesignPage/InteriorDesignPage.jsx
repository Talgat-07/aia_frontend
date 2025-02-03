import { Outlet, useLocation } from 'react-router-dom';
import { path } from 'utils/constants/constants.js';
import { YoutubeBlock, Container,HeroBlock,EngineeringBlock,NewProjects,MoreProjects,IndividualBlock } from 'UI/index.js';
import image from "assets/img/vilageCard.png";

export const InteriorDesignPage = () => {
    const location = useLocation();
    const isRootRoute = location.pathname === path.interiorDesign;
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
                { text: "Дизайн домов", link: path.houseDesignPage },
                { text: "Дизайн квартир", link: path.apartmentDesignPage },
                { text: "Дизайн общественных пространств", link: path.publicArchitecture },
            ],
        },
        projects: {
            cards: [
                {
                    id: 1,
                    link: `${path.projectCard}/1`,
                    image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
                    title: 'Частные дома',
                    text: 'Описание частных домов',
                },
                {
                    id: 2,
                    link: `${path.projectCard}/2`,
                    image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
                    title: 'Общественные здания',
                    text: 'Описание общественных зданий',
                },
                {
                    id: 3,
                    link: `${path.cottageVillageCard}/1`,
                    image: image,
                    title: 'Коттеджные поселки',
                    text: 'Описание коттеджных поселков',
                }
            ]
        },
        engineeringblock:{
            title:'Дизайн интерьера'

        }
    };

    return (
       <Container>
           {isRootRoute && (
              <>
                  <HeroBlock config={config.heroBlock} />
                  <EngineeringBlock config={config.engineeringblock} />
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


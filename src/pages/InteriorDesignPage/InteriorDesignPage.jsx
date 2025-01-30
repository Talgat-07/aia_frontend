import { Outlet, useLocation } from 'react-router-dom';
import { path } from 'utils/constants/constants.js';
import { YoutubeBlock, Container,HeroBlock,EngineeringBlock,NewProjects,MoreProjects,IndividualBlock } from 'UI/index.js';

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
                    link: path.privateArchitecture,
                    image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
                    title: 'Заголовок',
                    text: 'Дизайн домов',
                },
                {
                    link: path.publicArchitecture,
                    image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
                    title: 'Заголовок',
                    text: 'Дизайн квартир',
                },
                {
                    link: path.blocksArchitecture,
                    image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
                    title: 'Заголовок',
                    text: 'Дизайн общественных пространств',
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


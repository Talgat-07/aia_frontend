import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import { path } from "utils/constants/constants.js";


import {
    HomePage,
    AboutUsPage,
    CostAndStagesPage,
    RealizeProjectsPage,
    InteriorDesignPage,
    BlogPage,
    ContactUsPage,
    ArchitectureProjectsPage,
    PrivateArchitecturePage,
    PublicArchitecturePage,
    BlocksArchitecturePage,
    HousesInteriorPage,
    ApartmentsInteriorPage,
    PublicSpacesInteriorPage,
    ProjectCardPage

} from 'pages/index.js';

export const Router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: path.home,
                    element: <HomePage />,
                    handle: { breadcrumb: "Главная страница" }
                },
                {
                    path: path.aboutUs,
                    element: <AboutUsPage />,
                    handle: { breadcrumb: "О нас" }
                },
                {
                    path: path.realizeProjects,
                    element: <RealizeProjectsPage />,
                    handle: { breadcrumb: "Реализованные проекты" }
                },
                {
                    path: path.architectureProjects,
                    element: <ArchitectureProjectsPage />,
                    handle: { breadcrumb: "Архитектурное проектирование" },
                    children: [
                        {
                            path: "private",
                            element: <PrivateArchitecturePage />,
                            handle: { breadcrumb: "Частные дома" }
                        },
                        {
                            path: "public",
                            element: <PublicArchitecturePage />,
                            handle: { breadcrumb: "Общественные здания" }
                        },
                        {
                            path: "blocks",
                            element: <BlocksArchitecturePage />,
                            handle: { breadcrumb: "Поселки и кварталы" }
                        }
                    ]
                },
                {
                    path: path.interiorDesign,
                    element: <InteriorDesignPage />,
                    handle: { breadcrumb: "Дизайн интерьера" },
                    children: [
                        {
                            path: "houses",
                            element: <HousesInteriorPage />,
                            handle: { breadcrumb: "Дизайн домов" }
                        },
                        {
                            path: "apartments",
                            element: <ApartmentsInteriorPage />,
                            handle: { breadcrumb: "Дизайн квартир" }
                        },
                        {
                            path: "public-spaces",
                            element: <PublicSpacesInteriorPage />,
                            handle: { breadcrumb: "Дизайн общественных пространств" }
                        }
                    ]
                },
                {
                    path: path.projectCard,
                    element: <ProjectCardPage />,
                    handle: { breadcrumb: "Карточка проекта" }
                },
                {
                    path: path.costAndStages,
                    element: <CostAndStagesPage />,
                    handle: { breadcrumb: "Стоимость и этапы строительства" }
                },
                {
                    path: path.blog,
                    element: <BlogPage />,
                    handle: { breadcrumb: "Блог" }
                },
                {
                    path: path.contacts,
                    element: <ContactUsPage />,
                    handle: { breadcrumb: "Контакты" }
                }
            ]
        }
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    }
);

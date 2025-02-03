import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import { path } from 'utils/constants/constants.js';

   import {
      NotFoundPage,
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
      PublicSpacesInteriorPage,
      HouseDesignPage,
      ApartmentDesignPage,
      BlogOpenPage,
      ProjectCardPage,
   } from 'pages/index.js';
   import { CottageVillageCardPage } from 'pages/CottageVillageCardPage/CottageVillageCardPage.jsx';

   export const Router = createBrowserRouter(
      [
         {
            element: <Layout showContactForm={true} showFooter={true} />,
            children: [
               {
                  path: path.home,
                  index: true,
                  element: <HomePage />,
                  handle: { breadcrumb: 'Главная' },
               },
               {
                  path: path.aboutUs,
                  element: <AboutUsPage />,
                  handle: { breadcrumb: 'О нас' },
               },
               {
                  path: path.realizeProjects,
                  element: <RealizeProjectsPage />,
                  handle: { breadcrumb: 'Реализованные проекты' },
               },
               {
                  path: path.architectureProjects,
                  element: <ArchitectureProjectsPage />,
                  handle: { breadcrumb: 'Архитектурное проектирование' },
                  children: [
                     {
                        path: path.privateArchitecture,
                        element: <PrivateArchitecturePage />,
                        handle: { breadcrumb: 'Частные дома' },
                     },
                     {
                        path: path.publicArchitecture,
                        element: <PublicArchitecturePage />,
                        handle: { breadcrumb: 'Общественные здания' },
                     },
                     {
                        path: path.blocksArchitecture,
                        element: <BlocksArchitecturePage />,
                        handle: { breadcrumb: 'Поселки и кварталы' },
                     },
                  ],
               },
               {
                  path: path.interiorDesign,
                  element: <InteriorDesignPage />,
                  handle: { breadcrumb: 'Дизайн интерьера' },
                  children: [
                     {
                        path: path.apartmentDesignPage,
                        element: <ApartmentDesignPage />,
                        handle: { breadcrumb: 'Дизайн квартир' },
                     },
                     {
                        path: path.houseDesignPage,
                        element: <HouseDesignPage />,
                        handle: { breadcrumb: 'Дизайн домов' },
                     },
                     {
                        path: path.publicSpacesInterior,
                        element: <PublicSpacesInteriorPage />,
                        handle: { breadcrumb: 'Дизайн общественных пространств' },
                     },
                  ],
               },
               {
                  path: path.costAndStages,
                  element: <CostAndStagesPage />,
                  handle: { breadcrumb: 'Стоимость и этапы строительства' },
               },
               {
                  path: path.blog,
                  element: <BlogPage />,
                  handle: { breadcrumb: 'Блог' },
               },
               {
                  path: `${path.blog}/:blogId`,
                  element: <BlogOpenPage />,
                  handle: { breadcrumb: 'Блог (Открытая статья)' },
               },
               {
                  path: `${path.projectCard}/:projectId`,
                  element: <ProjectCardPage />,
                  handle: { breadcrumb: 'Карточка проекта' },
               },
               {
                  path: `${path.cottageVillageCard}/:CottageprojectId`,
                  element: <CottageVillageCardPage/>
               },
               {
                  path: path.contacts,
                  element: <ContactUsPage />,
                  handle: { breadcrumb: 'Контакты' },
               },
            ],
         },
         {
            element: <Layout showFooter={false} showContactForm={false} />,
            children: [
               {
                  path: '*',
                  element: <NotFoundPage />,
               },
            ],
         },
      ],
      {
         future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
         },
      }
   );



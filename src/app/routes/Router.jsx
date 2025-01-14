import { createBrowserRouter} from 'react-router-dom'
import {Layout} from '../layout/Layout.jsx'
import {path} from "utils/constants/constants.js";
import {HomePage,AboutUsPage,CostAndStagesPage,RealizeProjectsPage, InteriorDesignPage,BlogPage,ContactUsPage} from 'pages/index.js'

export const Router = createBrowserRouter([

    {
        element:<Layout />,
        children:[
            {
                path:path.home,
                element:<HomePage/>
            },
            {
                path:path.aboutUs,
                element:<AboutUsPage/>
            },
            {
                path:path.realizeProjects,
                element:<RealizeProjectsPage/>
            },
            {
                path:path.interiorDesign,
                element:<InteriorDesignPage/>
            },
            {
                path:path.costAndStages,
                element:<CostAndStagesPage/>
            },
            {
                path:path.blog,
                element:<BlogPage/>
            },
            {
                path:path.contacts,
                element:<ContactUsPage/>
            }



        ]

    }
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
}
)
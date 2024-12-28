import { createBrowserRouter} from 'react-router-dom'
import {Layout} from '../layout/Layout.jsx'
import {path} from "utils/constants/constants.js";
import HomePage from "pages/HomePage/HomePage.jsx";
import AboutUs from "pages/AboutUs/AboutUs.jsx";

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
                element:<AboutUs/>
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
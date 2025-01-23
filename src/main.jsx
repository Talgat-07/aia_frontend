import { createRoot } from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {Router} from "routes/Router.jsx";
import 'styles/global.scss'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <RouterProvider
            future={{
                v7_startTransition: true,
            }}
            router={Router}
        />
    </HelmetProvider>
);

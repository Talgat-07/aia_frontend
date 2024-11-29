import { createRoot } from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {Router} from "routes/Router.jsx";
import 'styles/global.scss'

createRoot(document.getElementById('root')).render(
    <RouterProvider
        future={{
            v7_startTransition: true,
        }}
        router={Router}
    />

);

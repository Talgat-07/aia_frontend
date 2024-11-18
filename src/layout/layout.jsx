import { Footer } from 'modules/footer/Footer';
import {Header} from 'modules/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Loader} from "UI/loader/Loader.jsx";
export const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};
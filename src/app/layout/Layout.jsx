import { Footer } from 'modules/footer/Footer';
import {Header} from 'modules/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Loader} from "UI/Loader/Loader.jsx";
import {ScrollToTop} from "utils/helpers/ScrollToTop.js";

export const Layout = () => {
    return (
        <>
            <ScrollToTop/>
            <Header />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};
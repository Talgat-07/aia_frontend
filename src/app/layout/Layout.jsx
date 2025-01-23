import { Footer } from 'modules/Footer/Footer';
import {Header} from 'modules/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Loader} from "UI/index.js";
import {ScrollToTop} from "utils/helpers/ScrollToTop.js";
import { ContactForm } from 'UI/ContactForm/ContactForm';


export const Layout = () => {
    return (
        <>
            <ScrollToTop/>
            <Header />

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <ContactForm/>
            <Footer />
        </>
    );
};
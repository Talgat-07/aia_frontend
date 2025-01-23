import { Footer } from 'modules/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'UI/index.js';
import { ContactForm } from 'UI/ContactForm/ContactForm';
import { ScrollToTop } from 'UI/ScrollToTop/ScrollToTop';
import { Header } from 'modules/headerModule/Components';

export const Layout = () => {
   return (
      <>
         <ScrollToTop />
         <Header />
         <Suspense fallback={<Loader />}>
            <Outlet />
         </Suspense>
         <ContactForm />
         <Footer />
      </>
   );
};

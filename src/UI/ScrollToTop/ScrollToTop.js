import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);

      const anchor = location.hash;
      if (anchor) {
         const element = document.querySelector(anchor);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   }, [location]);

   return null;
};


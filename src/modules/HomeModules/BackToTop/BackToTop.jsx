import React, { useState, useEffect, useRef } from 'react';
import styles from './BackToTop.module.scss';
import { UpArrowIcon } from 'assets/icons/UpArrowIcon';
import { WhatsAppIconGreen } from 'assets/icons/WhatsAppIconGreen';

export const BackToTop = () => {
   const contacts = [{ whatsapp: 'https://wa.me/+996777123456' }];

   const [hideButton, setHideButton] = useState(true);
   const [scrollingByButton, setScrollingByButton] = useState(false);
   const lastScrollY = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         console.log(currentScrollY);
            if (currentScrollY <= 30) {
               setScrollingByButton(false);
               setHideButton(true);
            }else{
               setHideButton(false)
            }

         lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
   }, [scrollingByButton]);

   const scrollToTop = () => {
      setScrollingByButton(true);
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
       <div className={styles.back__container}>
          {contacts.map((elem, index) => (
              <div className={styles.back__content} key={index}>
                 <a
                     href={elem.whatsapp}
                     className={styles.back__whatsapp}
                     target="_blank"
                     rel="noopener noreferrer"
                 >
                    <WhatsAppIconGreen className={styles.icon} />
                 </a>
                 <button
                     onClick={scrollToTop}
                     className={`${styles.back__button} ${hideButton ? styles.hidden : ''}`}
                 >
                    <UpArrowIcon />
                 </button>
              </div>
          ))}
       </div>
   );
};

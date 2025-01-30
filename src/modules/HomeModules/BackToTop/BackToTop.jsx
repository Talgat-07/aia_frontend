import styles from './BackToTop.module.scss';
import { UpArrowIcon } from 'assets/icons/UpArrowIcon';
import { WhatsAppIconGreen } from 'assets/icons/WhatsAppIconGreen';

export const BackToTop = () => {
   const contacts = [{ whatsapp: 'https://wa.me/+996777123456' }];

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <>
         <div className={styles.back__container}>
            {contacts &&
               contacts.map((elem, index) => (
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
                        className={styles.back__button}
                     >
                        <UpArrowIcon />
                     </button>
                  </div>
               ))}
         </div>
      </>
   );
};

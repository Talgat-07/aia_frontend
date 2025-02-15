import { useLocation } from 'react-router-dom';
import { Container, Typography, BreadCrumbs, Heading } from 'UI/index.js';
import { BreadCrumbData, path } from 'utils/constants/constants.js';
import styles from './ContactUs.module.scss';

export const ContactUsModule = () => {
   const location = useLocation();
   const currentPath = location.pathname;
   const filteredBreadCrumbData = BreadCrumbData.filter(
      (item) => item.link === path.home || item.link === currentPath
   );

   return (
      <Container className={styles.container}>
         <div className={styles.content}>
            <div className={styles.content_nav}>
               <BreadCrumbs
                  items={filteredBreadCrumbData}
                  linkColor={'#828282'}
                  activeColor={'#262626'}
               />
               <Heading
                  text="Контакты"
                  align="left"
                  color="black"
                  fontSize="h1"
                  fontWeight="bold"
                  className={styles.heading}
               />
            </div>

            <div className={styles.contactsInfo}>
               <div className={styles.content_info}>
                  <Typography
                     className={styles.title}
                     variant="bodyXl"
                     weight="medium"
                     color="black"
                  >
                     Адрес:
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     г. Бишкек, ул. Боконбаева 204, 6 этаж
                  </Typography>
               </div>

               <div className={styles.content_info}>
                  <Typography
                     className={styles.title}
                     variant="bodyXl"
                     weight="medium"
                     color="black"
                  >
                     Телефон:
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     +996706454327
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     +996706454327
                  </Typography>
               </div>

               <div
                  className={`${styles.content_info} ${styles.content_info_thre}`}
               >
                  <Typography
                     className={styles.title}
                     variant="bodyXl"
                     weight="medium"
                     color="black"
                  >
                     Время работы:
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     С пн-пт с 10:00 до 18:00
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     Сб - с 10:00 до 15:00
                  </Typography>
                  <Typography variant="bodyM" weight="light">
                     Сб - с 10:00 до 15:00
                  </Typography>
               </div>
            </div>
         </div>
         <div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.208624561088!2d74.57505437599767!3d42.86844057115021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83a49542e77%3A0x58dfa2877d9e95fc!2zMjA3INGD0LsuINCR0L7QutC-0L3QsdCw0LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1738080534959!5m2!1sru!2skg"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
         </div>
      </Container>
   );
};

import { useLocation } from 'react-router-dom';
import { Container, Typography, BreadCrumbs, Heading } from 'UI/index.js';
import { BreadCrumbData, path } from 'utils/constants/constants.js';
import styles from './ContactUs.module.scss';

export const ContactUsModule = () => {
   const location = useLocation();
   const currentPath = location.pathname;
   const filteredBreadCrumbData = BreadCrumbData.filter(item =>
      item.link === path.home || item.link === currentPath
   );


   return (
      <Container className={styles.container}>
         <div className={styles.content}>
            <div className={styles.content_nav}>
               <BreadCrumbs
                  items={filteredBreadCrumbData}
                  linkColor={"#828282"}
                  activeColor={'#262626'}
               />
               <Heading
                  text="Контакты"
                  align="left"
                  color="black"
                  fontSize="h1"
                  fontWeight="bold"
               />
            </div>

            <div className={styles.content_info}>
               <Typography variant="bodyXl" weight="medium" color="black">
                  Адрес:
               </Typography>
               <Typography variant="bodyM" weight="light">
                  Lorem ipsum dolor sit amet
               </Typography>
               <Typography variant="bodyM" weight="light">
                  Lorem ipsum dolor sit amet
               </Typography>
               <Typography variant="bodyM" weight="light">
                  Lorem ipsum dolor sit amet
               </Typography>
            </div>

            <div className={styles.content_info}>
               <Typography variant="bodyXl" weight="medium" color="black">
                  Телефон:
               </Typography>
               <Typography variant="bodyM" weight="light">
                  +996706454327
               </Typography><Typography variant="bodyM" weight="light">
                  +996706454327
               </Typography><Typography variant="bodyM" weight="light">
                  +996706454327
               </Typography>
            </div>

            <div className={styles.content_info}>
               <Typography variant="bodyXl" weight="medium" color="black">
                  Время работы:
               </Typography>
               <Typography variant="bodyM" weight="light">
                  С пн-сб С 9:00 до 19:00
                  <br />
                  Вс. выходной
               </Typography>
            </div>


         </div>
         <div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.208624561088!2d74.57505437599767!3d42.86844057115021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83a49542e77%3A0x58dfa2877d9e95fc!2zMjA3INGD0LsuINCR0L7QutC-0L3QsdCw0LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1738080534959!5m2!1sru!2skg"
               style={{
                  border: 0,
                  width: "100%",
                  height: "600px",
                  padding: "0 0 30px 0",
               }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
         </div>
      </Container>
   );
};

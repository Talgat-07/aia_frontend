import { Container, Typography, BreadCrumbs, Heading } from 'UI/index.js';
import { BreadCrumbData, path } from 'utils/constants/constants.js';
import styles from './ContactUs.module.scss'

export const ContactUsModule = () => {
   const currentPath = location.pathname;


   const filteredBreadCrumbData = [
      BreadCrumbData.find(item => item.link === path.home),
      BreadCrumbData.find(item => item.link === currentPath),
   ].filter(Boolean);
   return (
      <Container className={styles.container}>

         <div className={styles.content}>
            <BreadCrumbs items={filteredBreadCrumbData} />
            <Heading text="Контакты" align={"left"} color={"black"} fontSize={"h1"} fontWeight={"bold"} />
            <div className={styles.content_address}>
               <Typography var>Адрес</Typography>
            </div>
            <div className={styles.content_tel}>

            </div>
            <div className={styles.content_calen}>

            </div>
         </div>

      </Container>
   );
};


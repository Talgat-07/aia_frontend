import styles from './MainBanner.module.scss';
import myImage from 'assets/img/mainBanner.png';
import { Typography, CustomButton } from 'UI/index.js';
import { useModal } from 'utils/hooks/useModal.js';
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';
import { BackToTop } from '..';

const MainBanner = () => {
   const { isOpen, openModal, closeModal } = useModal();

   return (
      <div className={styles.image_banner}>

         <img className={styles.image_frame} src={myImage} alt="Main banner" />

            <div className={styles.textBanner}>
               <Typography
                  variant="h1"
                  weight="bold"
                  color="white"
                  className={styles.title}
               >
                  Архитектура со смыслом
               </Typography>

               <div className={styles.line} />

               <Typography
                  variant="bodyM"
                  color="white"
                  className={styles.subtitle}
               >
                  Архитектурная студия АЙА
               </Typography>

               <CustomButton
                  buttonStyles={'customButtonBrown'}
                  text={'Оставить заявку'}
                  onClick={openModal}
               />
            </div>

         <BackToTop />
         {isOpen ? <RegModal closeModal={closeModal} isOpen={isOpen} /> : null}
      </div>
   );
};

export default MainBanner;

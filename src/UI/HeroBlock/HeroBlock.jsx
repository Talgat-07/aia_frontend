import { BreadCrumbs, Typography, CustomButton } from 'UI/index.js';
import { useLocation } from 'react-router-dom';
import { BreadCrumbData } from 'utils/constants/constants.js';
import myImage from 'assets/img/mainBanner.png';
import { WhatsAppIconGreen } from 'assets/icons/WhatsAppIconGreen.jsx';
import styles from './HeroBlock.module.scss';
import { useModal } from 'utils/hooks/useModal.js';
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';

export const HeroBlock = ({ config = {} }) => {
   const { isOpen, openModal, closeModal } = useModal();
   const location = useLocation();
   const currentPath = location.pathname;

   const {
      showBreadCrumbs = true,
      showCustomButton = true,
      showWhatsAppIcon = true,
      image = myImage,
      video = null,
      titleHero = ''
   } = config;

   const filteredBreadCrumbData = [
      BreadCrumbData.find(item => item.link === "/"), // Главная
      BreadCrumbData.find(item => item.link === currentPath),
   ].filter(Boolean);

   return (
      <div className={styles.image_banner}>
         {showBreadCrumbs && (
            <div className={styles.breadcrumb}>
               <BreadCrumbs
                  items={filteredBreadCrumbData}
                  activeColor={"white"}
                  linkColor={"white"}
               />
            </div>
         )}

         {image && (
            <img
               className={styles.image_frame}
               src={image}
               alt="Main banner background"
            />
         )}

         {video && (
            <video
               className={styles.video_overlay}
               src={video}
               autoPlay
               muted
               loop
               playsInline
            />
         )}

         <div className={styles.textBanner}>
            <Typography
               variant="h1"
               weight="bold"
               color="white"
               className={styles.title}
            >
               { titleHero || BreadCrumbData.find(item => item.link === currentPath)?.label || "Не найдено"}
            </Typography>

            <div className={styles.line}></div>

            <Typography
               variant="bodyM"
               color="white"
               className={styles.subtitle}
            >
               Архитектурная студия АЙА
            </Typography>

            {showCustomButton && (
               <CustomButton
                  buttonStyles={["customButtonBrown"]}
                  text={"Оставить заявку"}
                  onClick={openModal}
               />
            )}
         </div>

         {showWhatsAppIcon && (
            <div className={styles.whatsapp_icon}>
               <a
                  target={"_blank"}
                  href="https://wa.me/+996777123456"
                  rel="noopener noreferrer"
               >
                  <WhatsAppIconGreen />
               </a>
            </div>
         )}
         {isOpen? (<RegModal closeModal={closeModal} isOpen={isOpen}/>) : null}

      </div>
   );
};

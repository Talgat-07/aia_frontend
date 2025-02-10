import { BreadCrumbs, Typography, CustomButton, ContentContainer } from 'UI/index.js';
import { useLocation } from 'react-router-dom';
import { BreadCrumbData } from 'utils/constants/constants.js';
import myImage from 'assets/img/mainBanner.png';
import styles from './HeroBlock.module.scss';
import { BackToTop } from "modules/HomeModules/index.js";
import { useModal } from 'utils/hooks/useModal.js';
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';

export const HeroBlock = ({ config = {}, breadcrumbs }) => {
   const { isOpen, openModal, closeModal } = useModal();
   const location = useLocation();
   const currentPath = location.pathname;

   const {
      showBreadCrumbs = true,
      showCustomButton = true,
      showWhatsAppIcon = true,
      image = myImage,
      video = null,
      titleHero = '',
      linkColor = 'white',
      activeColor = 'white'
   } = config;

   const filteredBreadCrumbData = breadcrumbs || [
      BreadCrumbData.find(item => item.link === "/"),
      BreadCrumbData.find(item => item.link === currentPath),
   ].filter(Boolean);

   return (
      <div className={styles.image_banner}>

         {showBreadCrumbs && filteredBreadCrumbData.length > 0 && (
            <div className={styles.breadcrumb}>
               <BreadCrumbs
                  items={filteredBreadCrumbData}
                  activeColor={activeColor}
                  linkColor={linkColor}
               />
            </div>
         )}

         {image && (
            <img
               className={styles.image_frame}
               src={myImage}
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
         <ContentContainer>
         <div className={styles.textBanner}>
            <Typography
               variant="h1"
               weight="bold"
               color="white"
               className={styles.title}
            >
               {titleHero || BreadCrumbData.find(item => item.link === currentPath)?.label || "Не найдено"}
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
         </ContentContainer>
         {showWhatsAppIcon && <BackToTop />}

         {isOpen && <RegModal closeModal={closeModal} isOpen={isOpen} />}
      </div>
   );
};

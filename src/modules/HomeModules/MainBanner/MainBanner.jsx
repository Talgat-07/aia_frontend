import styles from "./MainBanner.module.scss";
import { WhatsappIconMain } from "assets/index.js";
import myImage from "assets/img/mainBanner.png";
import { Typography, CustomButton } from "UI/index.js";
import {useModal} from "utils/hooks/useModal.js";
import {RegModal} from "modules/User/Components/RegModal/RegModal.jsx";

const MainBanner = () => {
    const {isOpen, openModal, closeModal} = useModal();

    return (
    <div className={styles.image_banner}>
      <img
        className={styles.image_frame}
        src={myImage}
        alt="Main banner"  
      />
      <div className={styles.textBanner}>
        <Typography variant="h1" weight="bold" color="white" className={styles.title}>
          Архитектура со смыслом
        </Typography>
        
        <div className={styles.line}></div> 
        
        <Typography variant="bodyM" color="white" className={styles.subtitle}>
          Архитектурная студия АЙА
        </Typography>
        
        <CustomButton buttonStyles={["wideButton"]} text={"Оставить заявку"} onClick={openModal}/>
      </div>
      <div className={styles.whatsapp_icon}>
        <a
            target={"_blank"}
          href="https://wa.me/+996706882170"
        >
          <WhatsappIconMain />
        </a>
      </div>
        {isOpen? (<RegModal closeModal={closeModal} isOpen={isOpen}/>) : null}

    </div>
  );
};

export default MainBanner;

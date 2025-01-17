import styles from "modules/HomePageModules/MainBanner/MainBanner.module.scss";
import { WhatsappIconMain } from "assets/index.js";
import myImage from "assets/img/mainBanner.png";
import { Typography, CustomButton } from "UI/index.js";

const MainBanner = () => {
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
        
        <CustomButton buttonStyles={["wideButton"]} text={"Оставить заявку"}/>
      </div>
      <div className={styles.whatsapp_icon}>
        <a
          href="https://wa.me/+996706882170"
        >
          <WhatsappIconMain />
        </a>
      </div>
    </div>
  );
};

export default MainBanner;

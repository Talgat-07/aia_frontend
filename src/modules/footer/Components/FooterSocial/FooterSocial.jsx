import styles from "./FooterSocial.module.scss";
import {
    WhatsappIconMain,
    InstagramIconMain,
    TelegramIconMain,
    YoutubeIconMain,
    TwitterIconMain,
} from "assets/index.js";

export const FooterSocial = () => (
    <div className={styles.social}>

        <a target="_blank" href="#"><WhatsappIconMain/></a>
        <a target="_blank" href="#"><TelegramIconMain/></a>
        <a target="_blank" href="#"><InstagramIconMain/></a>
        <a target="_blank" href="#"><TwitterIconMain/></a>
        <a target="_blank" href="#"><YoutubeIconMain/></a>
    </div>
);

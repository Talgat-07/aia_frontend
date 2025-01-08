import styles from "./Footer.module.scss";
import { FooterContacts } from "modules/footer/Components/FooterContacts/FooterContacts.jsx";
import { FooterLinks } from "modules/footer/Components/FooterLinks/FooterLinks.jsx";
import { FooterHours } from "modules/footer/Components/FooterHours/FooterHours.jsx";
import { FooterSocial } from "modules/footer/Components/FooterSocial/FooterSocial.jsx";
import { GeeksProCopyright } from "modules/footer/Components/GeeksProCopyright/GeeksProCopyright.jsx";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterContacts />
                <FooterLinks />
                <FooterHours />
            </div>
            <FooterSocial />
            <GeeksProCopyright />
        </footer>
    );
};

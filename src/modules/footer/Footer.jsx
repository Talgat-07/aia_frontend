import styles from "./Footer.module.scss";
import { FooterContacts } from "./components/FooterContacts/FooterContacts.jsx";
import { FooterLinks } from "./components/FooterLinks/FooterLinks.jsx";
import { FooterHours } from "./components/FooterHours/FooterHours.jsx";
import { FooterSocial } from "./components/FooterSocial/FooterSocial.jsx";
import { GeeksProCopyright } from "./components/GeeksProCopyright/GeeksProCopyright.jsx";

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

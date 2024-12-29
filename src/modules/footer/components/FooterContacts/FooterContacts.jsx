import { Typography } from "UI/index.js";
import styles from "./FooterContacts.module.scss";
import Logo from "assets/img/logo.svg";

export const FooterContacts = () => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={Logo} alt="Логотип"/>
        </div>
        <div className={styles.contacts}>

            <Typography variant="bodyL" weight="medium" color="white">
                Телефон:
            </Typography>
            <div className={styles.contacts_phone}>
                <Typography variant="bodyS" weight="light" color="white" className={styles.phoneNumber}>
                    +996700700700
                </Typography>
                <Typography variant="bodyS" weight="light" color="white" className={styles.phoneNumber}>
                    +996700700700
                </Typography>
            </div>

        </div>
    </div>

);

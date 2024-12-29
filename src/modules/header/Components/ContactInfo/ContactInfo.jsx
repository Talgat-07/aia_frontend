import {Typography} from "UI/index.js";
import styles from "./ContactInfo.module.scss"

export const ContactInfo = () => {
    return (
        <div className={styles.ContactInfo}>
            <Typography variant="bodyS" color='white' lineHeight="lineXl">
            +996020373712
            </Typography>
        </div>
    );
};


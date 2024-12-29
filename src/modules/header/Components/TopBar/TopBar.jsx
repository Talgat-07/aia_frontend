
import {ButtonLanguage, ContactInfo} from "UI/index.js";
import styles from './TopBar.module.scss'

 export const TopBar = () => {
    return (
        <div className={styles.TopBar_Container}>
            <ButtonLanguage/>
            <ContactInfo/>
        </div>
    );
};

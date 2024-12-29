
import {ButtonLanguage} from "UI/index.js";
import {ContactInfo} from "modules/header/Components/ContactInfo/ContactInfo.jsx";
import styles from './TopBar.module.scss'

 export const TopBar = () => {
    return (
        <div className={styles.TopBar_Container}>
            <ButtonLanguage/>
            <ContactInfo/>
        </div>
    );
};

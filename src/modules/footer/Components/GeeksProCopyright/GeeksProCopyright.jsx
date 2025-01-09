import React from 'react';
import styles from './GeeksProCopyright.module.scss'
import {GeeksProIcon} from "assets/index.js";

export const GeeksProCopyright = () => {
    return (
        <div className={styles.copyright}>
            <a href="https://geeks.kg/geeks-pro" target="_blank" className={styles.copyright_name}>
                Made By GeeksPro
            </a>
            <GeeksProIcon/>


        </div>
    );
};


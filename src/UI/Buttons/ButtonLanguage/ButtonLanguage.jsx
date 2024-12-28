import  { useState } from 'react';
import styles from './ButtonLanguage.module.scss';
import { Typography } from "UI/index.js";

export const ButtonLanguage = () => {
    const [activeLanguage, setActiveLanguage] = useState('Русский');

    const languages = ['Русский', 'English', 'Кыргыз'];

    return (
        <div className={styles.languageSwitcher}>
            {languages.map((language) => (
                <button
                    key={language}
                    className={
                        language === activeLanguage
                            ? `${styles.languageSwitcher__buttons} ${styles.languageSwitcher__buttonsActive}`
                            : styles.languageSwitcher__buttons
                    }
                    onClick={() => setActiveLanguage(language)}
                >
                    <Typography variant="bodyS" color="white" weight="regular" lineHeight="linel">
                        {language}
                    </Typography>
                </button>
            ))}
        </div>
    );
};

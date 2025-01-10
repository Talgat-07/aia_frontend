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
                            ? `${styles.languageButton} ${styles.languageButtonActive}`
                            : styles.languageSwitcher__buttons
                    }
                    onClick={() => setActiveLanguage(language)}
                >
                    <Typography variant="bodyS" color="white" weight="regular" lineHeight="linel">
                        {languages}
                    </Typography>
                </button>
            ))}
        </div>
    );
};

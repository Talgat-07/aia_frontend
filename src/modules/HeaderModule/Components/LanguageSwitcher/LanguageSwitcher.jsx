import { useState } from 'react';
import { CustomButton, Typography } from 'UI/index';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import {useMediaQuery} from "utils/hooks/useMediaQuery.js";

export const LanguageSwitcher = () => {
    const [activeLanguage, setActiveLanguage] = useState('Русский');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 480px)');

    const languages = ['Русский', 'English', 'Кыргыз'];

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className={styles.languageSwitcher}>
            {isMobile ? (
                <div className={styles.dropdownContainer}>
                    <button className={styles.dropdownButton} onClick={toggleDropdown}>
                        <Typography variant="bodyS" color="white" weight="regular">
                            {activeLanguage}
                        </Typography>
                    </button>
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            {languages.map((language) => (
                                <li
                                    key={language}
                                    className={
                                        language === activeLanguage
                                            ? styles.activeDropdownItem
                                            : styles.dropdownItem
                                    }
                                    onClick={() => {
                                        setActiveLanguage(language);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {language}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                languages.map((language) => (
                    <CustomButton
                        key={language}
                        buttonStyles={
                            language === activeLanguage
                                ? 'languageButtonActive'
                                : 'languageButton'
                        }
                        onClick={() => setActiveLanguage(language)}
                        text={
                            <Typography
                                variant="bodyS"
                                color="white"
                                weight="regular"
                                lineHeight="linel"
                            >
                                {language}
                            </Typography>
                        }
                    />
                ))
            )}
        </div>
    );
};

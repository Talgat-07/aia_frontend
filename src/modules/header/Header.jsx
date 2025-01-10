import 'UI/typography/Typography.module.scss'
import styles from './Header.module.scss'
import Logo from "assets/img/logo.svg";
import {BurgerMenu} from "modules/header/Components/BurgerMenu/BurgerMenu.jsx";
import {Typography, CustomButton} from "UI/index.js";
import {useState} from "react";

export const Header =  () => {
    const [activeLanguage, setActiveLanguage] = useState('Русский');

    const languages = ['Русский', 'English', 'Кыргыз'];

    return (
        <header className={styles.header}>
            <div className={styles.TopBar_Container}>
                <div className={styles.languageSwitcher}>
                    {languages.map((language) => (

                        <CustomButton
                                key={language}
                                buttonStyles={language === activeLanguage ? 'languageButtonActive' : 'languageButton'}
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
                    ))}


                </div>
                <div className={styles.ContactInfo}>
                    <Typography variant="bodyS" color='white' lineHeight="lineXl">
                        +996020373712
                    </Typography>
                </div>
            </div>
            <div className={styles.BottomBar}>
                <img src={Logo} alt="logo"/>
                <BurgerMenu/>

            </div>
        </header>
    );
};


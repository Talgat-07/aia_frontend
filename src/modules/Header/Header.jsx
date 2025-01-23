import 'UI/Typography/Typography.module.scss'
import styles from './Header.module.scss'
import Logo from "assets/img/logo.svg";
import {BurgerMenu} from "modules/Header/Components/BurgerMenu/BurgerMenu.jsx";
import {Typography, CustomButton} from "UI/index.js";
import {useState} from "react";
import {useModal} from "utils/hooks/useModal.js";
import {RegModal} from "modules/User/Components/RegModal/RegModal.jsx";
import {Link} from "react-router-dom";

export const Header =  () => {
    const {isOpen, openModal, closeModal,setIsOpen} = useModal();
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
                <Link to="/">
                    <img src={Logo} alt="logo"/>

                </Link>
                <div className={styles.right_bottom_bar}>
                    <CustomButton
                    buttonStyles={"customButtonBrown"}
                    onClick={openModal}
                    text={
                        <Typography variant="bodyS" color="white">
                            Оставить Заявку
                        </Typography>
                    }
                    />
                    <BurgerMenu/>
                </div>


            </div>
            {isOpen? (
                <RegModal closeModal={closeModal} isOpen={isOpen} setIsOpen={setIsOpen}/>) : null}
        </header>

    );
};


import { useState, useRef } from "react";
import styles from "./BurgerMenu.module.scss";
import { CustomButton, Typography} from "UI/index.js";
import Logo from 'assets/img/logo.svg';
import {InstagramIconMain, TelegramIconMain, YoutubeIconMain, WhatsappIconMain, LoopInput} from "assets/index.js";
import { useOutsideClick } from "utils/hooks/useClickOutside.js";

export const BurgerMenu = () => {
    const [hasContent, setHasContent] = useState(false);

    const handleInputChange = (e) => {
        setHasContent(e.target.value.trim().length > 0);
    };

    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const [activeLanguage, setActiveLanguage] = useState('Русский');

    const languages = ['Русский', 'English', 'Кыргыз'];
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    const socialLinks = [
        { href: "https://instagram.com", label: "Instagram", Icon: InstagramIconMain },
        { href: "https://whatsapp.com", label: "WhatsApp", Icon: WhatsappIconMain },
        { href: "https://telegram.org", label: "Telegram", Icon: TelegramIconMain },
        { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIconMain },
    ];

    useOutsideClick(modalRef, () => setIsOpen(false), isOpen);

    return (
        <div className={styles.burgerContainer}>
            <button
                onClick={toggleMenu}
                className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
                aria-label="Toggle menu"
            >
                <div></div>
                <div></div>
                <div></div>
            </button>

            {isOpen && (
                <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ""}`}>
                    <div ref={modalRef} className={`${styles.modalContent} ${isOpen ? styles.open : ""}`}>
                        <div className={styles.topModal}>
                            <a href="/">
                                <img src={Logo} alt="mainlogo"/>
                            </a>

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


                            </div>                            <button
                                onClick={toggleMenu}
                                className={styles.closeIcon}
                                aria-label="Close menu"
                            >
                                <div></div>
                                <div></div>
                            </button>
                        </div>
                        <hr/>
                        <div className={styles.searchBox}>
                            <form action="" className={styles.search}>
                                <input
                                    type="text"
                                    placeholder="Поиск"
                                    className={`${styles.search_input} ${hasContent ? styles.filled : ""}`}
                                    onChange={handleInputChange}
                                />
                                <span
                                    className={`${styles.search_icon} ${hasContent ? styles.icon_fixed : ""}`}
                                >
                    <LoopInput/>
                </span>
                            </form>
                        </div>

                        <div className={styles.socialIcons}>
                            {socialLinks.map(({href, label, Icon}) => (
                                <a key={label} target="_blank" href={href} aria-label={label} rel="noopener noreferrer">
                                    <Icon/>
                                </a>
                            ))}
                        </div>
                        <nav className={styles.menu}>
                            <ul>
                                <li>
                                    <a href="/">Главная страница</a>
                                </li>
                                <li>
                                    <a href="/about">О студии</a>
                                </li>
                                <li>
                                    <a href="/projects">Реализованные проекты</a>
                                </li>
                                <li>
                                    <a href="/architecture">Архитектурное проектирование</a>
                                    <ul>
                                        <li>
                                            <a href="/architecture/private">Частные дома</a>
                                        </li>
                                        <li>
                                            <a href="/architecture/public">Общественные здания</a>
                                        </li>
                                        <li>
                                            <a href="/architecture/blocks">Поселки и кварталы</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/interior">Дизайн интерьера</a>
                                    <ul>
                                        <li>
                                            <a href="/interior/houses">Дизайн домов</a>
                                        </li>
                                        <li>
                                            <a href="/interior/apartments">Дизайн квартир</a>
                                        </li>
                                        <li>
                                            <a href="/interior/public">Дизайн общественных пространств</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/pricing">Стоимость и этапы строительства</a>
                                </li>
                                <li>
                                    <a href="/blog">Блог</a>
                                </li>
                                <li>
                                    <a href="/contacts">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

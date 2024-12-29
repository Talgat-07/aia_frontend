import { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import {ButtonLanguage, SearchBar} from "UI/index.js";
import Logo from 'assets/img/logo.svg';
import { InstagramIconMain, TelegramIconMain, YoutubeIconMain, WhatsappIconMain } from "assets/index.js";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

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
                    <div className={`${styles.modalContent} ${isOpen ? styles.open : ""}`}>
                        <div className={styles.topModal}>
                            <a href="/">
                                <img src={Logo} alt="mainlogo"/>
                            </a>
                            <ButtonLanguage/>
                            <button
                                onClick={toggleMenu}
                                className={styles.closeIcon}
                                aria-label="Close menu"
                            >
                                <div></div>
                                <div></div>
                            </button>
                        </div>
                        <hr />
                        <div className={styles.searchBox}>
                            <SearchBar/>
                        </div>

                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Instagram">
                                <InstagramIconMain />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <WhatsappIconMain />
                            </a>
                            <a href="#" aria-label="Telegram">
                                <TelegramIconMain />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <YoutubeIconMain />
                            </a>
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

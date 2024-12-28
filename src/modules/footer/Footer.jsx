import React from "react";
import styles from "./Footer.module.scss";
import { Typography } from "UI/index.js";
import Logo from "assets/img/logo.svg";
import { WhatsappIconMain, InstagramIconMain, TelegramIconMain, YoutubeIconMain, TwitterIconMain } from "assets/index.js";
import { GeeksProCopyright } from "./components/GeeksProCopyright/GeeksProCopyright.jsx";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.informationLogo}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Логотип" />
                    </div>
                    <div className={styles.contacts}>
                        <Typography variant="bodyL" weight="medium" color="white">
                            Телефон:
                        </Typography>
                        <Typography variant="bodyS" weight="light" color="white" className={styles.phoneNumber}>
                            +996700700700
                        </Typography>
                        <Typography variant="bodyS" weight="light" color="white" className={styles.phoneNumber}>
                            +996700700700
                        </Typography>
                    </div>
                </div>

                <nav className={styles.links}>
                    <ul>
                        <li>
                            <a href="#">О студии</a>
                        </li>
                        <li>
                            <a href="#">Реализованные проекты</a>
                        </li>
                        <li>
                            <a href="#">Архитектурное проектирование</a>
                        </li>
                        <li>
                            <a href="#">Дизайн интерьера</a>
                        </li>
                        <li>
                            <a href="#">Стоимость и этапы строительства</a>
                        </li>
                        <li>
                            <a href="#">Блог</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.hours}>
                    <Typography variant="bodyL" weight="regular" color="white">
                        Время Работы:
                    </Typography>
                    <Typography variant="bodyS" weight="light" color="white">
                        Пн-Пт: 10:00-18:00
                    </Typography>

                    <Typography variant="bodyS" weight="light" color="white">
                        Сб: 10:00-15:00
                    </Typography>

                    <Typography variant="bodyS" weight="light" color="white">
                        Вс: выходной
                    </Typography>

                    <Typography variant="bodyL" weight="regular" color="white">
                        Адрес:
                    </Typography>

                    <a href="">г. Бишкек, ул. Боконбаева 204, 6 этаж</a>
                </div>
            </div>

            <div className={styles.social}>
                <a href="#">
                    <WhatsappIconMain />
                </a>
                <a href="#">
                    <TelegramIconMain />
                </a>
                <a href="#">
                    <InstagramIconMain />
                </a>
                <a href="#">
                    <TwitterIconMain />
                </a>
                <a href="#">
                    <YoutubeIconMain />
                </a>
            </div>
            <GeeksProCopyright />
        </footer>
    );
};

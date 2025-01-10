import styles from "./Footer.module.scss";
import { FooterContacts } from "./Components/FooterContacts/FooterContacts.jsx";
import {InstagramIconMain,WhatsappIconMain,TelegramIconMain,YoutubeIconMain,GeeksProIcon} from "assets/index.js"
import { path } from "utils/constants/constants.js";
import {Link} from "react-router-dom";
import {Typography} from "UI/typography/Typography.jsx";
import React from "react";


export const Footer = () => {
    const socialLinks = [
        { href: "https://instagram.com", label: "Instagram", Icon: InstagramIconMain },
        { href: "https://whatsapp.com", label: "WhatsApp", Icon: WhatsappIconMain },
        { href: "https://telegram.org", label: "Telegram", Icon: TelegramIconMain },
        { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIconMain },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <FooterContacts/>
                <nav className={styles.links}>
                    <ul>
                        <li>
                            <Link to={path.aboutUs}>О студии</Link>
                        </li>
                        <li>
                            <Link to={path.realizeProjects}>Реализованные проекты</Link>
                        </li>
                        <li>
                            <Link to={path.architectureProjects}>Архитектурное проектирование</Link>

                        </li>
                        <li>
                            <Link to={path.interiorDesign}>Дизайн интерьера</Link>
                        </li>
                        <li>
                            <Link to={path.costAndStages}>Стоимость и этапы строительства</Link>
                        </li>
                        <li>
                            <Link to={path.blog}>Блог</Link>
                        </li>
                        <li>
                            <Link to={path.contacts}>Контакты</Link>
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
                    <div>
                        <Typography variant="bodyL" weight="regular" color="white">
                            Адрес:
                        </Typography>
                        <a href="">г. Бишкек, ул. Боконбаева 204, 6 этаж</a>
                    </div>

                </div>
            </div>
            <div className={styles.social}>
                {socialLinks.map(({href, label, Icon}) => (
                    <a key={label} target="_blank" href={href} aria-label={label} rel="noopener noreferrer">
                        <Icon/>
                    </a>
                ))}
            </div>
            <div className={styles.copyright}>
                <a href="https://geeks.kg/geeks-pro" target="_blank" className={styles.copyright_name}>
                    Made By GeeksPro
                </a>
                <GeeksProIcon/>
            </div>
        </footer>
    );
};

import styles from "./FooterLinks.module.scss";

export const FooterLinks = () => (
    <nav className={styles.links}>
        <ul>
            <li><a href="#">О студии</a></li>
            <li><a href="#">Реализованные проекты</a></li>
            <li><a href="#">Архитектурное проектирование</a></li>
            <li><a href="#">Дизайн интерьера</a></li>
            <li><a href="#">Стоимость и этапы строительства</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </nav>
);

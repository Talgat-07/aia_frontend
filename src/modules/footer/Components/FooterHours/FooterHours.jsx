import { Typography } from "UI/index.js";
import styles from "./FooterHours.module.scss";

export const FooterHours = () => (
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
);

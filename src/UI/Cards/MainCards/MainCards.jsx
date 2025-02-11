import { Typography } from "UI";
import styles from "./MainCards.module.scss";

export const MainCards = ({ image, title, text, width }) => {
    return (
        <div
            className={styles.card}
            style={{ width: width || "calc(33.33% - 20px)", maxWidth: "410px" }}
        >
            <img src={image} alt={title} className={styles.card_image} />
            <Typography variant="bodyL" weight="semibold" className={styles.card_title}>
                {title}
            </Typography>
            <Typography variant="bodyM" className={styles.card_text}>{text}</Typography>
        </div>
    );
};

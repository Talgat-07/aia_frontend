import { Typography } from "UI";
import styles from "./MainCards.module.scss";

export const MainCards = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card_image} />
      <Typography variant="bodyL" weight="semibold" className={styles.card_title}>{title}</Typography>
      <Typography variant="bodyM" className={styles.card_text}>{text}</Typography>
    </div>
  );
};


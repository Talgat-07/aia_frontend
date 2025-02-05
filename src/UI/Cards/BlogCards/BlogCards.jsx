import { Typography } from 'UI';
import { Link } from 'react-router-dom';
import styles from './BlogCards.module.scss';
import { RightIcon } from 'assets/index';

export const BlogCards = ({ image, title, text, date, link }) => {
   return (
      <Link to={link} className={styles.cardContainer}>
         <div className={styles.card_image}>
            <img src={image} alt={title} />
         </div>
         <div className={styles.card}>
            <Typography variant="bodyS" className={styles.card_date}>
               {date}
            </Typography>
            <Typography
               variant="bodyL"
               weight="semibold"
               className={styles.card_title}
            >
               {title}
            </Typography>
            <Typography variant="bodyM" className={styles.card_text}>
               {text}
            </Typography>
            <Link to={link} className={styles.card_link}>
               Читать публикацию
               <RightIcon />
            </Link>
         </div>
      </Link>
   );
};

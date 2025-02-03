import styles from './PeopleCard.module.scss';
import {Typography} from "UI/index.js";


export const PeopleCard = ({ title, description, image, isActive}) => {

    return (
        <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <img className={styles.image} src={image} alt=""/>
            <div className={styles.card_information}>
                <Typography variant="bodyL" weight="semibold">{title}</Typography>
                <Typography variant="bodyM" weight="regular">{description}</Typography>
            </div>
        </div>
    );
};


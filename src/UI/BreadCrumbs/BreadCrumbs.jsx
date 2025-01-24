import {useNavigate} from "react-router-dom";
import styles from './BreadCrumbs.module.scss'


export const BreadCrumbs = ({items}) => {
    const navigate = useNavigate()


    return (
        <ul className={styles.navigation}>
            { items.map((item, index) => (
                <li className={styles.navigation__item} key={index} onClick={() => navigate(item.link)}>
                    {item.label}
                </li>
            ))}
        </ul>
    );
};


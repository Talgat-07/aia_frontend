import {BurgerMenu} from '../BurgerMenu/BurgerMenu.jsx';
import styles from "./BottomBar.module.scss"
import Logo from 'assets/img/logo.svg'
export const BottomBar = () => {
    return (
        <div className={styles.BottomBar}>
            <img src={Logo} alt="logo" />
            <BurgerMenu/>
        </div>
    );
};

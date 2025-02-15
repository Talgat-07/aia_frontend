import { Link, useLocation } from 'react-router-dom';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import { NavLinks } from 'utils/constants/constants.js';

export const BurgerMenuNav = ({ closeMenu }) => {
    const location = useLocation();

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <nav className={styles.menu}>
            <ul>
                {NavLinks.map((link) => {
                    const isParentActive = location.pathname === link.path;

                    return (
                        <li key={link.path}>
                            <Link
                                to={isParentActive ? "#" : link.path}
                                onClick={isParentActive ? (e) => e.preventDefault() : handleLinkClick}
                                className={isParentActive ? styles.activeLink : styles.Link}
                            >
                                {link.title}
                            </Link>
                            {link.children && (
                                <ul className={styles.childMenu}>
                                    {link.children.map((child) => {
                                        const isChildActive = location.pathname === child.path;

                                        return (
                                            <li key={child.path}>
                                                <Link
                                                    to={isChildActive ? "#" : child.path}
                                                    onClick={isChildActive ? (e) => e.preventDefault() : handleLinkClick}
                                                    className={isChildActive ? styles.activeChildLink : ''}
                                                >
                                                    {child.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

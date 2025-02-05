import { useState, useRef, useEffect } from 'react';
import styles from './BurgerMenu.module.scss';
import Logo from 'assets/img/logo.svg';
import { LoopInput } from 'assets/index.js';
import { useOutsideClick } from 'utils/hooks/useClickOutside.js';
import { path } from 'utils/constants/constants.js';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { BurgerMenuNav, LanguageSwitcher } from '..';


export const BurgerMenu = () => {
    const [hasContent, setHasContent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useOutsideClick(modalRef, () => closeMenu(), isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(styles.no_scroll);
        } else {
            document.body.classList.remove(styles.no_scroll);
        }

        return () => document.body.classList.remove(styles.no_scroll);
    }, [isOpen]);

    const handleInputChange = (e) => {
        setHasContent(e.target.value.trim().length > 0);
    };

    return (
        <div className={`${styles.burgerContainer} ${isOpen ? styles.open : ''}`}>
            <button
                onClick={toggleMenu}
                className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
                aria-label="Toggle menu"
            >
                <div />
                <div />
                <div />
            </button>

            <div ref={modalRef} className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
                <div className={styles.modalContent}>
                    <div className={styles.topModal}>
                        <Link to={path.home} onClick={closeMenu}>
                            <img src={Logo} alt="mainlogo" />
                        </Link>
                        <LanguageSwitcher />
                    </div>
                    <hr />
                    <div className={styles.searchBox}>
                        <form action="" className={styles.search}>
                            <input
                                type="text"
                                placeholder="Поиск"
                                className={`${styles.search_input} ${hasContent ? styles.filled : ''}`}
                                onChange={handleInputChange}
                            />
                            <span
                                className={`${styles.search_icon} ${hasContent ? styles.icon_fixed : ''}`}
                            >
                        <LoopInput />
                     </span>
                        </form>
                    </div>
                    <SocialLinks />
                    <BurgerMenuNav closeMenu={closeMenu} />
                </div>
            </div>
        </div>
    );
};

import { Link } from 'react-router-dom';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import { NavLinks } from 'utils/constants/constants.js';
import { useRef } from 'react';
import { useOutsideClick } from 'utils/hooks/useClickOutside';

export const BurgerMenuNav = ({ closeMenu }) => {
   const burgerMenuRef = useRef(null);

   const handleLinkClick = () => {
      closeMenu();
   };

   useOutsideClick(burgerMenuRef, handleLinkClick, closeMenu);

   return (
      <nav className={styles.menu}>
         <ul ref={burgerMenuRef}>
            {NavLinks.map((link) => (
               <li key={link.path}>
                  <Link to={link.path} onClick={handleLinkClick}>
                     {link.title}
                  </Link>
                  {link.children && (
                     <ul>
                        {link.children.map((child) => (
                           <li key={child.path}>
                              <Link to={child.path} onClick={handleLinkClick}>
                                 {child.title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};

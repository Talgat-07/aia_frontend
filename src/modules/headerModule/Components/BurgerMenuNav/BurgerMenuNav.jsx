import { Link } from 'react-router-dom';
import styles from '../BurgerMenu/BurgerMenu.module.scss';
import { NavLinks } from 'utils/constants/constants.js';

export const BurgerMenuNav = ({ closeMenu }) => {
   const handleLinkClick = () => {
      closeMenu();
   };

   return (
      <nav className={styles.menu}>
         <ul>
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

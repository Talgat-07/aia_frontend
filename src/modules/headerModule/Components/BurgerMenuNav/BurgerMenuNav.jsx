import { Link } from 'react-router-dom';
import { navLinks } from 'utils/constants/navLinks';
import styles from '../BurgerMenu/BurgerMenu.module.scss';

export const BurgerMenuNav = () => {
   return (
      <>
         <nav className={styles.menu}>
            <ul>
               {navLinks.map((link) => (
                  <li key={link.path}>
                     <Link to={link.path}>{link.title}</Link>
                     {link.children && (
                        <ul>
                           {link.children.map((child) => (
                              <li key={child.path}>
                                 <Link to={child.path}>{child.title}</Link>
                              </li>
                           ))}
                        </ul>
                     )}
                  </li>
               ))}
            </ul>
         </nav>
      </>
   );
};

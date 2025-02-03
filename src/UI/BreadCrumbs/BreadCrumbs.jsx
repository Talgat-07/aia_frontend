import { useNavigate } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';
import { ArrowRightIcon } from 'assets/icons/ArrowRightIcon';
import React from 'react';

export const BreadCrumbs = ({ items, linkColor = "white", activeColor = "#828282" }) => {
   const navigate = useNavigate();


   return (
      <ul className={styles.navigation}>
         {items.map((item, index) => (
            <React.Fragment key={index}>
               {index < items.length - 1 ? (
                  <>
                     <li
                        className={styles.navigation__item}
                        onClick={() => navigate(item.link)}
                        style={{ color: linkColor }}
                     >
                        {item.label}
                     </li>
                     <ArrowRightIcon />
                  </>
               ) : (
                  <div style={{ color: activeColor }}>{item.label}</div>
               )}
            </React.Fragment>
         ))}
      </ul>
   );
};
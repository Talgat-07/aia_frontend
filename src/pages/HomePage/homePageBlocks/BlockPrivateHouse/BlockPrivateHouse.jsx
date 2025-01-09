import { useState, useRef } from 'react';
import { CustomButton } from 'UI/buttons/CustomButton/CustomButton.jsx';
import styles from './BlockPrivateHouse.module.scss';

export const BlockPrivateHouse = () => {

   const [expanded, setExpanded] = useState(false);
   const textRef = useRef(null);

   const handleToggle = () => {
      if (textRef.current) {
         if (expanded) {
            textRef.current.scrollTo({ top: 0, behavior: 'smooth' });
         } else {
            textRef.current.scrollTo({ top: textRef.current.scrollHeight, behavior: 'smooth' });
         }
      }
      setExpanded(!expanded);
   };

   return (
      <div className={styles.blockPrivateHouse}>
         <div className={styles.container}>
            <div className={styles.blockPrivateHouse__title}>
               <h2>Проектирование частных домов</h2>
               <div className={styles.shortLine}>

               </div>
            </div>

            <div className={styles.blockPrivateHouse__lowerBlock}>
               <div>
                  <p ref={textRef}
                     className={`${styles.textContent} ${expanded ? styles.expanded : ''}`}
                  >
                     Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.
                     Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies
                     ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor eu ut
                     diam tincidunt.Lorem ipsum dolor sit amet consectetur. Mi tristique
                     risus accumsan morbi. Sed dipiscing libero vel.Lorem ipsum dolor sit amet
                     consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim
                     justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu.
                     Feugiat arcu turpis interdum tortor eu ut diam tincidunt.Lorem ipsum dolor sit ametdiam
                     tincidunt.Lorem
                  </p>
                  <CustomButton buttonStyles={"readMoreButton"} onClick={handleToggle}
                  />
                  <div className={styles.blockPrivateHouse__buttonPosition}>
                     <CustomButton buttonStyles="customButtonBrown" text={'Посмотреть проекты'} />
                  </div>
               </div>
               <div className={styles.blockPrivateHouseImg}>
                  <img
                     src="https://forum.cs-cart.ru/uploads/default/original/2X/1/114e3184a8bfbd17c5d2d9b15cc3442767e0513b.jpg"
                     alt="21" />
               </div>
            </div>
            <div className={styles.wideLine}>

            </div>
         </div>
      </div>
   )
}
import { CustomButton } from 'UI/buttons/CustomButton/CustomButton.jsx';
import styles from './BlockIndiProekt.module.scss';

export const BlockIndiProekt = () => {

   return (
      <div className={`${styles.container} ${styles.blockIndiProekt} `}>
         <div className={styles.blockIndiProekt__title}>
            <h2>Индивидуальное проектирование дома</h2>
            <div className={styles.shortLine}>

            </div>
         </div>

         <div className={styles.blockIndiProekt__lowerBlock}>
            <div className={styles.indiProektImg}>
               <img
                  src="https://forum.cs-cart.ru/uploads/default/original/2X/1/114e3184a8bfbd17c5d2d9b15cc3442767e0513b.jpg"
                  alt="21" />
            </div>
            <div>
               <p>
                  Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.
                  Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies
                  ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortor
                  eu ut diam tincidunt.Lorem ipsum dolor sit amet
               </p>
               <CustomButton buttonStyles='customButtonBrown' text={'Заказать индивидуальный проект'} />
            </div>
         </div>
         <div className={styles.wideLine}>

         </div>
      </div>
   )
}
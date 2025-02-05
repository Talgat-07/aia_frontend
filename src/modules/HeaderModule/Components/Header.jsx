import 'UI/Typography/Typography.module.scss';
import styles from './Header.module.scss';
import Logo from 'assets/img/logo.svg';
import { Typography, CustomButton } from 'UI/index.js';
import { useModal } from 'utils/hooks/useModal.js';
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '.';
import { path } from 'utils/constants/constants';

export const Header = () => {
   const { isOpen, openModal, closeModal, setIsOpen } = useModal();

   return (
      <header className={styles.header}>
         {/* <div className={styles.TopBar_Container}>
            <div className={styles.languageSwitcher} />
         </div> */}
         <div className={styles.BottomBar}>
            <div className={styles.logoAndContact}>
               <Link to={path.home}>
                  <img src={Logo} alt="logo" />
               </Link>
               <div className={styles.ContactInfo}>
                  <Typography variant="bodyS" color="white" lineHeight="lineXl">
                     <a className={styles.phone} href="tel:+996020373712">+996020373712</a>
                  </Typography>
               </div>
            </div>
            <div className={styles.right_bottom_bar}>
               <CustomButton
                  buttonStyles={'customButtonBrown'}
                  onClick={openModal}
                  text={
                     <Typography variant="bodyS" color="white">
                        Оставить заявку
                     </Typography>
                  }
               />
               <BurgerMenu/>
            </div>
         </div>
         {isOpen ? (
            <RegModal
               closeModal={closeModal}
               isOpen={isOpen}
               setIsOpen={setIsOpen}
            />
         ) : null}
      </header>
   );
};

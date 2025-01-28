import {Heading,Typography,CustomButton} from 'UI/index.js';
import styles from './NotFoundModule.module.scss'
import Error from 'assets/img/ErrorPage.png'
import {useNavigate} from 'react-router-dom'

export const NotFoundModule = () => {
   const navigate = useNavigate();

   const handleNavigateHome = () => {
      navigate('/');
   };
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <div className={styles.content__left}>
               <Heading text={"Что-то пошло не так"} color={"black"} align={"left"} />
               <Typography variant="bodyM">Давайте попробуем вместе это исправить! Попробуйте вернуться на главную
                  страницу и найти необходимую информацию там!</Typography>
               <CustomButton onClick={handleNavigateHome}  buttonStyles={"customButtonBrown"} text={"На главную"} />
            </div>

            <div className={styles.content_right}>
               <img src={Error} alt="error_page" />
            </div>
         </div>


      </div>
   );
};


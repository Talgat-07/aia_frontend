import { Container } from 'UI/index';
import styles from '../../ApartmentDesignModule/components/ApartmentDesign.module.scss';
import { MainCards } from 'UI/MainCards/MainCards';

export const ApartmentDesign = () => {
   const cardsData = [
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
         title: 'Заголовок',
         text: 'Коттеджные поселки',
      },
   ];
   return (
      <>
            <div className={styles.apartmentDesignContainer}>
               <div className={styles.cardContainer}>
                  {cardsData.map((card, index) => (
                     <MainCards
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                     />
                  ))}
               </div>
            </div>
      </>
   );
};

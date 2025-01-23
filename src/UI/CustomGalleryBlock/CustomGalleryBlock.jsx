import { MainCards } from 'UI/MainCards/MainCards.jsx';
import style from './CustomGalleryBlock.module.scss';

export const CustomGalleryBlock = ({cardsData}) => {

   return(

      <div className={style.galleryBlock}>
         {
            cardsData.map((card, index) => (
               <MainCards
                  key={index}
                  image={card.img}
                  title={card.title}
                  text={card.text}
               />
            ))
         }
      </div>
   )
}
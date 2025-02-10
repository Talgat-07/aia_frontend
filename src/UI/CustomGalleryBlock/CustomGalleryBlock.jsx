import { MainCards } from 'UI/Cards/MainCards/MainCards.jsx';
import style from './CustomGalleryBlock.module.scss';

export const CustomGalleryBlock = ({cardsData}) => {

   return(
      <div>
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
      </div>
   )
}
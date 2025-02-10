import { MainCards } from 'UI/Cards/MainCards/MainCards.jsx';
import style from './CustomGalleryBlock.module.scss';
import { ContentContainer } from 'UI/Container/Container.jsx';

export const CustomGalleryBlock = ({cardsData}) => {

   return(
      <ContentContainer>
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
      </ContentContainer>
   )
}
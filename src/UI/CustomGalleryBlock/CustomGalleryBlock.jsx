import { MainCards } from 'UI/Cards/MainCards/MainCards.jsx';
import style from './CustomGalleryBlock.module.scss';
import {Container} from "UI/Container/Container.jsx";

export const CustomGalleryBlock = ({cardsData}) => {

   return(
      <Container>
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
      </Container>
   )
}
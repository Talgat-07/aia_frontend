import {BlogCards, Container} from '..';
import styles from './CustomBlogGallery.module.scss';

export const CustomBlogGallery = ({ cardsData }) => {
   return (
      <Container>
         <div className={styles.galleryBlock}>
            {cardsData.map((card, index) => (
               <BlogCards
                  key={index}
                  image={card.img}
                  title={card.title}
                  text={card.text}
                  date={card.date}
                  link={card.link}
               />
            ))}
         </div>
      </Container>
   );
};

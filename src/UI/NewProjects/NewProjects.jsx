import { MainCards, Heading, ContentContainer } from 'UI/index.js';
import styles from './NewProjects.module.scss';
import { Link } from 'react-router-dom';

export const NewProjects = ({config = {}}) => {


   return (
      <ContentContainer>
      <div className={styles.container}>
         <Heading text="Новые проекты" color="black" />
         <div className={styles.content}>
            {config.cards.map((card, index) => (
               <Link to={card.link} key={index}>
                  <MainCards
                     image={card.image}
                     title={card.title}
                     text={card.text}
                  />
               </Link>

            ))}
         </div>
      </div>
      </ContentContainer>
   );
};

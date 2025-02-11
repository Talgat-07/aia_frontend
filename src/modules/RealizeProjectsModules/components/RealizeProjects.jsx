import React, { useState } from 'react';
import { Container, CustomButton, Heading } from 'UI/index';
import styles from './RealizeProjects.module.scss';
import { MainCards } from 'UI/Cards/MainCards/MainCards';
import image from 'assets/img/RealProjects.png'

export const RealizeProjects = () => {
   const [filter, setFilter] = useState('Все');
   const [showAllByYear, setShowAllByYear] = useState({});
   const years = [
      {
         year: '2024',
         cards: [
            {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Архитектура',
            }, {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            },{
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            },
         ],
      },
      {
         year: '2023',
         cards: [
            {
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            },{
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            },{
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            },{
               image: image,
               title: 'Архитектура 2024',
               text: 'Коттеджные поселки 2024',
               category: 'Интерьер',
            }, {
            image: image,
            title: 'Архитектура 2024',
            text: 'Коттеджные поселки 2024',
            category: 'Архитектура',
         },
         ],
      },
   ];

   const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
   };

   const toggleShowAll = (year) => {
      setShowAllByYear((prevState) => ({
         ...prevState,
         [year]: !prevState[year],
      }));
   };

   return (
      <Container>
         <div className={styles.blockButton}>
            <button
               className={filter === 'Все' ? styles.activeButton : ''}
               onClick={() => handleFilterChange('Все')}
            >
               Все
            </button>
            <button
               className={filter === 'Архитектура' ? styles.activeButton : ''}
               onClick={() => handleFilterChange('Архитектура')}
            >
               Архитектура
            </button>
            <button
               className={filter === 'Интерьер' ? styles.activeButton : ''}
               onClick={() => handleFilterChange('Интерьер')}
            >
               Интерьер
            </button>
         </div>
         <div className={styles.content}>
            {years.map((yearData) => {
               const filteredCards = yearData.cards.filter((card) =>
                  filter === 'Все' ? true : card.category === filter
               );

               const showAll = showAllByYear[yearData.year];
               const displayedCards = showAll
                  ? filteredCards
                  : filteredCards.slice(0, 6);

               return (
                  <React.Fragment key={yearData.year}>
                     {filteredCards.length > 0 && (
                        <>
                           <Heading
                              text={yearData.year}
                              align="left"
                              color="black"
                              linkWidth={'110px'}
                              className={styles.heading}
                           />
                           <div className={styles.content_year}>
                              <div className={styles.cardContainer} >
                                 {displayedCards.map((card, cardIndex) => (
                                    <div
                                       key={`${yearData.year}-${cardIndex}`}
                                       className={styles.card}
                                       style={{ '--delay': `${cardIndex * 0.1}s` }}
                                    >
                                       <MainCards
                                          key={cardIndex}
                                          image={card.image}
                                          title={card.title}
                                          text={card.text}
                                       />
                                    </div>
                                 ))}


                              </div>
                              {filteredCards.length > 6 && (
                                 <div className={styles.button_content}>
                                    <CustomButton
                                       onClick={() => toggleShowAll(yearData.year)}
                                       text={showAll ? 'Скрыть' : 'Показать еще'}
                                       buttonStyles="customButtonAdaptive"
                                    />
                                 </div>

                              )}
                           </div>
                           <hr className={styles.divider} />
                        </>
                     )}
                  </React.Fragment>
               );
            })}
         </div>
      </Container>
   );
};

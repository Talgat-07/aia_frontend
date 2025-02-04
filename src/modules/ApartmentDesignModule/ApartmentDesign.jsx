import React, { useState } from 'react';
import { Container, CustomButton, Heading } from 'UI/index.js';
import styles from './ApartmentDesign.module.scss';
import { MainCards } from 'UI/Cards/MainCards/MainCards.jsx';

export const ApartmentDesign = () => {
   const [showAllByYear, setShowAllByYear] = useState({});

   const years = [
      { 
         year: '2023',
         cards: [
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },

            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2023',
               text: 'Коттеджные поселки 2023',
            },
         ],
      },
      {
         year: '2022',
         cards: [
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2022',
               text: 'Коттеджные поселки 2022',
            },
         ],
      },
      {
         year: '2021',
         cards: [
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2021',
               text: 'Коттеджные поселки 2021',
            },
         ],
      },
      {
         year: '2020',
         cards: [
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
            {
               image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
               title: 'Заголовок 2020',
               text: 'Коттеджные поселки 2020',
            },
         ],
      },
   ];
   const toggleShowAll = (year) => {
      setShowAllByYear((prevState) => ({
         ...prevState,
         [year]: !prevState[year],
      }));
   };
   return (
      <Container>

         <div className={styles.apartmentDesignContainer}>
            <hr/>
            {years.map((yearData) => {
               const showAll = showAllByYear[yearData.year];

               const displayedCards = showAll
                  ? yearData.cards
                  : yearData.cards.slice(0, 6);

               return (

                  <React.Fragment key={yearData.year}>
                     <Heading
                        linkWidth={'105px'}
                        text={yearData.year}
                        align="left"
                        color="black"
                     />
                     <div className={styles.yearBlock}>
                        <div className={styles.cardContainer}>
                           {displayedCards.map((card, cardIndex) => (
                              <MainCards
                                 key={`${yearData.year}-${cardIndex}`}
                                 image={card.image}
                                 title={card.title}
                                 text={card.text}
                              />
                           ))}
                        </div>
                        {yearData.cards.length > 6 && (
                           <CustomButton
                              onClick={() => toggleShowAll(yearData.year)}
                              text={showAll ? 'Скрыть' : 'Показать еще'}
                              buttonStyles="customButtonAdaptive"
                           />
                        )}
                     </div>
                     {years.indexOf(yearData) < years.length - 1 && (
                        <hr className={styles.divider} />
                     )}
                  </React.Fragment>
               );
            })}
         </div>
      </Container>
   );
};

import styles from './HouseDesign.module.scss';
import { ContentContainer, CustomButton, Heading } from 'UI/index.js';
import React, { useState, useEffect } from 'react';
import { MainCards } from 'UI/Cards/MainCards/MainCards.jsx';

export const HouseDesign = () => {
   const [animatedYears, setAnimatedYears] = useState({});
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

   const toggleShow = (year) => {
      setShowAllByYear((prev) => ({
         ...prev,
         [year]: !prev[year],
      }));
   };

   useEffect(() => {
      Object.keys(showAllByYear).forEach((year) => {
         if (showAllByYear[year]) {
            setTimeout(() => {
               setAnimatedYears((prev) => ({
                  ...prev,
                  [year]: true,
               }));
            }, 100);
         }
      });
   }, [showAllByYear]);
   return (
      <ContentContainer>
         <div className={styles.apartmentDesignContainer}>
            {years.map((yearData, index) => {
               const showAll = showAllByYear[yearData.year];

                const displayedCards = showAll
                    ? yearData.cards
                    : yearData.cards.slice(0, 6);

                return (
                    <React.Fragment key={index}>
                       {/*<div>*/}
                       <hr />
                       <Heading
                           className={styles.heading}
                           linkWidth={"105px"}
                           text={yearData.year}
                           align="left"
                           color="black"
                       />
                       <div className={styles.yearBlock}>
                          <div className={styles.cardContainer}>
                             {displayedCards.map((card, cardIndex) => (
                                 <div
                                     key={cardIndex}
                                 >
                                    <MainCards
                                        image={card.image}
                                        title={card.title}
                                        text={card.text}
                                        className={showAll && animatedYears[yearData.year] ? styles.fadeIn : ""}

                                    />
                                 </div>
                             ))}
                          </div>
                          {yearData.cards.length > 6 && (
                              <CustomButton
                                  onClick={() => toggleShow(yearData.year)}
                                  text={showAll ? "Скрыть" : "Показать еще"}
                                  buttonStyles="customButtonAdaptive"
                              />
                           )}
                        </div>
                     {index < years.length - 1 && (
                        <div className={styles.containerdivider}>
                        </div>
                     )}
                  </React.Fragment>
               );
            })}
         </div>
      </ContentContainer>
   );
};

import styles from '../../HouseDesignModule/components/HouseDesign.module.scss';
import React, { useState } from 'react';
import { Container, CustomButton, Heading, MoreProjects } from 'UI/index';
import { MainCards } from 'UI/MainCards/MainCards';
import { StartBlock } from '.';

export const HouseDesign = () => {
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

   const config = [
      {
         image: 'https://m-strana.ru/upload/resize_cache/medialibrary/148/830_830_1/krasivye-doma-foto-kottedzhey-i-primery-planirovok-2.jpg',
      },
      { subtitle: 'Наши проекты' },
      {
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis interdum tortom dolor sit amet   consectetur. Mi tristique risus.',
      },
      {
         buttons: [
            'Реализованные проекты',
            'Архитектурное проектирование',
            'Дизайн общественных пространств',
            'Дизайн домов',
         ],
      },
   ];

   return (
      <Container>
         <div className={styles.apartmentDesignContainer}>
            <StartBlock />
            {years.map((yearData, index) => {
               const [showAll, setShowAll] = useState(false);

               const toggleShow = () => {
                  setShowAll(!showAll);
               };

               const displayedCards = showAll
                  ? yearData.cards
                  : yearData.cards.slice(0, 6);

               return (
                  <React.Fragment key={index}>
                     <Heading text={yearData.year} align="left" color="black" />
                     <div className={styles.yearBlock}>
                        <div className={styles.cardContainer}>
                           {displayedCards.map((card, cardIndex) => (
                              <MainCards
                                 key={cardIndex}
                                 image={card.image}
                                 title={card.title}
                                 text={card.text}
                              />
                           ))}
                        </div>
                        {yearData.cards.length > 6 && (
                           <CustomButton
                              onClick={toggleShow}
                              text={showAll ? 'Скрыть' : 'Показать еще'}
                              buttonStyles="customButtonAdaptive"
                           />
                        )}
                     </div>
                     {index < years.length - 1 && (
                        <div className={styles.divider} />
                     )}
                  </React.Fragment>
               );
            })}
            {/* FIX__ME
            <MoreProjects initialConfig={config}>
               <Heading text={'Больше проектов'} />
            </MoreProjects> */}
         </div>
      </Container>
   );
};

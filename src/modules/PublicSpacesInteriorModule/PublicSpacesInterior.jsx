import { SimpleFilter } from 'UI/CustomFilters/SimpleFilter/SimpleFilter.jsx';
import { Container, CustomButton, MainCards, Heading } from 'UI/index.js';
import React, { useState, useEffect } from 'react';
import styles from './PublicSpacesInterior.module.scss';
import img from 'assets/img/RealProjects.png'
import { CustomButton } from "UI/index";

export const PublicSpacesInterior = () => {

   const years = [
      {
         year: 2022,
         cards: [
            { img: img, title: "Заголовок", text: "офисы" },
            { img: img, title: "Заголовок", text: "хорека" },
            { img: img, title: "Заголовок", text: "спортклубы" },
            { img: img, title: "Заголовок", text: "медцентры" },
            { img: img, title: "Заголовок", text: "Коттеджные поселки" },
            { img: img, title: "Заголовок", text: "другое" } ,
            { img: img, title: "Заголовок", text: "медцентры" },
            { img: img, title: "Заголовок", text: "банки" },
            { img: img, title: "Заголовок", text: "другое" }
         ]
      },
      {
         year: 2023,
         cards: [
            { img: img, title: "Заголовок", text: "офисы" },
            { img: img, title: "Заголовок", text: "хорека" },
            { img: img, title: "Заголовок", text: "спортклубы" },
            { img: img, title: "Заголовок", text: "медцентры" },
            { img: img, title: "Заголовок", text: "банки" },
            { img: img, title: "Заголовок", text: "другое" },
            { img: img, title: "Заголовок", text: "офисы" },
            { img: img, title: "Заголовок", text: "хорека" },
            { img: img, title: "Заголовок", text: "спортклубы" },
            { img: img, title: "Заголовок", text: "медцентры" },
            { img: img, title: "Заголовок", text: "банки" },
            { img: img, title: "Заголовок", text: "другое" }
         ]
      }
   ];

   const [showAllByYear, setShowAllByYear] = useState({});
   const [selectedFilters, setSelectedFilters] = useState('Все');
   const [cardsPerRow, setCardsPerRow] = useState(6);

   const filterItems = ['Все', 'Офисы', 'Хорека', 'Медцентры', 'Спортклубы', 'Банки', 'Другое'];

   useEffect(() => {
      const updateCardsPerRow = () => {
         if (window.innerWidth <= 430) {
            setCardsPerRow(3);
         } else if (window.innerWidth <= 1024) {
            setCardsPerRow(6);
         } else {
            setCardsPerRow(6);
         }
      };

      updateCardsPerRow();
      window.addEventListener('resize', updateCardsPerRow);

      return () => {
         window.removeEventListener('resize', updateCardsPerRow);
      };
   }, []);

   const handleFilterChange = (filter) => {
      setSelectedFilters(filter);
   };

   const toggleShow = (year) => {
      setShowAllByYear((prev) => ({
         ...prev,
         [year]: !prev[year],
      }));
   };

   const filteredYears = selectedFilters === 'Все'
      ? years
      : years.map((yearData) => ({
         year: yearData.year,
         cards: yearData.cards.filter((card) => card.text.toLowerCase() === selectedFilters.toLowerCase()),
      }));

   return (
      <Container>
         <SimpleFilter items={filterItems}
                       onFilterChange={handleFilterChange}
                       selectedFilter={selectedFilters}
         />
         <div className={styles.publicContainer}>

            {filteredYears.map((yearData, index) => {
               const showAll = showAllByYear[yearData.year];
               const displayedCards = showAll ? yearData.cards : yearData.cards.slice(0, 6);

               return (
                  <React.Fragment key={index}>
                     <Heading linkWidth={'92px'} text={yearData.year} className={styles.heading} align="left" color="black" />
                     <div className={styles.yearBlock}>
                        <div className={styles.cardContainer}>
                           {displayedCards.map((card, cardIndex) => (
                              <MainCards key={cardIndex} image={card.img} title={card.title} text={card.text} />
                           ))}
                        </div>
                        {yearData.cards.length > 6 && (
                           <CustomButton
                              onClick={() => toggleShow(yearData.year)}
                              text={showAll ? 'Скрыть' : 'Показать еще'}
                              buttonStyles="customButtonAdaptive"
                           />
                        )}
                     </div>
                     {index < filteredYears.length - 1 && <div className={styles.divider} />}
                  </React.Fragment>
               );
            })}
         </div>
      </Container>
   );
};

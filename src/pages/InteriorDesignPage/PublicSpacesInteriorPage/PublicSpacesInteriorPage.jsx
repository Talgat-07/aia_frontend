import { SimpleFilter } from 'UI/CustomFilters/SimpleFilter/SimpleFilter.jsx';
import { Container } from 'UI/Container/Container.jsx';
import { CustomGalleryBlock } from 'UI/CustomGalleryBlock/CustomGalleryBlock.jsx';
import  img  from 'assets/img/CardProgects.png'
import { useState, useEffect } from 'react';


export const PublicSpacesInteriorPage = () => {

   const [filteredCards, setFilteredCards] = useState([])
   const [selectedFilters, setSelectedFilters] = useState('Все')

   const filterItems = [
      'Все', 'Офисы', 'Хорека', 'Медцентры', 'Спортклубы', 'Банки', 'Другое'];

   const groupedData = [
      {
         year: 2022,
         cards: [
            { img: img, title: "заголовок", text: "офисы" },
            { img: img, title: "заголовок", text: "хорека" },
            { img: img, title: "заголовок", text: "спортклубы" },
            { img: img, title: "заголовок", text: "медцентры" },
            { img: img, title: "заголовок", text: "банки" },
            { img: img, title: "заголовок", text: "другое" }
         ]
      },
      {
         year: 2023,
         cards: [
            { img: img, title: "заголовок", text: "офисы" },
            { img: img, title: "заголовок", text: "хорека" },
            { img: img, title: "заголовок", text: "спортклубы" },
            { img: img, title: "заголовок", text: "медцентры" },
            { img: img, title: "заголовок", text: "банки" },
            { img: img, title: "заголовок", text: "другое" }
         ]
      }

   ]

      const handleFilterChange = (filter) => {
         setSelectedFilters(filter);

         if (filter.toLowerCase() === "все") {
            const allCards = groupedData.map((group) => ({
               year: group.year,
               cards: group.cards
            }))
            setFilteredCards(allCards);
         } else {
            const filtered = groupedData.map((group) => ({
               year: group.year,
               cards: group.cards.filter((card) =>
               card.text.toLowerCase() === filter.toLowerCase())
            }))
            setFilteredCards(filtered)
         }

      };

   useEffect(() => {
      const allCards = groupedData.map((group) => ({
         year: group.year,
         cards: group.cards,
      }));
      setFilteredCards(allCards);
   }, []);

      return (
         <Container>
            <SimpleFilter items={filterItems}
                          onFilterChange={handleFilterChange}
                          selectedFilter={selectedFilters}
            />
            <div>
               {filteredCards.map((group, index) => (
                  <div key={index}>
                     <h2>{group.year}</h2>
                     <CustomGalleryBlock cardsData={group.cards} />
                  </div>
               ))}
            </div>
         </Container>
      );
}


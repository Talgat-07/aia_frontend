import { SimpleFilter } from 'UI/CustomFilters/SimpleFilter/SimpleFilter.jsx';
import { Container } from 'UI/Container/Container.jsx';
import { CustomGalleryBlock } from 'UI/CustomGalleryBlock/CustomGalleryBlock.jsx';
import { useState, useEffect } from 'react';
import { Heading } from 'UI/heading/Heading.jsx';
import { CustomButton } from 'UI/buttons/CustomButton/CustomButton.jsx';
import style from './PublicSpacesInterior.module.scss'
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import { path } from 'utils/constants/constants.js';


export const PublicSpacesInterior = () => {

   const [filteredCards, setFilteredCards] = useState([])
   const [selectedFilters, setSelectedFilters] = useState('Все')
   const [visibleCards, setVisibleCards] = useState(6)
   const [isAllVisible, setIsAllVisible] = useState(false);

   const filterItems = [
      'Все', 'Офисы', 'Хорека', 'Медцентры', 'Спортклубы', 'Банки', 'Другое'];

   const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVZYoQrOOPnwH8iaBkbMz9mKWoc5GowmvgA&s"

   const moreProjectsData = {
      image: img,
      subtitle: 'subtitle',
      text: 'text',
      buttons: [
         { text: 'Реализованные проекты', link: path.realizeProjects},
         { text: 'Архитектурное проектирование', link: path.architectureProjects},
         { text: 'Дизайн общественных пространств', link: path.publicSpacesInterior},
         { text: 'Дизайн квартир', link: path.apartmentDesignPage},
      ],
   }

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
            { img: img, title: "заголовок", text: "другое" },
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
      setVisibleCards(6)
      setIsAllVisible(false);

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

   const showMore = () => {
      if (isAllVisible) {
         setVisibleCards(6);
         setIsAllVisible(false);
      } else {
         const newVisibleCards = visibleCards + 6;
         setVisibleCards(newVisibleCards);

         if (newVisibleCards >= filteredCards[0]?.cards.length) {
            setIsAllVisible(true);
         }
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
         <div className={style.publicContainer}>
            <SimpleFilter items={filterItems}
                          onFilterChange={handleFilterChange}
                          selectedFilter={selectedFilters}
            />
            {filteredCards.map((group, index) => (
               <div key={index}>
                  <div className={style.heading}>
                     <Heading
                        text={group.year}
                        align="left"
                        color="black"
                     />
                  </div>
                  <CustomGalleryBlock cardsData={group.cards.slice(0, visibleCards)} />
                  {
                     group.cards.length > 6 && (
                        <div className={style.buttonCenter}>
                           <CustomButton
                              onClick={showMore}
                              buttonStyles="customButtonAdaptive"
                              text={!isAllVisible ? 'показать еще' : 'скрыть'}
                           />
                        </div>
                     )
                  }
                  <hr />
               </div>
            ))}
         </div>
         <MoreProjects config={moreProjectsData}/>
      </Container>
   );
}


import {useState} from 'react';
import { CustomGalleryBlock } from 'UI/CustomGalleryBlock/CustomGalleryBlock.jsx';
import { MoreProjects } from 'UI/MoreProjects/MoreProjects.jsx';
import { CustomFilters } from 'UI/CustomFilters/CustomFilters/CustomFilters.jsx';
import { Container } from 'UI/Container/Container.jsx';
import { CustomPagination } from 'UI/CustomPagination/CustomPagination.jsx';

export const BlocksArchitecture = () => {

   const img = 'https://s3.ww-realty.ru/upload/216/216902068b2411fc09c8bc6355623cb5.jpg'

   const moreProjectsData = {
      image: img,
      subtitle: 'subtitle',
      text: 'text',
      buttons: [
         { text: 'Реализованные проекты'},
         { text: 'Архитектурное проектирование'},
         { text: 'Дизайн общественных пространств'},
         { text: 'Дизайн квартир'},
      ],
   }

   const customFiltersItem = {
      years: [2020, 2021, 2022]
   }

   const cardsData = [
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022
      },
   ];

   const [filteredCards, setFilteredCards] = useState(cardsData);
   const [activePage, setActivePage] = useState(1);
   const itemsPerPage = 9;

   const handleFilterChange = (filters) => {
      const { year } = filters;
      const filtered = cardsData.filter(
         (card) =>
            (!year || card.year === year)
      );
      setFilteredCards(filtered);
      setActivePage(1);
   };

   const indexOfLastItem = activePage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   return (
      <Container>
         <CustomFilters
            visibleFilters={['year']}
            item={customFiltersItem}
            onFilterChange={handleFilterChange}/>
         <CustomGalleryBlock cardsData={currentCards} />
         <CustomPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={filteredCards.length}
            onChange={handlePageChange}
         />
         <MoreProjects config={moreProjectsData}/>
      </Container>
   );
};


import {useState} from 'react';
import { CustomGalleryBlock } from 'UI/CustomGalleryBlock/CustomGalleryBlock.jsx';
import { CustomFilters } from 'UI/CustomFilters/CustomFilters/CustomFilters.jsx';
import { Container } from 'UI/Container/Container.jsx';
import { CustomPagination } from 'UI/CustomPagination/CustomPagination.jsx';
import img from 'assets/img/moreProjects.png'

export const PrivateArchitecture = () => {



   const customFiltersItem = {
      years: [2020, 2021, 2022],
      floors: [1, 2, 3]
   }

   const cardsData = [
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 500 м²',
         year: 2022,
         floor: 3,
         area: 500,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'проверка',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'проверка',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'проверка',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'проверка',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'проверка',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      },
      {
         img: img,
         title: '2022 - 3 этаж',
         text: 'Площадь: 300 м²',
         year: 2022,
         floor: 3,
         area: 300,
      },
      {
         img: img,
         title: '2020 - 1 этаж',
         text: 'Площадь: 100 м²',
         year: 2020,
         floor: 1,
         area: 100,
      }
   ];

   const [filteredCards, setFilteredCards] = useState(cardsData);
   const [activePage, setActivePage] = useState(1);
   const itemsPerPage = 9;

   const handleFilterChange = (filters) => {
      const { year, floor, area } = filters;
      const filtered = cardsData.filter(
         (card) =>
           (year === '' || card.year === year) &&
            (floor === '' || card.floor === floor) &&
            card.area <= area
      );
      console.log('filtered', filtered)
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
         <CustomFilters visibleFilters={['year', 'floor', 'area']} item={customFiltersItem} onFilterChange={handleFilterChange}/>
         <CustomGalleryBlock cardsData={currentCards} />
         <CustomPagination
            activePage={activePage}
            itemsPerPage={itemsPerPage}
            totalItemsCount={filteredCards.length}
            onChange={handlePageChange}
         />
      </Container>
   );
};


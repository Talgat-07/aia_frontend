import {useState, useMemo} from 'react';
import { CustomGalleryBlock } from 'UI/CustomGalleryBlock/CustomGalleryBlock.jsx';
import { CustomFilters } from 'UI/CustomFilters/CustomFilters/CustomFilters.jsx';
import { Container } from 'UI/Container/Container.jsx';
import { CustomPagination } from 'UI/CustomPagination/CustomPagination.jsx';
import img from 'assets/img/CardProject.png'

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
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
         year: 2021,
         floor: 2,
         area: 200,
      },{
         img: img,
         title: '2021 - 2 этаж',
         text: 'Площадььь: 200 м²',
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
         text: 'Площадь: 600 м²',
         year: 2022,
         floor: 3,
         area: 600,
      },
   ];


   const [filters, setFilters] = useState({ year: "", floor: "", area: 50 });
   const [activePage, setActivePage] = useState(1);
   const itemsPerPage = 9;

   const handleFilterChange = (newFilters) => {
      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
      setActivePage(1);
   };

   const filteredCards = useMemo(() => {
      return cardsData.filter(
         (card) =>
            (filters.year === '' || card.year === filters.year) &&
            (filters.floor === '' || card.floor === filters.floor) &&
            card.area >= filters.area
      );
   }, [filters, cardsData]);



   const currentCards = useMemo(() => {
      const indexOfLastItem = activePage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      return filteredCards.slice(indexOfFirstItem, indexOfLastItem);
   }, [filteredCards, activePage]);

   return (
      <Container>
         <CustomFilters
            visibleFilters={['year', 'floor', 'area']}
            item={customFiltersItem}
            onFilterChange={handleFilterChange}
         />

         <CustomGalleryBlock cardsData={currentCards} />
         <CustomPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={filteredCards.length}
            onChange={setActivePage}
         />
      </Container>
   );
};
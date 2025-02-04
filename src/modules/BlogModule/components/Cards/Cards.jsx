import { useState } from 'react';
import { CustomPagination } from 'UI/CustomPagination/CustomPagination';
import { CustomBlogGallery } from 'UI/index';
import { path } from 'utils/constants/constants';

export const Cards = () => {
   const cardsData = [
      {
         id: 1,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 2,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 3,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 4,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 5,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 6,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 7,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 8,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 9,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 10,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 11,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 12,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },{
         id: 13,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },{
         id: 14,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },{
         id: 15,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
   ];

   const [filteredCards, setFilteredCards] = useState(cardsData);
   const [activePage, setActivePage] = useState(1);
   const itemsPerPage = 6;

   const indexOfLastItem = activePage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   return (
      <>
         <CustomBlogGallery cardsData={currentCards} />
         <CustomPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={filteredCards.length}
            onChange={handlePageChange}
         />
      </>
   );
};

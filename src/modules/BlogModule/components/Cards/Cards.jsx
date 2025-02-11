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
      },
      {
         id: 13,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 14,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 15,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 16,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 17,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 18,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 19,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 20,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 21,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 22,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 23,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },

      {
         id: 24,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 25,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 26,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 27,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 28,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 29,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 30,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 31,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },

      {
         id: 32,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 33,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 34,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 35,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 36,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 37,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 38,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 39,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 40,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 41,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 42,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 43,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 44,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 45,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 46,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
      {
         id: 47,
         img: 'https://24.kg/files/media/265/265730.jpeg',
         date: '12.12.2024',
         title: 'Подзаголовок',
         text: 'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi.Mi tristique risus accumsan morbi.',
         link: path.blogOpen,
      },
   ];

   const [filteredCards] = useState(cardsData);
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
            itemsPerPage={itemsPerPage}
         />
      </>
   );
};

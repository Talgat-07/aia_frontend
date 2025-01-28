import Pagination from 'react-js-pagination';
import {useState} from 'react';
import style from './CustomPagination.module.scss'
import {ArrowPrev} from 'assets/icons/ArrowPrev.jsx';
import {ArrowNext} from 'assets/icons/ArrowNext.jsx';


export const CustomPagination = () => {

   const [activePage, setActivePage] = useState(1);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
      console.log(`Active page is ${pageNumber}`);
   };

   return (
      <div className={style.paginationContainer}>
         <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={90}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
            itemClass={style.pageItem}
            linkClass={style.pageLink}

            prevPageText={<ArrowPrev/>}
            nextPageText={<ArrowNext/>}

            activeClass={style.active}
            activeLinkClass={style.activeLink}
            hideDisabled={false}
            hideNavigation={false}
         />
      </div>
   )
}
import Pagination from 'react-js-pagination';
import style from './CustomPagination.module.scss'
import {ArrowPrev} from 'assets/icons/ArrowPrev.jsx';
import {ArrowNext} from 'assets/icons/ArrowNext.jsx';


export const CustomPagination = ({ activePage,
                                    // itemsPerPage, totalItems,
                                    onChange }) => {

   return (
      <div className={style.paginationContainer}>

         <Pagination
            activePage={activePage}
            // itemsCountPerPage={itemsPerPage}
            // totalItemsCount={totalItems}
            itemsCountPerPage={9}
            totalItemsCount={90}
            pageRangeDisplayed={3}
            onChange={onChange}
            itemClass={style.pageItem}
            linkClass={style.pageLink}

            prevPageText={<ArrowPrev />}
            nextPageText={<ArrowNext />}

            activeClass={style.active}
            activeLinkClass={style.activeLink}
            hideDisabled={false}
            hideNavigation={false}
            hideFirstLastPages={true}
         />
      </div>
   )
}
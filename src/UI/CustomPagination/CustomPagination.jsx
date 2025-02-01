import style from './CustomPagination.module.scss';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { useMemo, useCallback } from 'react';

export const CustomPagination = ({ activePage, itemsPerPage, totalItemsCount, onChange}) => {
   const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

   const handlePageChange = useCallback(
      (page) => {
         if (page < 1 || page > totalPages) return;
         onChange(page);
      },
      [onChange, totalPages]
   );

   const renderPageNumbers = useMemo(() => {
      if (totalPages < 1) return null;

      const PageButton = ({ page }) => (
         <button
            key={`page-${page}`}
            onClick={() => handlePageChange(page)}
            className={`${style.pageItem}${activePage === page ? ` ${style.active}` : ''}`}
            aria-current={activePage === page ? 'page' : undefined}
         >
            {page}
         </button>
      );

      const pages = [<PageButton key="page-1" page={1} />];

      let start = Math.max(2, activePage - 1);
      let end = Math.min(totalPages - 1, activePage + 1);

      if (activePage <= 2) end = Math.min(3, totalPages);
      if (activePage >= totalPages - 1) start = Math.max(totalPages - 2, 2);

      if (start > 2) {
         pages.push(
            <span key="leftEllipsis" className={style.pageItem}>...</span>
         );
      }

      for (let page = start; page <= end; page++) {
         if (page > 1 && page < totalPages) {
            pages.push(<PageButton key={`page-${page}`} page={page} />);
         }
      }

      if (end < totalPages - 1) {
         pages.push(
            <span key="rightEllipsis" className={style.pageItem}>...</span>
         );
      }

      if (totalPages > 1) {
         pages.push(<PageButton key={`page-${totalPages}`} page={totalPages} />);
      }

      return pages;
   }, [activePage, totalPages, handlePageChange]);

   const NavigationButton = ({ direction, Icon }) => (
      <button
         onClick={() => handlePageChange(activePage + direction)}
         disabled={
            direction === -1 ? activePage === 1 : activePage === totalPages
         }
         className={style.navButton}
         aria-label={direction === -1 ? 'Previous page' : 'Next page'}
      >
         <Icon />
      </button>
   );

   return (
      <div className={style.paginationContainer} role="navigation">
         <NavigationButton direction={-1} Icon={ArrowPrev} />
         {renderPageNumbers}
         <NavigationButton direction={1} Icon={ArrowNext} />
      </div>
   );
};



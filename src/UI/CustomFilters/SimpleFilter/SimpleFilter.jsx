import style from './SimpleFilter.module.scss';

export const SimpleFilter = ({items, onFilterChange, selectedFilter}) => {

   return (
      <div className={style.filterContainer}>
         {items.map((item) => (
            <span
               key={item}
               className={`${style.filterItem} ${selectedFilter === item ? style.active : ''}`}
               onClick={() => onFilterChange(item)}
            >
                  {item}
        </span>
         ))}
      </div>
   );
};

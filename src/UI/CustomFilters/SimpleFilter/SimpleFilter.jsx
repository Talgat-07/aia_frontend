import style from './SimpleFilter.module.scss';
import { Typography } from 'UI/Typography/Typography.jsx';

export const SimpleFilter = ({items, onFilterChange, selectedFilter}) => {

   return (
      <div className={style.filterContainer}>
         {items.map((item, index) => (
            <span
               key={index}
               className={`${style.filterItem} ${selectedFilter === item ? style.active : ''}`}
               onClick={() => onFilterChange(item)}
            >
               <Typography
                  variant="bodyXS"
                  weight="regular"
                  color="white"
               >
                  {item}
               </Typography>
        </span>
         ))}
      </div>
   );
};

import { useState } from 'react';
import styles from './FilterButtons.module.scss';

export const FilterButtons = () => {
   const buttons = [
      { key: 'all', label: 'Новости' },
      { key: 'ultricies', label: 'Новости 2' },
      { key: 'consectetur', label: 'Новости 3' },
      { key: 'ultricie', label: 'Новости 4' },
      { key: 'consectetu', label: 'Новости 5' },
      { key: 'ultrici', label: 'Новости 6' },
   ];

   const [activeFilters, setActiveFilters] = useState([]);

   const toggleFilter = (filter) => {
      setActiveFilters((prev) =>
         prev.includes(filter)
            ? prev.filter((item) => item !== filter)
            : [...prev, filter]
      );
   };

   return (
      <div className={styles.buttonContainer}>
         {buttons.map(({ key, label }) => (
            <button
               key={key}
               className={`${styles.filterButton} ${
                  activeFilters.includes(label) ? styles.active : ''
               }`}
               onClick={() => toggleFilter(label)}
            >
               {label}
               {activeFilters.includes(label) && (
                  <span
                     className={styles.closeIcon}
                     onClick={(e) => {
                        e.stopPropagation();
                        toggleFilter(label);
                     }}
                  >
                     ✖
                  </span>
               )}
            </button>
         ))}
      </div>
   );
};

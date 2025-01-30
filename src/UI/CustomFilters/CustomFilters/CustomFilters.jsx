import { useState } from 'react';
import style from './CustomFilters.module.scss';
import Select from 'react-select';

export const CustomFilters = ({ item, onFilterChange, visibleFilters }) => {
   const [filters, setFilters] = useState({ year: '', floor: '', area: 900 });

   const handleChange = (name, value) => {
      const newFilters = { ...filters, [name]: value };
      setFilters(newFilters);
      onFilterChange(newFilters);
   };

   const yearOptions = [{ value: '', label: 'Все' }, ...item.years.map((y) => ({ value: y, label: y }))];
   const floorOptions = [{ value: '', label: 'Все' }, ...item.floors.map((f) => ({ value: f, label: f }))];

   return (
      <div className={style.filterContainer}>
         <div className={style.dropdownLine}>
            {visibleFilters.includes('year') && (
               <div className={style.customDropdown}>
                  <Select
                     value={yearOptions.find((opt) => opt.value === filters.year)}
                     onChange={(option) => handleChange('year', option.value)}
                     options={yearOptions}
                     placeholder="Год"
                     classNamePrefix="react-select"
                  />
               </div>
            )}

            {visibleFilters.includes('floor') && (
               <div className={style.customDropdown}>
                  <Select
                     value={floorOptions.find((opt) => opt.value === filters.floor)}
                     onChange={(option) => handleChange('floor', option.value)}
                     options={floorOptions}
                     placeholder="Этаж"
                     classNamePrefix="react-select"
                  />
               </div>
            )}
         </div>

         {visibleFilters.includes('area') && (
            <div className={style.sliderContainer}>
               <div className={style.label}>Площадь:</div>
               <div className={style.inline}>
                  <input
                     type="range"
                     className={style.slider}
                     min="0"
                     max="900"
                     value={filters.area}
                     onChange={(e) => handleChange('area', Number(e.target.value))}
                     style={{
                        '--progress': `${((filters.area - 0) / 900) * 100}%`,
                        '--thumb-offset': `0px`,
                     }}
                  />
                  <div className={style.scale}>
                     {[...Array(10)].map((_, i) => (
                        <div key={i} className={style.scaleValue}>
                           <div>{i * 100}</div>
                        </div>
                     ))}
                     <div className={style.scaleValue}>м²</div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

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
   const customStyles = {
      control: (styles) => ({
         ...styles,
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
         width: "175px",
         height: "45px",
         borderRadius: "0",
         border: "0",
         boxShadow: "none",
         padding: "0 10px",
      }),

      valueContainer: (styles) => ({
         ...styles,
         padding: "0",
      }),

      input: (styles) => ({
         ...styles,
         margin: "0",
         padding: "0",
      }),

      placeholder: (styles) => ({
         ...styles,
         margin: "0",
         padding: "0",
      }),

      dropdownIndicator: (styles) => ({
         ...styles,
         padding: "0",
         marginRight: "8px",
         color: "black",
      }),

      indicatorSeparator: (styles) => ({
         ...styles,
         display: "none",
      }),
   };



   const yearOptions = [{ value: '', label: 'Год' }, ...(item?.years?.map(y => ({ value: y, label: y })) || [])];
   const floorOptions = item?.floors ? [{ value: '', label: 'Этаж' }, ...item.floors.map(f => ({ value: f, label: f }))] : [];


   return (
      <div className={style.filterContainer}>
         <div className={style.dropdownLine}>
            {visibleFilters.includes('year') && (
               <div className={style.customDropdown}>
                  <Select
                     styles={customStyles}
                     value={yearOptions.find((opt) => opt.value === filters.year)}
                     onChange={(option) => handleChange('year', option.value)}
                     options={yearOptions}
                     placeholder="Год"
                  />
               </div>
            )}

            {visibleFilters.includes('floor') && (
               <div className={style.customDropdown}>
                  <Select
                     styles={customStyles}
                     value={floorOptions.find((opt) => opt.value === filters.floor)}
                     onChange={(option) => handleChange('floor', option.value)}
                     options={floorOptions}
                     placeholder="Этаж"
                  />
               </div>
            )}
         </div>

         {visibleFilters.includes('area') && (
            <div className={style.sliderContainer}>
               <div className={style.label}>Площадь: </div>
               <div className={style.inline}>
                  <input
                     type="range"
                     className={style.slider}
                     min="0"
                     max="900"
                     step="10"
                     value={filters.area}
                     onChange={(e) => handleChange('area', Number(e.target.value))}
                     style={{
                        '--progress': `${(filters.area / 930) * 100}%`,
                        '--thumb-offset': `0px`,
                     }}
                  />
                  <div className={style.staticHandle} />
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

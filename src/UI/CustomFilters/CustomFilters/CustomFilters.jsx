import { useState } from 'react';
import style from './CustomFilters.module.scss'
import { ArrowClose } from 'assets/icons/ArrowClose.jsx';
import { ArrowOpen } from 'assets/icons/ArrowOpen.jsx';


export const CustomFilters = ({item, onFilterChange}) => {

   const [year, setYear] = useState('')
   const [floor, setFloor] = useState('')
   const [area, setArea] = useState(50)
   const [isYearOpen, setIsYearOpen] = useState(false)
   const [isFloorOpen, setIsFloorOpen] = useState(false)

   const yearSelect = (value) => {
      setYear(value)
      setIsYearOpen(false)
      onFilterChange({year: value, floor, area})
   }

   const floorSelect = (value) => {
      setFloor(value)
      setIsFloorOpen(false)
      onFilterChange({ year, floor: value, area });
   }

   const areaChange = (event) => {
      const value = Number(event.target.value);
      setArea(value)
      onFilterChange({ year, floor, area: value});
   }

   return (
      <div className={style.filterContainer}>
         <div className={style.dropdownLine}>
            <div className={style.customDropdown}>
               <div className={style.dropdownHeader} onClick={() => setIsYearOpen(!isYearOpen)}>
                  {year || 'Год'}
                  <span className={style.arrow}>{isYearOpen ? <ArrowClose/> : <ArrowOpen/>}</span>
               </div>
               {isYearOpen && (
                  <div className={style.dropdownList}>
                     {item.years.map((y) => (
                        <div className={style.dropdownItem} key={y}
                             onClick={() => yearSelect(y)}>
                           {y}
                        </div>
                     ))}
                  </div>
               )}
            </div>

            <div className={style.customDropdown}>
               <div className={style.dropdownHeader} onClick={() => setIsFloorOpen(!isFloorOpen)}>
                  {floor || 'Этаж'}
                  <span className={style.arrow}>{isFloorOpen ? <ArrowClose/> : <ArrowOpen/>}</span>
               </div>
               {isFloorOpen && (
                  <div className={style.dropdownList}>
                     {item.floors.map((f) => (
                        <div className={style.dropdownItem} key={f}
                             onClick={() => floorSelect(f)}>
                           {f}
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>

         <div className={style.sliderContainer}>
            <div className={style.label}>Площадь:</div>
            <div className={style.inline}>
               <input
               type="range"
               className={style.slider}
               min="0"
               max="900"
               value={area}
               onChange={areaChange}
               />
               <div className={style.scale}>
                  {[...Array(10)].map((_, i) => (
                     <div key={i} className={style.scaleValue}>{i * 100}</div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
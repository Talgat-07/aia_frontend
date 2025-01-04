import { useEffect, useState } from 'react';
import axios from 'axios';
import { BuildTypeFilter } from 'modules/filters/components/BuildTypeFilter/BuildTypeFilter.jsx';
import { CategoryFilter } from 'modules/filters/components/CategoryFilter/CategoryFilter.jsx';
import { SubcategoryFilter } from 'modules/filters/components/SubcategoryFilter/SubcateguryFilter.jsx';
import { FloorFilter } from 'modules/filters/components/FloorFilter/FloorFilter.jsx';
import { YearFilter } from 'modules/filters/components/YearFilter/YearFilter.jsx';
import { AreaFilter } from 'modules/filters/components/AreaFilter/AreaFilter.jsx';


export const FilterBlock = () => {

   const [filterData, setFilterData] = useState(null)
   const [filters, setFilters] = useState({
      category: 'все',
      subcategory: '',
      buildType: '',
      floor: '',
      year: '',
      area: [0, 1000]
   })

   useEffect(() => {
      axios.get('')
         .then((response) => setFilterData(response.data))
         .catch((error) => console.error('Ошибка загрузки данных фильтров:', error))
   }, []);

   const handleFilterChange = (key, value) => {
      setFilters({...filters, [key]: value})
   };

   if (!filterData) return <div>Загрузка фильтров...</div>;

   return (
      <div className={'filterBlock'}>
         <CategoryFilter
            categories={data.categories}
            value={filters.category}
            onChange={(value) => handleFilterChange("category", value)}
         />
         <SubcategoryFilter
            subcategories={data.subcategories}
            value={filters.subcategory}
            onChange={(value) => handleFilterChange("subcategory", value)}
         />
         <BuildTypeFilter
            buildTypes={data.buildTypes}
            options={filterData.buildTypes}
            onChange={(value) => handleFilterChange('buildTypes', value)}
         />
         <FloorFilter
            floors={data.floors}
            value={filters.floor}
            onChange={(value) => handleFilterChange('floors', value)}
         />
         <YearFilter
            years={data.years}
            value={filters.year}
            onChange={(value) => handleFilterChange('years', value)}
         />
         <AreaFilter
            range={data.area}
            value={filters.area}
            onChange={(value) => handleFilterChange('area', value)}
         />
      </div>
   )
}
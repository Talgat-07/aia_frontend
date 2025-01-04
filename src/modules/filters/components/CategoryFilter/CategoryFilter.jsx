

export const CategoryFilter = ({categories, value, onChange}) => {

   return (
      <div>
         <label>все</label>
         <select value={value} onChange={(e) => onChange(e.target.value)}>
            {categories.map((category, index) => (
               <option key={index} value={category}>
                  {category}
               </option>
            ))}
         </select>
      </div>
   )
}
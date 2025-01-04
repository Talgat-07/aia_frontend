

export const SubcategoryFilter = ({ subcategories, value, onChange }) => {

   return (
      <div>
         <label>все</label>
         <select value={value} onChange={(e) => onChange(e.target.value)}>
            {subcategories.map((subcategory, index) => (
               <option key={index} value={subcategory}>
                  {subcategory}
               </option>
            ))}
         </select>
      </div>
   )
}
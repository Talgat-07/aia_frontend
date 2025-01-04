

export const YearFilter = ({ years, value, onChange }) => {
   return (
      <div>
         <label>Год:</label>
         <select value={value} onChange={(e) => onChange(e.target.value)}>
            {years.map((year, index) => (
               <option key={index} value={year}>{year}</option>
            ))}
         </select>
      </div>
   )
}



export const FloorFilter = ({ floors, value, onChange }) => {
   return (
      <div>
         <label>Этаж:</label>
         <select value={value} onChange={(e) => onChange(e.target.value)}>
            {floors.map((floor, index) => (
               <option key={index} value={floor}>{floor}</option>
            ))}
         </select>
      </div>
   )
}

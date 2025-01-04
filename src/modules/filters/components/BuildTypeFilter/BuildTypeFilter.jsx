

export const BuildTypeFilter = ({buildTypes, value, onChange}) => {

   return (
      <div>
         <label>type house</label>
         <select value={value} onChange={(e) => onChange(e.target.value)} >
            <option value=" ">all</option>
            {buildTypes.map((type, index) => (
               <option key={index} value={type}>
                  {type}
               </option>
            ))}
         </select>
      </div>
   )
}
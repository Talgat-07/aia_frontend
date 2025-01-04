

export const AreaFilter = ({ range, value, onChange }) => {
   const [min, max] = range;

   return (
      <div>
         <label>Площадь:</label>
         <input
            type="range"
            min={min}
            max={max}
            value={value[0]}
            onChange={(e) => onChange([+e.target.value, value[1]])}
         />
         <input
            type="range"
            min={min}
            max={max}
            value={value[1]}
            onChange={(e) => onChange([value[0], +e.target.value])}
         />
         <span>{value[0]} - {value[1]} м²</span>
      </div>
   );
}

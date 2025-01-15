import { useState, useRef } from 'react';

export const useReadMoreToggle = () => {
   const [expanded, setExpanded] = useState(false);
   const textRef = useRef(null);

   const handleToggle = () => {
      if (textRef.current) {
         if (expanded) {
            textRef.current.scrollTo({ top: 0, behavior: 'smooth' });
         } else {
            textRef.current.scrollTo({ top: textRef.current.scrollHeight, behavior: 'smooth' });
         }
      }
      setExpanded(!expanded);
   };

   return {
      expanded,
      textRef,
      handleToggle,
   };
}

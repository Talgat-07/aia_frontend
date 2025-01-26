import { useNavigate } from 'react-router-dom';
import styles from './CustomButton.module.scss';

export const CustomButton = ({ text, onClick, buttonStyles, to }) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (to) {
         navigate(to);
      }

      if (onClick) {
         onClick();
      }
   };

   return (
      <button
         className={`${styles[buttonStyles]}`}
         onClick={handleClick}
      >
         {text}
      </button>
   );
};

import { useNavigate } from 'react-router-dom';
import styles from './CustomButton.module.scss';

export const CustomButton = ({ text, onClick, buttonStyles, to }) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (to) {
         if (to.startsWith('http')) {
            window.open(to, '_blank');
         } else if (to.includes('#')) {
            const [path, anchor] = to.split('#');
            navigate(path);
            setTimeout(() => {
               const element = document.getElementById(anchor);
               if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
               }
            }, 0);
         } else {
            navigate(to);
         }
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


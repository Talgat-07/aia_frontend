import { useEffect, useState, useRef } from 'react';
import { useReadMoreToggle } from 'utils/hooks/useReadMoreButtonHook.js';
import { CustomButton } from 'UI/buttons/CustomButton/CustomButton.jsx';
import { Typography } from 'UI/typography/Typography.jsx';
import styles from './CustomBlockHP.module.scss'
import { Heading } from 'UI/heading/Heading.jsx';


export const CustomBlockHP = ({ items }) => {

   const { expanded, textRef, handleToggle } = useReadMoreToggle();
   const textStyles = `${styles.text} ${expanded ? '' : ''}`;

   const [showReadMore, setShowReadMore] = useState(false);
   const textContainerRef = useRef(null);

   useEffect(() => {
      if (textContainerRef.current) {
         const isOverflowing =
            textContainerRef.current.scrollHeight > textContainerRef.current.clientHeight;
         setShowReadMore(isOverflowing);
      }
   }, [items.text]);

   return (
      <div className={styles.customBlock}>
         <Heading text={items.heading} />

         <div className={`${items.onLeft ? styles.rightContentClass : styles.leftContentClass}`}>

               <div className={styles.textContainer}>

                     <div ref={(el) => { textRef.current = el; textContainerRef.current = el; }} className={textStyles}>
                        <Typography
                           variant="bodyM"
                           color="white"
                           weight="light"
                        >
                           {items.text}
                        </Typography>
                     </div>

                     <div className={styles.buttonContainer}>
                        {showReadMore && (
                        <CustomButton
                           buttonStyles={'readMoreButton'}
                           onClick={handleToggle}
                           text={expanded ? 'Скрыть' : 'Читать далее'}
                        />
                           )}
                           <CustomButton
                           buttonStyles={'customButtonBrown'}
                           text={'Посмотреть проекты'}
                           />
                     </div>
               </div>

               <div className={styles.imageContainer}>
                  <img src={items.image} alt="private houses" className={styles.customImage} />
               </div>

         </div>
         <hr />
      </div>
   )
}


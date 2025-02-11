import { useNavigate } from 'react-router-dom';
import { useReadMoreToggle } from 'utils/hooks/useReadMoreButtonHook.js';
import { Typography, CustomButton, Heading } from 'UI/index.js';
import styles from './CustomBlockHP.module.scss';
import { useOverflowCheck } from 'utils/hooks/useOverflowCheck.js';

export const CustomBlockHP = ({ items, link }) => {
    const navigate = useNavigate();
    const { textRef } = useReadMoreToggle();
    const { ref: textContainerRef } = useOverflowCheck();

    const handleViewProjectsClick = () => {
        navigate(link);
    };

    return (
       <div className={styles.customBlock}>
           <Heading text={items.heading} />

           <div className={items.onLeft ? styles.leftContentClass : styles.rightContentClass}>
               <div className={styles.textContainer}>
                   <div ref={(el) => { textRef.current = el; textContainerRef.current = el; }} className={styles.text}>
                       <Typography variant="bodyM" color="white" weight="light">
                           {items.text}
                       </Typography>
                   </div>

                   <div className={styles.buttonContainer}>
                       <CustomButton
                          buttonStyles="customButtonBrown"
                          text="Посмотреть проекты"
                          onClick={handleViewProjectsClick}
                       />
                   </div>
               </div>

               <div className={styles.imageContainer}>
                   <img src={items.image} alt={items.heading} className={styles.customImage} />
               </div>
           </div>

           <hr />
       </div>
    );
};


import { blocksConfig } from './config.js';
import { path } from 'utils/constants/constants.js';
export const PrivateHouses = () => (
   <CustomBlockHP items={blocksConfig.privateHouses} link={path.privateArchitecture} />
);
export const VillagesNeighborhoods = () => (
   <CustomBlockHP items={blocksConfig.villagesNeighborhoods} link={path.publicArchitecture} />
);

export const InteriorDesign = () => (
   <CustomBlockHP items={blocksConfig.interiorDesign} link={path.interiorDesign} />
);
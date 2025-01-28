import { useReadMoreToggle } from 'utils/hooks/useReadMoreButtonHook.js';
import { CustomButton } from 'UI/buttons/CustomButton/CustomButton.jsx';
import { Typography } from 'UI/typography/Typography.jsx';
import { Heading } from 'UI/heading/Heading.jsx';
import styles from './CustomBlockHP.module.scss';
import { useOverflowCheck } from 'utils/hooks/useOverflowCheck.js';

export const CustomBlockHP = ({ items }) => {
    const { expanded, textRef, handleToggle } = useReadMoreToggle();
    const { ref: textContainerRef, isOverflowing: showReadMore } = useOverflowCheck();

    return (
        <div className={styles.customBlock}>
            {/* Заголовок */}
            <Heading text={items.heading} />

            {/* Основной контент */}
            <div className={items.onLeft ? styles.leftContentClass : styles.rightContentClass}>
                {/* Текстовый блок */}
                <div className={styles.textContainer}>
                    <div ref={(el) => { textRef.current = el; textContainerRef.current = el; }} className={styles.text}>
                        <Typography variant="bodyM" color="white" weight="light">
                            {items.text}
                        </Typography>
                    </div>

                    {/* Кнопки */}
                    <div className={styles.buttonContainer}>
                        {showReadMore && (
                            <CustomButton
                                buttonStyles="readMoreButton"
                                onClick={handleToggle}
                                text={expanded ? 'Скрыть' : 'Читать далее'}
                            />
                        )}
                        <CustomButton
                            buttonStyles="customButtonBrown"
                            text="Посмотреть проекты"
                            onClick={items.click}
                        />
                    </div>
                </div>

                {/* Блок с изображением */}
                <div className={styles.imageContainer}>
                    <img src={items.image} alt={items.heading} className={styles.customImage} />
                </div>
            </div>

            {/* Разделитель */}
            <hr />
        </div>
    );
};

import { blocksConfig } from './config';

export const PrivateHouses = () => (
    <CustomBlockHP items={blocksConfig.privateHouses} />
);

export const VillagesNeighborhoods = () => (
    <CustomBlockHP items={blocksConfig.villagesNeighborhoods} />
);

export const InteriorDesign = () => (
    <CustomBlockHP items={blocksConfig.interiorDesign} />
);

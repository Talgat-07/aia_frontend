import { Typography, Heading, CustomButton, ContentContainer } from 'UI/index.js';
import { NumberAnimation} from "./Components/NumberAnimation/NumberAnimation.jsx";
import { useModal } from "utils/hooks/useModal.js"
import styles from "./WeInNumber.module.scss"
import { RegModal } from 'modules/User/Components/RegModal/RegModal.jsx';

export const WeInNumber = () => {
     const { isOpen, openModal, closeModal } = useModal();
    const data = {
        slogan: "Наш слоган",
        description: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus. Sed adipiscing libero enim justo.",
        stats: [
            { value: 500000, label: "Реализовано объектов" },
            { value: 1200, label: "Количество проектов" },
            { value: 100000, label: "Спроектировано площадей" },
        ],
        subtitle: "Подзаголовок",
        text:"Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis inmet consectetur. Mi tristique risus accumsan morbi.Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies rutrum blandit et arcu. Feugiat arcu turpis inmet consectetur. Mi tristique risus accumsan morbi."
    };

    return (
       <ContentContainer>
        <div className={styles.container}>
            <Heading text="Мы в цифрах" color="black" className={styles.heading} />

            <div className={styles.content}>
                <div className={styles.content_numbers}>
                    <Typography variant="bodyXl" weight="medium" color="black">
                        {data.slogan}
                    </Typography>
                    <Typography variant="bodyM" weight="light" color="black">
                        {data.description}
                    </Typography>
                    <div className={styles.content_stats}>
                        {data.stats.map((stat, index) => (
                            <div key={index} className={styles.content_stat}>
                                <NumberAnimation endValue={stat.value} duration={1500} />
                                <Typography className={styles.content_label} variant="bodyM"  color="black">
                                    {stat.label}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.textBlock}>
                    <div className={styles.textBlock_about}>
                        <Typography variant="bodyL" weight="medium" color="black">
                            {data.subtitle}
                        </Typography>
                        <Typography variant="bodyM" weight="light" color="black">
                            {data.text}
                        </Typography>
                    </div>

                    <CustomButton text="Оставить заявку" buttonStyles="customButtonAdaptive" onClick={openModal} />

                </div>

            </div>
            {isOpen? (<RegModal closeModal={closeModal} isOpen={isOpen}/>) : null}

            <hr/>
        </div>
       </ContentContainer>
    );
};

import {Typography}  from "UI/Typography/Typography.jsx"
import { Heading} from "UI/Heading/Heading.jsx";
import { NumberAnimation} from "./Components/NumberAnimation/NumberAnimation.jsx";
// fix need modal import { useModal } from "utils/hooks/useModal.js"
import classes from "./WeInNumber.module.scss"
import {CustomButton} from "UI/Buttons/CustomButton/CustomButton.jsx";

export const WeInNumber = () => {
    // fix need modal   const { isOpen, openModal, closeModal } = useModal();
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
        <div className={classes.container}>
            <Heading text="Мы в цифрах" color="black" />

            <div className={classes.content}>
                <div className={classes.numbers}>
                    <Typography variant="bodyXl" weight="medium" color="black">
                        {data.slogan}
                    </Typography>
                    <Typography variant="bodyM" weight="light" color="black">
                        {data.description}
                    </Typography>
                    <div className={classes.stats}>
                        {data.stats.map((stat, index) => (
                            <div key={index} className={classes.stat}>
                                <NumberAnimation endValue={stat.value} duration={1500} />
                                <Typography className={classes.label} variant="bodyM"  color="black">
                                    {stat.label}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.textBlock}>
                    <div className={classes.textAbout}>
                        <Typography variant="bodyL" weight="medium" color="black">
                            {data.subtitle}
                        </Typography>
                        <Typography variant="bodyM" weight="light" color="black">
                            {data.text}
                        </Typography>
                    </div>

                    <CustomButton text="Оставить заявку" buttonStyles="customButtonAdaptive" />

                </div>

            </div>

            { /* fix need modal {isOpen &&()}*/}
            <hr/>
        </div>

    );
};

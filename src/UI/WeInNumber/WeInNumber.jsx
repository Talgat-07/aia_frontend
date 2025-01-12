import {Typography}  from "UI/typography/Typography.jsx"
import { Heading} from "UI/heading/Heading.jsx";
import { NumberAnimation} from "./Components/NumberAnimation/NumberAnimation.jsx";
import { useModal } from "utils/hooks/useModal.js"
import classes from "./WeInNumber.module.scss"
import {CustomButton} from "UI/Buttons/CustomButton/CustomButton.jsx";

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
        text: "Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo pharellus a et.",
    };

    return (
        <div className={classes.container}>
            <Heading text="Мы в цифрах" color="black" />

            <div className={classes.content}>
                <div className={classes.numbers}>
                    <Typography variant="bodyS" weight="bold" color="black">
                        {data.slogan}
                    </Typography>
                    <Typography variant="bodyM" weight="regular" color="gray">
                        {data.description}
                    </Typography>
                    <div className={classes.stats}>
                        {data.stats.map((stat, index) => (
                            <div key={index} className={classes.stat}>
                                <NumberAnimation endValue={stat.value} duration={1500} />
                                <Typography variant="bodyS" weight="medium" color="black">
                                    {stat.label}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={classes.textBlock}>
                    <Typography variant="bodyS" weight="bold" color="black">
                        {data.subtitle}
                    </Typography>
                    <Typography variant="bodyM" weight="regular" color="gray">
                        {data.text}
                    </Typography>
                    <CustomButton text="Заказать Проект" buttonStyles="customButtonAdaptive" onClick={openModal}/>
                </div>
            </div>

            {isOpen && (
                <div className={classes.modalBackdrop} onClick={closeModal}>
                    <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                        <CustomButton buttonStyles="customButtonBrown"  onClick={closeModal}>
                            &times;
                        </CustomButton>
                        <h2>Оставить заявку</h2>
                        <p>Заполните форму ниже, чтобы мы могли связаться с вами:</p>
                        <form className={classes.form}>
                            <label>
                                Имя:
                                <input type="text" placeholder="Введите ваше имя" />
                            </label>
                            <label>
                                Телефон:
                                <input type="tel" placeholder="Введите ваш телефон" />
                            </label>
                            <CustomButton type="submit" >
                                Отправить
                            </CustomButton>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

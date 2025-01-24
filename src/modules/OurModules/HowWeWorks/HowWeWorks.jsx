import {Container, Heading} from "UI/index.js";
import styles from './HowWeWorks.module.scss'
import {Typography,CustomButton} from "UI/index.js";

export const HowWeWorks = () => {
    const config = {

        subtitle:'Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et. Placerat ultricies ultricies Lorem ipsum dolor sit amet consectetur. Mi tristique risus accumsan morbi. Sed adipiscing libero vel enim justo phasellus a et.'
    }
    return (
        <Container className={styles.container}>
            <hr/>
            <div className={styles.HowWork}>
                    <Heading text="Как мы работаем"/>
                <div className={styles.HowWork__content}>
                    <Typography variant="bodyL" weight="regular" color="white">Этапы работы</Typography>
                    <div className={styles.HowWork__content_des}>
                        <Typography variant="bodyM" weight="light" color="white">{config.subtitle}</Typography>
                    </div>
                    <CustomButton buttonStyles="customButtonBrown" text="Посмотреть все этапы"/>
                </div>
            </div>

        </Container>
    );
};


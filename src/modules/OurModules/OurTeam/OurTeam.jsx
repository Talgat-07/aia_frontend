import { Heading } from "UI/index.js";
import styles from './OurTeam.module.scss';
import { Card } from "UI/index.js";
import imageCard from 'assets/img/CardImage.png';

export const OurTeam = () => {
    const teamConfig = [
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
        { name: 'Имя Фамилия', position: 'Должность', image: imageCard },
    ];

    return (
        <div className={styles.container} id="ourteam">
            <Heading text="Команда" color="black" />
            <div className={styles.OurTeam}>
                {teamConfig.map(({ name, position, image }, index) => (
                    <Card
                        key={index}
                        image={image}
                        description={position}
                        title={name}
                    />
                ))}
            </div>
        </div>
    );
};

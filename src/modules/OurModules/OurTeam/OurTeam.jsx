import { Heading } from "UI/index.js";
import styles from './OurTeam.module.scss';
import { PeopleCard } from "UI/index.js";
import imageCard from 'assets/img/CardImage.png';
import {useMediaQuery} from "utils/hooks/useMediaQuery.js";
import {Swiper, SwiperSlide} from "swiper/react";

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
    const DesktopAndTablet = useMediaQuery('(min-width: 530px)')
    const Mobile = useMediaQuery('(max-width: 525px)')

    return (
        <div className={styles.container} id="ourteam">
            <Heading text="Команда" color="black" />
            {DesktopAndTablet && (
                <div className={styles.OurTeam}>
                    {teamConfig.map(({name, position, image}, index) => (
                        <PeopleCard
                            key={index}
                            image={image}
                            description={position}
                            title={name}
                        />
                    ))}
                </div>
            )}
            {Mobile && (
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}


                    loop={true}
                    spaceBetween={16}
                    grabCursor={true}
                    className={styles.MobileOur}

                >
                    {teamConfig.map(({ name, position, image }, index) => (
                        <SwiperSlide key={index}>
                            <PeopleCard
                                image={image}
                                description={position}
                                title={name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

        </div>
    );
};

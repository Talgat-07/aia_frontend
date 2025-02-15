import { MainCards, Heading } from 'UI/index.js';
import styles from './NewProjects.module.scss';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'utils/hooks/useMediaQuery.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';


export const NewProjects = ({ config = {} }) => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');

    return (
        <div className={styles.container}>
            <Heading text="Новые проекты" color="black" />
            <div className={styles.content}>
                {isDesktop ? (
                    config.cards.map((card, index) => (
                        <Link to={card.link} key={index}>
                            <MainCards
                                image={card.image}
                                title={card.title}
                                text={card.text}
                            />
                        </Link>
                    ))
                ) : (
                    isTablet && (
                        <Swiper
                            slidesPerView={1}
                            className={styles.contentTablet}
                            spaceBetween={16}
                            modules={[Pagination]}
                            pagination = {true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 8,
                                },

                                768: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            {config.cards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <Link to={card.link}>
                                        <MainCards
                                            image={card.image}
                                            title={card.title}
                                            text={card.text}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                )}
            </div>
        </div>
    );
};

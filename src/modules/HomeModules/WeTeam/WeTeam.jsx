import { Navigation, EffectCoverflow } from 'swiper';
import CardImage from 'assets/img/CardImage.png';
import styles from "./WeTeam.module.scss";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from "react";
import { PeopleCard, CustomButton, Heading } from 'UI/index';
import { ArrowLeft, ArrowRight } from "assets/index.js";
import { useMediaQuery } from "utils/hooks/useMediaQuery.js";

const employees = [
    {
        title: 'Имя Фамилия1',
        description: 'должность',
        image: CardImage,
    },
    {
        title: 'Имя Фамилия2',
        description: 'должность',
        image: CardImage,
    },
    {
        title: 'Имя Фамилия3',
        description: 'должность',
        image: CardImage,
    }
];

export const WeTeam = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const desktopSwiperRef = useRef(null);
    const tabletSwiperRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const isTablet = useMediaQuery('(min-width: 750px) and (max-width: 1024px)');
    const Desktop = useMediaQuery('(min-width: 1360px)');

    useEffect(() => {
        if (!isTablet && Desktop) {
            if (desktopSwiperRef.current && prevRef.current && nextRef.current && employees.length > 0) {
                desktopSwiperRef.current.params.navigation.prevEl = prevRef.current;
                desktopSwiperRef.current.params.navigation.nextEl = nextRef.current;
                desktopSwiperRef.current.navigation.init();
                desktopSwiperRef.current.navigation.update();
            }
        } else if (isTablet) {
            if (tabletSwiperRef.current && prevRef.current && nextRef.current && employees.length > 0) {
                tabletSwiperRef.current.params.navigation.prevEl = prevRef.current;
                tabletSwiperRef.current.params.navigation.nextEl = nextRef.current;
                tabletSwiperRef.current.navigation.init();
                tabletSwiperRef.current.navigation.update();
            }
        }
    }, [isTablet, Desktop]);

    const handleCardClick = (index) => {
        if (Desktop && desktopSwiperRef.current) {
            if (desktopSwiperRef.current.realIndex === index) return;
            desktopSwiperRef.current.slideToLoop(index, 500);
        } else if (isTablet && tabletSwiperRef.current) {
            if (tabletSwiperRef.current.realIndex === index) return;
            tabletSwiperRef.current.slideToLoop(index, 500);
        }
    };

    if (employees.length < 3) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <Heading text={"Наша команда"} color={"black"} />
            <div className={styles.content}>
                <button
                    ref={prevRef}
                    className={`${styles.buttonArr} ${isTablet ? styles.bottomButtonPrev : styles.prevButton}`}
                >
                    <ArrowLeft />
                </button>

                <div className={styles.container}>
                    {Desktop && (
                        <Swiper
                            ref={desktopSwiperRef}
                            modules={[Navigation, EffectCoverflow]}
                            loop={true}
                            spaceBetween={0}
                            className={styles.swiperContainer}
                            slidesPerView={3}
                            slidesOffsetBefore={0}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                    effect: "coverflow",
                                    spaceBetween: 0,
                                },
                                820: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                    slidesOffsetBefore: 0,
                                    slidesOffsetAfter: 0,
                                    centeredSlides: false
                                },
                                0: {
                                    slidesPerView: 1,
                                    effect: "slide",
                                    spaceBetween: 0
                                }
                            }}
                            slidesOffsetAfter={10}
                            centeredSlides={true}
                            onSwiper={(swiper) => { desktopSwiperRef.current = swiper; }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {employees.map((item, index) => (
                                <SwiperSlide key={index} className={styles.swiperSlide}>
                                    <PeopleCard
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        className={styles.card}
                                        isActive={index === activeIndex}
                                        onClick={() => handleCardClick(index)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {isTablet && (
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}


                            loop={true}
                            spaceBetween={16}
                            grabCursor={true}

                        >
                            {
                                employees.map((item, index) => (
                                <SwiperSlide key={index} className={styles.swiperSlide}>
                                    <PeopleCard
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        className={styles.card}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>

                <div className={styles.buttongo}>
                    <CustomButton
                        text={"Вся команда"}
                        buttonStyles={"customButtonAdaptive"}
                        to='/about-us#ourteam'
                    />
                </div>

                <button
                    ref={nextRef}
                    className={`${styles.buttonArr} ${isTablet ? styles.bottomButtonNext : styles.nextButton}`}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

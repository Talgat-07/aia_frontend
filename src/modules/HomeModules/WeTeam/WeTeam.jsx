import {  Navigation, EffectCoverflow } from 'swiper';
import CardImage from 'assets/img/CardImage.png'
import styles from "./WeTeam.module.scss"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRef, useEffect, useState} from "react";
import { PeopleCard, CustomButton, Heading, ContentContainer } from 'UI/index';
import {ArrowLeft, ArrowRight} from "assets/index.js";


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
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            employees.length > 0
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const handleCardClick = (index) => {
        if (!swiperRef.current) return;
        if (swiperRef.current.realIndex === index) {
            return;
        }
        swiperRef.current.slideToLoop(index, 500);
    };

    if (employees.length < 3) {
        return null;
    }
    return (
       <ContentContainer>
        <div className={styles.wrapper}>
                <Heading text={"Наша команда"} color={"black"}/>
            <div className={styles.content}>
                <button
                    ref={prevRef}
                    className={`${styles.buttonArr} ${styles.prevButton}`}
                >
                    <ArrowLeft/>
                </button>
                <div className={styles.container}>
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        loop={true}
                        spaceBetween={0}
                        className={styles.swiperContainer}
                        slidesPerView={3}
                        slidesOffsetBefore={0}

                        slidesOffsetAfter={10}
                        centeredSlides={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
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


                </div>
                <div className={styles.buttongo}>
                    <CustomButton text={"Вся команда"} buttonStyles={"customButtonAdaptive"}     to='/about-us#ourteam' />

                </div>


                <button
                    ref={nextRef}
                    className={`${styles.buttonArr} ${styles.nextButton}`}
                >
                    <ArrowRight/>
                </button>

            </div>


        </div>
       </ContentContainer>
    );


};
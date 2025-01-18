import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import CardImage from 'assets/img/CardImage.png'
import styles from "./OurTeam.module.scss"
import 'swiper/css'; 
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CustomButton} from "UI/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Heading } from 'UI/index';


const cardsData = [
    {
        title: 'Имя Фамилия',
        description: 'должность',
        image: CardImage,
    },
    {
        title: 'Имя Фамилия',
        description: 'должность',
        image: CardImage,
    },
    {
        title: 'Имя Фамилия',
        description: 'должность',
        image: CardImage,
    }
];

export const OurTeam = () => {
    SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

    return (
    <div className={styles.wrapper}>
      <Heading text="Наша команда" color='black'/>

     <div className={styles.carousel}>
         <Swiper
             className={styles.cardSwiper}
             effect="coverflow"
             slidesPerView={3}
             centeredSlides={true}
             slideToClickedSlide={true}
             spaceBetween={20}
             navigation={{
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             }}
             pagination={{
                 el: '.swiper-pagination',
                 clickable: true,
             }}
             coverflowEffect={{
                 rotate: 0,
                 stretch: 40,
                 depth: 100,
                 modifier: 2.5,
                 slideShadows: false,
             }}
             grabCursor={true}
             initialSlide={1}
         >
             {cardsData.map((item, index) => (
                 <SwiperSlide key={index} className={styles.swiper} >
                     <Card className={styles.cardSwiperContent} description={item.description} image={item.image} title={item.title} key={index}/>
                 </SwiperSlide>
             ))}
         </Swiper>
         <div className={styles.buttonSwiper}>
             <CustomButton text="Вся команда" buttonStyles="customButtonAdaptive"/>

         </div>
     </div>

    </div>
  );
};
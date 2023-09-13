import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import ImageQDPI from '../../assets/images/kspi-img.jpg'
import ImageQDPI2 from '../../assets/images/kspi-img2.jpg'
import ImageQDPI3 from '../../assets/images/kspi-img3.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                    <SwiperSlide><img className='h-[calc(100vh-42px)!important] md:h-[calc(100vh-50px)!important] xl:h-[calc(100vh-50px)!important] brightness-50' src={ ImageQDPI } alt="QDPI" /></SwiperSlide>
                    <SwiperSlide><img className='h-[calc(100vh-42px)!important] md:h-[calc(100vh-50px)!important] xl:h-[calc(100vh-50px)!important] brightness-50' src={ ImageQDPI2 } alt="QDPI" /></SwiperSlide>
                    <SwiperSlide><img className='h-[calc(100vh-42px)!important] md:h-[calc(100vh-50px)!important] xl:h-[calc(100vh-50px)!important] brightness-50' src={ ImageQDPI3 } alt="QDPI" /></SwiperSlide>
            </Swiper>
        </>
        );
    }
    
    export default Carousel
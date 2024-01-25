import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import norma from '../../../../src/assets/Bayel/norma.jpg'
import './Advertising.css'

const Advertising: FC = () => {
    return (
        <div className='container'>
            <div className='AdwertisingSwiper'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={norma} alt="реклама" /></SwiperSlide>
                    <SwiperSlide><img src={norma} alt="реклама" /></SwiperSlide>
                    <SwiperSlide><img src={norma} alt="реклама" /></SwiperSlide>
                    <SwiperSlide><img src={norma} alt="реклама" /></SwiperSlide>
                </Swiper>

            </div >
        </div>
    );
};

export default Advertising;
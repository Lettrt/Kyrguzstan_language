import React, { FC } from 'react';
import './PAAdvertising.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const PAAdvertising: FC = () => {
    return (
        <div className="advertising_advertising">
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
                <SwiperSlide><img src="https://sun9-82.userapi.com/impf/cnj8jZbZjxNhttxdcyEPoCFl-HHzjOUYdQwkgQ/ZQ_o_u1Yh3I.jpg?size=600x466&quality=96&sign=7d11d1749c6d326a67bd8106f477f1e3&type=album" alt="реклама" /></SwiperSlide>
                <SwiperSlide><img src="https://sun9-82.userapi.com/impf/cnj8jZbZjxNhttxdcyEPoCFl-HHzjOUYdQwkgQ/ZQ_o_u1Yh3I.jpg?size=600x466&quality=96&sign=7d11d1749c6d326a67bd8106f477f1e3&type=album" alt="реклама" /></SwiperSlide>
                <SwiperSlide><img src="https://sun9-82.userapi.com/impf/cnj8jZbZjxNhttxdcyEPoCFl-HHzjOUYdQwkgQ/ZQ_o_u1Yh3I.jpg?size=600x466&quality=96&sign=7d11d1749c6d326a67bd8106f477f1e3&type=album" alt="реклама" /></SwiperSlide>
                <SwiperSlide><img src="https://sun9-82.userapi.com/impf/cnj8jZbZjxNhttxdcyEPoCFl-HHzjOUYdQwkgQ/ZQ_o_u1Yh3I.jpg?size=600x466&quality=96&sign=7d11d1749c6d326a67bd8106f477f1e3&type=album" alt="реклама" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PAAdvertising;
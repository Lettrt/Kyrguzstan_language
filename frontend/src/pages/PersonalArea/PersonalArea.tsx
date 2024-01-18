import React, { FC, useState } from 'react';
import s from './PersonalArea.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import EditPersonalData from './modal/EditPersonalData/EditPersonalData';
import ChangePassword from './modal/ChangePassword/ChangePassword';



const PersonalArea: FC = () => {
    const [isvisible, setIsvisible] = useState(false)
    const [password, setPassword] = useState(false)


    return (
        <div className={s.container} >
            <section className={s.retreat} >
                <div className={s.top_area}>
                    <img src='https://images.squarespace-cdn.com/content/v1/5d3c2d1d944b060001edd719/1628909555912-RHJB2NMPOMIR7Z9BG7Z6/Fiverr_Logo.png' alt="user_avatar" />
                    <div>
                        <h2>имя пользователя</h2>
                        <h4>user</h4>
                        <h4>user</h4>
                        <div className={s.control_buttons} >
                            <button onClick={() => setIsvisible(true)}>Редактировать личные данные</button>
                            <button onClick={() => setPassword(true)}>Сменить пароль</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.areaField}>
                <div className={s.panel}>
                    <button>Личные данные</button>
                    <button>Личные данные</button>
                    <button>Личные данные</button>
                    <button>Личные данные</button>
                    <div className={s.advertising}>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://sun9-82.userapi.com/impf/cnj8jZbZjxNhttxdcyEPoCFl-HHzjOUYdQwkgQ/ZQ_o_u1Yh3I.jpg?size=600x466&quality=96&sign=7d11d1749c6d326a67bd8106f477f1e3&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                            <SwiperSlide><img src="https://sun9-66.userapi.com/impf/k1WIzgKu7C0zQUuhOiiVd3xods6lcx7ANWI1Qw/oCzYW-GRfuc.jpg?size=840x840&quality=96&sign=924691954cd86134a533ee565cc8e6fa&c_uniq_tag=8i9Z2FfEZG2F25h2weH8T40cNSrBo2wreodDay3PbY4&type=album" alt="advertising" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={s.info}></div>
            </section>
            {isvisible && <EditPersonalData setIsvisible={setIsvisible} />}
            {password && <ChangePassword setPassword={setPassword} />}

        </div>
    );
};

export default PersonalArea;
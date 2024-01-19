import React, { FC, useEffect, useState } from 'react';
import s from './PersonalArea.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import EditPersonalData from './modal/EditPersonalData/EditPersonalData';
import ChangePassword from './modal/ChangePassword/ChangePassword';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchByUserData } from '../../store/slice/userSlice';



const PersonalArea: FC = () => {
    const [isvisible, setIsvisible] = useState(false)
    const [password, setPassword] = useState(false)
    const dispatch = useAppDispatch()
    const { loading } = useAppSelector(state => state.user)
    const { id, user } = useAppSelector(state => state.user)
    // console.log(user);

    useEffect(() => {
        if (id) {
            dispatch(fetchByUserData(id))
        }
    }, [dispatch, id])

    if (loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <div className={s.container} >
            <section className={s.retreat} >
                <div className={s.top_area}>
                    <img src="https://pic.rutubelist.ru/user/ef/0e/ef0e915546d95329bdad9ae3afecc315.jpg" alt="user_avatar" />
                    <div>
                        <h2>{user?.username}</h2>
                        <h4>{user?.email}</h4>
                        <h4>{user?.id}</h4>
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
            {isvisible && <EditPersonalData isvisible={isvisible} setIsvisible={setIsvisible} />}
            {password && <ChangePassword password={password} setPassword={setPassword} />}

        </div>
    );
};

export default PersonalArea;
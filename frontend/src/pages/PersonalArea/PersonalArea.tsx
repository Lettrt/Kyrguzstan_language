import React, { FC, useEffect, useState } from 'react';
import s from './PersonalArea.module.css'
import EditPersonalData from './modal/EditPersonalData/EditPersonalData';
import ChangePassword from './modal/ChangePassword/ChangePassword';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchByUserData } from '../../store/slice/userSlice';
import PAAdvertising from '../../components/Swiper/PAAdvertising/PAAdvertising';
import avatar from '../../assets/Azat/Frame 167.png'
import pen from '../../assets/Azat/Vector (1).png'
import lock from '../../assets/Azat/Vector3.png'



const PersonalArea: FC = () => {
    const [isvisible, setIsvisible] = useState(false)
    const [password, setPassword] = useState(false)
    const dispatch = useAppDispatch()
    const { id, loading, user } = useAppSelector(state => state.user)
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
                    <img className={s.avatar} src={avatar} alt="user_avatar" />
                    <div>
                        <h2 className={s.username}>Username: {user?.username}</h2>
                        <h4 className={s.userinfo}>email:{user?.email}</h4>
                        <h4 className={s.userinfo}>id:{user?.id}</h4>
                        <div className={s.control_buttons} >
                            <button className={s.editing} onClick={() => setIsvisible(true)}><img className={s.pen} src={pen} alt="pen" />Редактировать личные данные</button>
                            <button className={s.change} onClick={() => setPassword(true)}><img className={s.pen} src={lock} alt="pen" />Сменить пароль</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.areaField}>
                <div className={s.panel}>
                    <button><img className={s.pen} src={pen} alt="pen" />Личные данные</button>
                    <button><img className={s.pen} src={pen} alt="pen" />Личные данные</button>
                    <button><img className={s.pen} src={pen} alt="pen" />Личные данные</button>
                    <button><img className={s.pen} src={pen} alt="pen" />Личные данные</button>
                    <PAAdvertising />
                </div>
                <div className={s.info}></div>
            </section>
            {isvisible && <EditPersonalData isvisible={isvisible} setIsvisible={setIsvisible} />}
            {password && <ChangePassword password={password} setPassword={setPassword} />}

        </div>
    );
};

export default PersonalArea;
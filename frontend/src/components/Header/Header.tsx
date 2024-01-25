import React, { ChangeEvent, Component, FC, useState } from 'react';
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import engFlag from '../../../src/assets/Bayel/IconsEnglish.png';
import kgFlag from '../../../src/assets/Bayel/Iconskyrgyzicon.png';
import searchIcon from '../../../src/assets/Bayel/IconssearchIcon.png'
import { useAppDispatch } from '../../store/hooks/hooks';
import Login from '../../pages/authScens/Login/Login';
import Registration from '../../pages/authScens/Registration/Registration';
// import { removeToken } from '../../store/slice/userSlice';


const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [enter, setEnter] = useState(false)
    const [register, setRegister] = useState(false)
    const [img, setImg] = useState('')
    // const logOut = () => {
    //     dispatch(removeToken())
    // }

    return (
        <header>
            <div className={s.container}>
                <div className={s.navbar}>
                    <nav>
                        <div className={s.logo}>
                            <Link to={'/'}><h1 className={s.title}>Language</h1></Link>
                            <label className={s.select_label}>
                                {
                                    <img src={img === 'KG' ? kgFlag : engFlag} alt="V" />

                                }
                                <select className={s.select} onChange={(e) => setImg(e.target.value)}>
                                    <option value="ENG" >Английский </option>
                                    <option value="KG">Кыргызский</option>
                                </select>
                            </label>

                        </div>
                        <ul className={s.menu}>
                            <li className={s.menu_item}><a href="#">Категории</a></li>
                            <li className={s.menu_item}><a href="#">Избранное</a></li>
                        </ul>
                        <div className={s.search}>
                            <input className={s.searchInp} type="text" placeholder='Поиск' />
                            <label className={s.searchIconLabel}>
                                <img src={searchIcon} alt="icon" />
                            </label>
                        </div>

                        <div className={s.btn_login}>
                            <button onClick={() => setEnter(!enter)} className={s.login}>Войти</button>
                            <button onClick={() => setRegister(!register)} className={s.register}>Зарегистрироваться</button>
                        </div>
                    </nav>
                </div>
            </div>
            {enter && <Login enter={enter} setEnter={setEnter} />}
            {register && <Registration />}
        </header>
    );
};

export default Header
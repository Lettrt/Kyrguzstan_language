import s from './Header.module.css'
import { Link } from 'react-router-dom';
import React, { ChangeEvent, Component, FC, useState } from 'react';
import rubFlag from '../../../src/assets/Bayel/IconsEnglish.png';
import usdFlag from '../../../src/assets/Bayel/Iconskyrgyzicon.png';
import searchIcon from '../../../src/assets/Bayel/IconssearchIcon.png'
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeToken } from '../../store/slice/userSlice';


const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [img, setImg] = useState('')
    const logOut = () => {
        dispatch(removeToken())
    }


    return (
        <header>
            <div className={s.container}>
                <div className={s.navbar}>
                    <nav>
                        <div className={s.logo}>
                            <h1 className={s.title}>Language</h1>
                            <label className={s.select_label}>
                                {
                                    <img src={img === 'ENG' ? rubFlag : usdFlag} alt="V" />

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
                            <Link to={'/preview-home'}><button className={s.login}>Войти</button></Link>
                            <Link to={'/sign-up'}><button className={s.register}>Зарегистрироваться</button></Link>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

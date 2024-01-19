import React, { FC, useState } from 'react';
import s from './Header.module.css'
import { Link } from 'react-router-dom';
import iconEng from '../../../src/assets/Bayel/IconsEnglish.png'


const Header: FC = () => {

    return (
        <header>
            <div className={s.container}>
                <div className={s.navbar}>
                    <nav>
                        <div className={s.logo}>
                            <h1>KyrgyzLanguage</h1>
                            <select>
                                <option value="" >Английский</option>
                                <option value="">Кыргызский</option>
                            </select>
                        </div>
                        <ul className={s.menu}>
                            <li className={s.menu_item}><a href="#">About</a></li>
                            <li className={s.menu_item}><a href="#">Home</a></li>
                            <li className={s.menu_item}><a href="#">Contact</a></li>
                            <li className={s.menu_item}><a href="#">Services</a></li>
                            <li className={s.menu_item}><a href="#">Team</a></li>
                        </ul>

                        <div className={s.btn_login}>
                            <Link to={'/sign-in'}><button className={s.login}>Войти</button></Link>
                            <Link to={'/sign-up'}><button className={s.register}>Зарегистрироваться</button></Link>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
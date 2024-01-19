
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
















import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/hooks'
import { removeToken } from '../../store/slice/userSlice'
// import { Link } from 'react-router-dom'

const Header: FC = () => {
	const dispatch = useAppDispatch()

	const logOut = () => {
		dispatch(removeToken())
	}
	return (
		<header>
			<Link to={'/sign-up'}>Registration</Link>
			<Link to={'/sign-in'}>Login</Link>
			<button onClick={logOut}>Log Out</button>
		</header>
	)
}


export default Header

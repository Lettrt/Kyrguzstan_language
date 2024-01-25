


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

    
    
import React, { FC, useState } from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import iconEng from '../../../src/assets/Bayel/IconsEnglish.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
// import { removeToken } from '../../store/slice/userSlice'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const { token2 } = useAppSelector(state => state.user)

    // const Out = () => {
    // 	dispatch(removeToken())
    // }

    console.log(token2)

  
  
  

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

                          
                            <h1>KyrgyzLanguage</h1>
                            <select>
                                <option value=''>Английский</option>
                                <option value=''>Кыргызский</option>
                            </select>
                        </div>
                        <ul className={s.menu}>
                            <li className={s.menu_item}>
                                <a href='#'>About</a>
                            </li>
                            <li className={s.menu_item}>
                                <a href='#'>Home</a>
                            </li>
                            <li className={s.menu_item}>
                                <a href='#'>Contact</a>
                            </li>
                            <li className={s.menu_item}>
                                <a href='#'>Services</a>
                            </li>
                            <li className={s.menu_item}>
                                <a href='#'>Team</a>
                            </li>

                          
                        </ul>
                        <div className={s.search}>
                            <input className={s.searchInp} type="text" placeholder='Поиск' />
                            <label className={s.searchIconLabel}>
                                <img src={searchIcon} alt="icon" />
                            </label>
                        </div>

<
                      
                      
                      
                        <div className={s.btn_login}>
                            <Link to={'/preview-home'}><button className={s.login}>Войти</button></Link>
                            <Link to={'/sign-up'}><button className={s.register}>Зарегистрироваться</button></Link>

                        
                        
                        
                        <div>
                            {/* <Button onClick={Out} variant='contained'>
								Out
							</Button>
							<Button
								onClick={() => dispatch(fetchByLogOut(token2))}
								variant='contained'
							>
								Log Out
							</Button> */}

                          
                          
                          
                        </div>
                    </nav>
                </div>
            </div>
        </header>

                      
                      
                      
    );
};

export default Header;

  
  
  
    )
}

export default Header

  
  
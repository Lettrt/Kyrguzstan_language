import React, { FC, useState } from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import iconEng from '../../../src/assets/Bayel/IconsEnglish.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
// import { removeToken } from '../../store/slice/userSlice'
import { Button } from '@mui/material'

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
	)
}

export default Header

import React, { FC, useState, FormEventHandler, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { UserData } from '../../../store/moduls'
import {
	fetchByAddNewUser,
	toggleRedirect,
} from '../../../store/slice/userSlice'
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import s from './Registration.module.scss'
import facebook from '../../../assets/Bayaman/facebook_ic.svg'
import google from '../../../assets/Bayaman/google_ic.svg'
import apple from '../../../assets/Bayaman/cib_apple.png'

const Registration: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { redirect, loading, error } = useAppSelector(state => state.user)
	const [userData, setUserData] = useState<UserData>({
		username: '',
		password: '',
		password2: '',
		email: '',
	})

	const getUserData = (key: string, value: string) => {
		setUserData({ ...userData, [key]: value })
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		console.log(userData)
		dispatch(fetchByAddNewUser(userData))
	}

	useEffect(() => {
		if (redirect) {
			navigate('/')
		}
		return () => {
			if (redirect) {
				dispatch(toggleRedirect(false))
			}
		}
	}, [dispatch, redirect])

	const [showPassword1, setShowPassword1] = useState(false)
	const [showPassword2, setShowPassword2] = useState(false)

	const handleClickShowPassword = (passwordNumber: number) => {
		if (passwordNumber === 1) {
			setShowPassword1(show => !show)
		} else if (passwordNumber === 2) {
			setShowPassword2(show => !show)
		}
	}

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
		passwordNumber: number
	) => {
		event.preventDefault()
		handleClickShowPassword(passwordNumber)
	}

	return (
		<div className={s.modal_login}>
			<form onSubmit={handleSubmit} className={s.form}>
				<h1>Добро пожаловать</h1>
				<h3>Добро пожаловать</h3>
				<TextField
					className={s.input_username}
					onChange={e => getUserData('username', e.target.value)}
					id='outlined-username-input'
					label='Create username'
					type='text'
					autoComplete='current-username'
				/>
				<TextField
					className={s.input_email}
					onChange={e => getUserData('email', e.target.value)}
					id='outlined-username-input'
					label='Enter email'
					type='email'
					autoComplete='current-email'
				/>
				<FormControl
					sx={{ width: '51ch' }}
					className={s.password1}
					variant='outlined'
				>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						onChange={e => getUserData('password', e.target.value)}
						id='outlined-adornment-password'
						type={showPassword1 ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={() => handleClickShowPassword(1)}
									onMouseDown={e => handleMouseDownPassword(e, 1)}
									edge='end'
								>
									{showPassword1 ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Create Password'
					/>
				</FormControl>

				<FormControl
					sx={{ width: '51ch' }}
					className={s.password2}
					variant='outlined'
				>
					<InputLabel htmlFor='outlined-adornment-password'>
						Confirm Password
					</InputLabel>
					<OutlinedInput
						onChange={e => getUserData('password2', e.target.value)}
						id='outlined-adornment-password'
						type={showPassword2 ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={() => handleClickShowPassword(2)}
									onMouseDown={e => handleMouseDownPassword(e, 2)}
									edge='end'
								>
									{showPassword2 ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password2'
					/>
				</FormControl>

				<div className={s.checkbox_block}>
					<div className={s.checkbox1}>
						<input type='checkbox' />{' '}
						<p>
							Согласны ли Вы с <span>Политикой конфиденциальности</span>
						</p>
					</div>
					<div className={s.checkbox2}>
						<input type='checkbox' /> <p>Еще одно подтверждение</p>
					</div>
				</div>

				<button disabled={loading} className={s.registr}>
					Зарегистрироваться
				</button>
				<div className={s.another_way_enter}>
					<h3>или Зарегистрироваться с помощью</h3>
				</div>
				<div className={s.social_network}>
					<div className={s.social_block}>
						<img src={facebook} alt='Facebook' />
					</div>
					<div className={s.social_block}>
						<img src={google} alt='Google' />
					</div>
					<div className={s.social_block}>
						<img src={apple} alt='Apple' />
					</div>
					{/* ... Другие социальные сети */}
				</div>
				<div className={s.login_again}>
					<p>
						Уже есть аккаунт?
						<Link className={s.login_text} to={'/sign-in'}>
							Войти
						</Link>
					</p>
				</div>
			</form>
		</div>
	)
}

export default Registration

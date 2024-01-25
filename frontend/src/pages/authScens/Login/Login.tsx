import React, { FC, FormEventHandler, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { UserData } from '../../../store/moduls'
import { fetchByLogin } from '../../../store/slice/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import s from './Login.module.scss'
import facebook from '../../../assets/Bayaman/facebook_ic.svg'
import google from '../../../assets/Bayaman/google_ic.svg'
import apple from '../../../assets/Bayaman/cib_apple.png'
import {
	TextField,
	FormControl,
	InputLabel,
	IconButton,
	InputAdornment,
	OutlinedInput,
} from '@mui/material'
import { CheckBox, Label, Visibility, VisibilityOff } from '@mui/icons-material'


interface FormProps {
	setEnter: (e: boolean) => void
	enter: boolean
}

const Login: FC<FormProps> = ({ setEnter, enter }) => {
	const { error } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [userData, setUserData] = useState<UserData>({
		username: '',
		password: '',
	})
	// console.log(userData)

	const getUserData = (key: string, value: string) => {
		setUserData({ ...userData, [key]: value })
	}

	const handleForm: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		dispatch(fetchByLogin(userData))
	}

	useEffect(() => {
		return () => navigate('/', { replace: true })
	}, [])

	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const hideModal = () => {
		setEnter(false)
	}

	useEffect(() => {
		// При рождении убрать скрол
		document.body.style.overflow = 'hidden'
		// При нажатии на ESC закрыть модальное окно
		document.addEventListener('keydown', (e) => {
			e.code === 'Escape' && hideModal()
		})
		// При рождении навесит другое событие на кнопку назад у браузера
		if (enter) {
			window.history.pushState(null, '', window.location.href)
			window.onpopstate = () => setEnter(false);
		}
		return () => {
			// При закрытии  модального окна вернуть скролл
			document.body.style.overflow = 'auto'
			// При закрытии убрать действия с кнопки ESC
			document.removeEventListener('keydown', () => { })
			// При закрытии вернуть действие по умолчанию на кнопку назад в браузере
			if (!enter) window.history.back();
			window.onpopstate = () => { };
		}
	}, [])

	return (
		<div onClick={hideModal} className={s.modal_login}>
			<div onClick={(e) => e.stopPropagation()} >
				<form onSubmit={handleForm} className={s.form}>
					<h1>Добро пожаловать</h1>
					<h3>Добро пожаловать</h3>
					{error ? (
						<TextField error id='outlined-error' label='Error' />
					) : (
						<TextField
							className={s.input_username}
							onChange={e => getUserData('username', e.target.value)}
							id='outlined-username-input'
							label='Create username'
							type='text'
							autoComplete='current-username'
						/>
					)}
					{error ? (
						<TextField error id='outlined-error' label='Error' />
					) : (
						<FormControl sx={{ width: '51ch' }} variant='outlined'>
							<InputLabel htmlFor='outlined-adornment-password'>
								Password
							</InputLabel>
							<OutlinedInput
								onChange={e => getUserData('password', e.target.value)}
								id='outlined-adornment-password'
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label='Password'
							/>
						</FormControl>
					)}

					<div className={s.form_checkbox}>
						<div className={s.remember_me}>
							<input type='checkbox' /> Запомнить меня
						</div>
						<div className={s.restore_password}>Восстановить пароль</div>
					</div>
					<button className={s.enter_btn}>Войти</button>
					<div className={s.another_way_enter}>
						<h3>или Войти с помощью</h3>
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
					<div className={s.registr_again}>
						<p>
							Еще не зарегистрированы?
							<Link className={s.registr_text} to={'/sign-up'}>
								Регистрация
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login

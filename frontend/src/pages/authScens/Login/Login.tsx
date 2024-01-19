import React, { FC, useState, FormEventHandler, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { UserData } from '../../../store/moduls'
import { fetchByLogin } from '../../../store/slice/userSlice'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
	const { error } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [userData, setUserData] = useState<UserData>({
		username: '',
		password: '',
	})

	const getUserData = (key: string, value: string) => {
		setUserData({ ...userData, [key]: value })
	}

	const handleForm: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		dispatch(fetchByLogin(userData))
	}

	useEffect(() => {
		return () => navigate('/', { replace: true }) // replace: true - чтобы пользователь не мог обратно вернуться на страницу логин
	}, [])
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleForm}>
				<input
					onChange={e => getUserData('username', e.target.value)}
					type='text'
					placeholder='username'
				/>
				<input
					onChange={e => getUserData('password', e.target.value)}
					type='password'
					placeholder='password'
				/>
				<button>Sign in</button>
			</form>
			<h5 style={{ color: 'red' }}>{error && error}</h5>
		</div>
	)
}

export default Login

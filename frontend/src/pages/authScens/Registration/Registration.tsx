import React, { FC, useState, FormEventHandler, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { UserData } from '../../../store/moduls'
import {
	fetchByAddNewUser,
	toggleRedirect,
} from '../../../store/slice/userSlice'

const Registration: FC = () => {
	const navigate = useNavigate()
	const [showPass, setShowPass] = useState(false)
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
			navigate('/sign-in')
		}
		return () => {
			dispatch(toggleRedirect(false))
		}
	}, [dispatch, redirect])

	return (
		<div>
			<h1>Registration</h1>
			<form onSubmit={handleSubmit}>
				<input
					value={userData.username}
					onChange={e => getUserData('username', e.target.value)}
					type='text'
					placeholder='Username'
				/>
				<input
					value={userData.email}
					onChange={e => getUserData('email', e.target.value)}
					type='email'
					placeholder='email'
				/>
				<input
					value={userData.password}
					onChange={e => getUserData('password', e.target.value)}
					type={showPass ? 'text' : 'password'}
					placeholder='password'
				/>
				<input
					value={userData.password2}
					onChange={e => getUserData('password2', e.target.value)}
					type={showPass ? 'text' : 'password'}
					placeholder='password2'
				/>
				<button disabled={loading}>Sign up</button>
				<label>
					<input onChange={() => setShowPass(!showPass)} type='checkbox' /> Show
					passwords
				</label>
				<h5 style={{ color: 'red' }}>{error && error}</h5>
			</form>
		</div>
	)
}

export default Registration

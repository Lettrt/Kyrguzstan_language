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

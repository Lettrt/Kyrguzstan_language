import React, { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Login from '../../pages/authScens/Login/Login'
import Registration from '../../pages/authScens/Registration/Registration'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import PersonalArea from '../../pages/PersonalArea/PersonalArea';
import NotFount from '../../pages/NotFount/NotFount';        
import PreviewsHome from '../../pages/PreviewsHome/PreviewsHome'
import { getLSToken } from '../../LS'
import { setToken } from '../../store/slice/userSlice'

const Main: FC = () => {
  const { loading, token } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Registration />} />
                <Route path='/personal-area' element={<PersonalArea />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>
    );
};        

	//проверка токена в локальном харнилище локалсторедж, если есть то сохраняем в инишиалстейт
	useEffect(() => {
		let lsToken = getLSToken()

		if (lsToken !== null || lsToken !== undefined) {
			dispatch(setToken(lsToken))
		}
	}, [dispatch])

	//при изменении токена перерисовывается страница(при удалении)
	// useEffect(() => {
	// 	if (token) {
	// 		dispatch()
	// 	}
	// }, [dispatch,token])
	return token ? (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	) : (
		<Routes>
			<Route path='/' element={<PreviewsHome />} />
			<Route path='/sign-in' element={<Login />} />
			<Route path='/sign-up' element={<Registration />} />
		</Routes>
	)
}

export default Main

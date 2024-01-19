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
import DetailCard from '../../pages/DetailCard/DetailCard'
import AllCard from '../../pages/AllCard/AllCard'

const Main: FC = () => {
    const { token } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    //проверка токена в локальном харнилище локалсторедж, если есть то сохраняем в инишиалстейт
    useEffect(() => {
        let lsToken = getLSToken()

        if (lsToken !== null || lsToken !== undefined) {
            dispatch(setToken(lsToken))
        }
    }, [dispatch])

    return token ? (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/personal-area' element={<PersonalArea />} />
                <Route path='/detailcard/:id' element={<DetailCard />} />
                <Route path='/allcard/:name/:id' element={<AllCard />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>
    ) : (
        <main>
            <Routes>
                <Route path='/' element={<PreviewsHome />} />
                <Route path='/detailcard/:id' element={<DetailCard />} />
                <Route path='/allcard/:name/:id' element={<AllCard />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>

    )
};



export default Main

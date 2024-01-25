import React, { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import PersonalArea from '../../pages/PersonalArea/PersonalArea';
import NotFount from '../../pages/NotFount/NotFount';
import PreviewsHome from '../../pages/PreviewsHome/PreviewsHome'
import { getLSToken } from '../../LS'
import { setToken } from '../../store/slice/userSlice'
import DetailCard from '../../pages/DetailCard/DetailCard'
import AllCard from '../../pages/AllCard/AllCard'
import Category from '../../pages/Category/Category'
import AllCategory from '../../pages/AllCategory/AllCategory'
import s from './Main.module.css'
import Login from '../../pages/authScens/Login/Login';
import Registration from '../../pages/authScens/Registration/Registration';

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
                <Route path='/personal' element={<Login />} />
                <Route path='/detailcard/:id' element={<DetailCard />} />
                <Route path='/allcard/:name/:id' element={<AllCard />} />
                <Route path='/category' element={<Category />} />
                <Route path='/allcategory' element={<AllCategory />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>
    ) : (
        <main>
            <Routes>
                <Route path='/' element={<PreviewsHome />} />
                <Route path='/detailcard/:id' element={<DetailCard />} />
                <Route path='/allcard/:name/:id' element={<AllCard />} />
                <Route path='/category' element={<Category />} />
                <Route path='/personal-area' element={<PersonalArea />} />
                <Route path='/allcategory' element={<AllCategory />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>

    )
};



export default Main

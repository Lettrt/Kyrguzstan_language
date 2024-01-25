import React, { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import PersonalArea from '../../pages/PersonalArea/PersonalArea'
import NotFount from '../../pages/NotFount/NotFount'
import DetailCard from '../../pages/DetailCard/DetailCard'
import AllCard from '../../pages/AllCard/AllCard'
import Category from '../../pages/Category/Category'
import AllCategory from '../../pages/AllCategory/AllCategory'
import s from './Main.module.css'
import { getLSId, getLSRefresh, getLSToken } from '../../LS'
import { setId, setRefresh, setToken } from '../../store/slice/userSlice'

const Main: FC = () => {
    const { token } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    //проверка токена в локальном харнилище локалсторедж, если есть то сохраняем в инишиалстейт
    useEffect(() => {
        let lsToken = getLSToken()
        let lsToken2 = getLSRefresh()
        let lsId = getLSId()

        if (lsToken !== null || lsToken !== undefined) {
            dispatch(setToken(lsToken))
        }
        if (lsToken2 !== null || lsToken2 !== undefined) {
            dispatch(setRefresh(lsToken2))
        }
        if (lsId !== null || lsId !== undefined) {
            dispatch(setId(lsId))
        }

    }, [dispatch])

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail-card/:name' element={<DetailCard />} />
                <Route path='/allcard' element={<AllCard />} />
                <Route path='/category' element={<Category />} />
                <Route path='/allcategory' element={<AllCategory />} />
                {
                    token &&
                    <Route path='/personal-area' element={<PersonalArea />} />
                }
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>
    )
};


export default Main

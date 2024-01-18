import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/authScens/Login/Login';
import Registration from '../../pages/authScens/Registration/Registration';
import PersonalArea from '../../pages/PersonalArea/PersonalArea';
import NotFount from '../../pages/NotFount/NotFount';

const Main: FC = () => {
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

export default Main;
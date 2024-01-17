import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/authScens/Login/Login';
import Registration from '../../pages/authScens/Registration/Registration';

const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Registration />} />
            </Routes>
        </main>
    );
};

export default Main;
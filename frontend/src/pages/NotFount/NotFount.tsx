import React, { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFount: FC = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/', { replace: true })
    //     }, 4000)
    // }, [navigate])
    return (
        <div className=''>
            <h1>404 Error</h1>
            <h2>Pages Not Found</h2>
            <Link to={'/'}><h3>Return to Main Page</h3></Link>
        </div>
    );
};

export default NotFount;
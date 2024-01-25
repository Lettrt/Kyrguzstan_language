import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Card from '../Card/Card';
import './Output.css'

const Output: FC = () => {

    const { error, loading, card } = useAppSelector(state => state.card)
    return (
        <div className='container'>
            {/* <div className='filmWrapper'>
                {
                    loading ?
                        <h1>LOADING...</h1>
                        : error ?
                            <span className='error animate__flash animate__animated'>{error}</span>
                            : card.length >= 0 &&
                            card.map(el => <Card key={el.kinopoiskId} {...el} />)
                }

            </div> */}
        </div>
    );
};

export default Output;
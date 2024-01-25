import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchByDetailfilm } from '../../store/slice/detailSlice';
import './DetailCard.scss';
import 'animate.css'

const DetailCard: FC = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const [query] = useState(searchParams.get('c'));
    const { loading, detail } = useAppSelector(state => state.detail);


    useEffect(() => {
        query && dispatch(fetchByDetailfilm(query))
    }, [dispatch, query])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='container'>
            <div className='detailBox '>
                <Link to={'/'}><button>Back</button></Link>
                <div className='detailCard animate__animated animate__zoomInDown' >
                    <img width={300} src={detail?.posterUrl} alt={detail?.nameOriginal} />
                    <h2>{detail?.nameRu ? detail.nameRu : detail?.nameOriginal}</h2>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;
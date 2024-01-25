import React, { FC } from 'react';
import { IFilms } from '../../store/moduls';
import { Link } from 'react-router-dom';
import './Card.scss';



const Card: FC<IFilms> = ({ kinopoiskId, nameEn, nameOriginal, nameRu, posterUrl }) => {
    return (

        <div className='filmCard animate__animated animate__fadeInDown'>
            {/* <Link to={`/detail-card/${nameRu || nameOriginal || nameEn}?c=${kinopoiskId}`}>
                <img width={270} src={posterUrl} alt={nameRu ? nameRu : nameOriginal} />
                <h2>
                    {nameRu ? nameRu : nameOriginal.length > 15 ? nameRu ? nameRu : nameOriginal.slice(0, 15) + '...' : nameRu ? nameRu : nameOriginal}
                </h2>
            </Link> */}
        </div>



    );
};

export default Card;
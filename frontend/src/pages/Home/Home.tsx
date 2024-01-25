
import React, { FC, useEffect } from 'react';
import Advertising from '../../components/Swiper/Advertising/Advertising';
import { useAppDispatch } from '../../store/hooks/hooks';
import { fetchByListFilms } from '../../store/slice/cardSlice';
import Output from '../../components/Output/Output';
import arrowRight from '../../../src/assets/Bayel/IconsarrowRight.png'
import s from './Home.module.scss'
import filmIcon from '../../../src/assets/Bayel/Photofilm.png'
import businnesIcon from '../../../src/assets/Bayel/Photobusiness.png'
import eduIcon from '../../../src/assets/Bayel/Photoedu.png'
import acqIcon from '../../../src/assets/Bayel/Photoacquaintance.png'
import { Link } from 'react-router-dom';


const Home: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchByListFilms())
    }, [dispatch])

    return (
        <>
            <div className={s.Home}>
                <Advertising />
                <div className={s.PopularCards}>
                    <div className={s.container}>
                        <div className={s.PopularCardsBox}>
                            <div className={s.PopularCardsTitle}>
                                <h2>Популярные карточки</h2>
                                <div className={s.moreCards}>
                                    <Link to={'/allcard'}><button>Больше карточек</button></Link>
                                    <img src={arrowRight} alt="rrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Output />

                <div className={s.advertising}>
                    <div className={s.container}>
                        <div className={s.advertisingbox}>
                            <div className={s.LeftAdvertising}></div>
                            <div className={s.RightAdvertising}></div>
                        </div>
                    </div>
                </div>


                <div className={s.PopularCards}>
                    <div className={s.container}>
                        <div className={s.PopularCardsBox}>
                            <div className={s.PopularCardsTitle}>
                                <h2>Популярные категории</h2>
                                <div className={s.moreCards}>
                                    <Link to={'/allcategory'}><button>Больше категорий</button></Link>
                                    <img src={arrowRight} alt="rrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.PopularCategories}>
                    <div className={s.container}>
                        <div className={s.PopularCategoriesBox}>
                            <div className={s.PopularCategoriesCard}>
                                <img src={filmIcon} alt="logo" />
                                <h2>Фильмы и сериалы</h2>
                            </div>

                            <div className={s.PopularCategoriesCard}>
                                <img src={businnesIcon} alt="logo" />
                                <h2>Бизнес</h2>
                            </div>

                            <div className={s.PopularCategoriesCard}>
                                <img src={eduIcon} alt="logo" />
                                <h2>Образование</h2>
                            </div>

                            <div className={s.PopularCategoriesCard}>
                                <img src={acqIcon} alt="logo" />
                                <h2>Знакомства</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
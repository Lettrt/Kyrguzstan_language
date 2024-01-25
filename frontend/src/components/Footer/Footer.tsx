import React, { FC } from 'react';

import instagram from '../../../src/assets/Bayel/Instagraminstagram.png'
import tiktok from '../../../src/assets/Bayel/Vectortiktok.png'
import youtube from '../../../src/assets/Bayel/youtube (Stroke)youtube.png'

import s from './Footer.module.css'

const Footer: FC = () => {
    return (
        <footer>
            <div className={s.container}>
                <div className={s.lower_area}>
                    <div className={s.footer_box}>
                        <h2 className={s.footerTitle}>Language</h2>


                        <ul className={s.footer_menu}>
                            <li><a href="#" className={s.footer_item}>Home</a></li>
                            <li><a href="#" className={s.footer_item}>Contact</a></li>
                            <li><a href="#" className={s.footer_item}>Services</a></li>
                            <li><a href="#" className={s.footer_item}>About</a></li>
                        </ul>


                        <div className={s.footer_icons}>
                            <img src={instagram} alt="instagram" />
                            <img src={tiktok} alt="facebook" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
import React, { FC, useEffect } from 'react';
import s from './ChangePassword.module.css'
interface FormProps {
    setPassword: (e: boolean) => void
    password: boolean
}
const ChangePassword: FC<FormProps> = ({ setPassword, password }) => {
    const hideModal = () => {
        setPassword(false)
    }
    useEffect(() => {
        // При рождении убрать скрол
        document.body.style.overflow = 'hidden'
        // При нажатии на ESC закрыть модальное окно
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' && hideModal()
        })
        // При рождении навесит другое событие на кнопку назад у браузера
        if (password) {
            window.history.pushState(null, '', window.location.href)
            window.onpopstate = () => setPassword(false);
        }
        return () => {
            // При закрытии  модального окна вернуть скролл
            document.body.style.overflow = 'auto'
            // При закрытии убрать действия с кнопки ESC
            document.removeEventListener('keydown', () => { })
            // При закрытии вернуть действие по умолчанию на кнопку назад в браузере
            if (!password) window.history.back();
            window.onpopstate = () => { };
        }
    }, [])
    return (
        <div onClick={hideModal} className={s.modal}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal_container}>
                <span onClick={() => setPassword(false)} className={s.close}>&#10006;</span>
                <h2>Password</h2>
            </div>
        </div>
    );
};

export default ChangePassword;
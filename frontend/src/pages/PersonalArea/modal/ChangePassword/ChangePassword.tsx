import React, { FC, useEffect } from 'react';
import s from './ChangePassword.module.css'
interface FormProps {
    setPassword: (e: boolean) => void
}
const ChangePassword: FC<FormProps> = ({ setPassword }) => {
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
        // if (isvisible) {
        //     window.history.pushState(null, '', window.location.href)
        //     window.onpopstate = () => setIsvisible(false);
        // }
        return () => {
            // При закрытии  модального окна вернуть скролл
            document.body.style.overflow = 'auto'
            // При закрытии убрать действия с кнопки ESC
            document.removeEventListener('keydown', () => { })
            // При закрытии вернуть действие по умолчанию на кнопку назад в браузере
            // if (!isvisible) window.history.back();
            // window.onpopstate = () => { };
        }
    }, [])
    return (
        <div onClick={hideModal} className={s.modal}>
            <div className={s.modal_container}>
                <span onClick={() => setPassword(false)} className={s.close}>&#10006;</span>
                <h2>Password</h2>
            </div>
        </div>
    );
};

export default ChangePassword;
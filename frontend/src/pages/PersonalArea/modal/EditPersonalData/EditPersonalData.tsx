import React, { FC, FormEventHandler, useEffect, useState } from 'react';
import s from './EditPersonalData.module.css'
import { Login, Logout } from '../../../../store/moduls';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { fetchByChangeLogin } from '../../../../store/slice/userSlice';
import { log } from 'console';


interface FormProps {
    setIsvisible: (e: boolean) => void
    isvisible: boolean
}

const EditPersonalData: FC<FormProps> = ({ setIsvisible, isvisible }) => {
    const dispatch = useAppDispatch()
    const { id, token } = useAppSelector(state => state.user)
    const [login, setLogin] = useState<Login>({
        email: '',
        username: '',
    })

    const getLogin = (key: string, value: string) => {
        setLogin({ ...login, [key]: value })
    }

    const logout: Logout = {
        id,
        login,
        token,
    }

    // console.log(logout);

    const handleChangeLogin: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (id) {
            dispatch(fetchByChangeLogin(logout))
        }
        setIsvisible(false)
    }

    const hideModal = () => {
        setIsvisible(false)
    }

    // const handleChange = (e) => {
    //     console.log();

    // }
    useEffect(() => {
        // При рождении убрать скрол
        document.body.style.overflow = 'hidden'
        // При нажатии на ESC закрыть модальное окно
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' && hideModal()
        })
        // При рождении навесит другое событие на кнопку назад у браузера
        if (isvisible) {
            window.history.pushState(null, '', window.location.href)
            window.onpopstate = () => setIsvisible(false);
        }
        return () => {
            // При закрытии  модального окна вернуть скролл
            document.body.style.overflow = 'auto'
            // При закрытии убрать действия с кнопки ESC
            document.removeEventListener('keydown', () => { })
            // При закрытии вернуть действие по умолчанию на кнопку назад в браузере
            if (!isvisible) window.history.back();
            window.onpopstate = () => { };
        }
    }, [])
    return (
        <div onClick={hideModal} className={s.modal}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal_container}>
                <span onClick={() => setIsvisible(false)} className={s.close}>&#10006;</span>
                <form className={s.change_login} onSubmit={handleChangeLogin}>
                    <input value={login.username} onChange={(e) => getLogin('username', e.target.value)} type="text" />
                    <input value={login.email} onChange={(e) => getLogin('email', e.target.value)} type="email" />
                    <input type="file" accept='image/*,.png,.jpg,.gif,.wep' />
                    <button>Change</button>
                </form>
            </div>
        </div>
    );
};

export default EditPersonalData;
import axios from 'axios'
import { UserData, Logout } from '../store/moduls'

const instanse = axios.create({
    baseURL: 'http://5.35.95.84:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const authApi = {
    addNewUser(userData: UserData) {
        return instanse.post('user/registration/', userData)
    },
    login(userData: UserData) {
        return instanse.post('user/authentication/', userData)
    },
    LogOut(refresh: string) {
        // const headers = { Authorization: `Bearer ${refresh}` }
        return instanse.post('user/logout/', refresh)
    },
    getUserData(id: number) {
        return instanse.get(`user/users/${id}/`)
    },
    putChangeLogin(logout: Logout) {
        const headers = { "Authorization": `Bearer ${logout.token}` }
        return instanse.put(`user/users/${logout.id}/`, logout.login, { headers })
    },
    getAllFilms() {
        return instanse.get('webapp/themes/')
    },
    getById(id: string) {
        return instanse.get(`webapp/themes/${id}`)
    },
}

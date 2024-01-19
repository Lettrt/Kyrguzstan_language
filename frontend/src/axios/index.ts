import axios from "axios";
import { Logout } from '../store/moduls'




const instanse = axios.create({
    baseURL: 'http://5.35.95.84:8000/api/',
    headers: {
        "Content-Type": "application/json",
    }
})

export const authApi = {
    getUserData(id: number) {
        return instanse.get(`user/users/${id}/`)
    },
    putChangeLogin(logout: Logout) {
        return instanse.put(`user/users/${logout.id}/`, logout.login)
    }
}
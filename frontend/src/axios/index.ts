import axios from 'axios'
import { UserData, Logout } from '../store/moduls'

const instance = axios.create({
	baseURL: 'http://5.35.95.84:8000/api/',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const authApi = {
	addNewUser(userData: UserData) {
		return instance.post('user/registration/', userData)
	},
	login(userData: UserData) {
		return instance.post('token/', userData)
	},
      getUserData(id: number) {
        return instanse.get(`user/users/${id}/`)
    },
    putChangeLogin(logout: Logout) {
        return instanse.put(`user/users/${logout.id}/`, logout.login)
    }
}

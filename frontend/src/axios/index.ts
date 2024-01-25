import axios from 'axios'
import { UserData, Logout, UserToken } from '../store/moduls'

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
		return instanse.put(`user/users/${logout.id}/`, logout.login)
	},
}

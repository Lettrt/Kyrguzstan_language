import axios from 'axios'
import { UserData } from '../store/moduls'

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
}

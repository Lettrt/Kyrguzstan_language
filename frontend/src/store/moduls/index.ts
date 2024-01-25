export type UserData = {
	username: string
	password: string
	password2?: string
	email?: string
}

export type UserReq = UserToken & {
	avatar: null | string
	email: string
	id: string | number
	username: string
}
export type UserToken = {
	access: string
	refresh: string
	user: UserInfo | null
}

export type UserInfo = {
	avatar: null | string
	email: string
	id: number
	username: string
}

export type Login = {
	username: string
	email: string
}

export type Logout = {
	login: Login
	id: number | undefined | null
	token: string | null
}

export type IFilms = {
	nameRu: string | null
	nameEn: string | null
	kinopoiskId: number
	nameOriginal: string
	posterUrl: string
}

export type Refresh = {
	refresh: string
}




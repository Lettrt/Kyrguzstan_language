export type UserData = {
	username: string
	password: string
	password2?: string
	email?: string
}

export type UserToken = {
	access: string
	// refresh: string
}

export type UserReq = UserToken & {
	avatar: null | string
	email: string
	id: string
	username: string
}

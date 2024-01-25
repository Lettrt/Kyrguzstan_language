export type UserData = {

  
  
	username: string
	password: string
	password2?: string
	email?: string

  
  
    username: string
    password: string
    password2?: string
    email?: string
}

export type UserToken = {
    access: string
    refresh: string

  
  
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
	user: UserReq | null
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

  
    login: Login
    id: number | undefined | null
    token: string | null

  
}

export type Refresh = {
	refresh: string
}

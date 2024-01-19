export type UserData = {
    username: string
    password: string
    email?: string
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
}
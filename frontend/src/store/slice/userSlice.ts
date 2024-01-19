import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData, UserReq, UserToken } from '../moduls'
import { authApi } from '../../axios'
import { removeLSToken, setLSToken } from '../../LS'
import { access } from 'fs'

type UserState = {
	loading: boolean
	error: null | string
	token: null | string
	// id: null | number
	redirect: boolean
	user: null
}

const initialState: UserState = {
	error: null,
	loading: false,
	token: null,
	// id: 3,
	redirect: false,
	user: null,
}

export const fetchByAddNewUser = createAsyncThunk<
	UserReq,
	UserData,
	{ rejectValue: string }
>('user/fetchByAddNewUser', async (userData, { rejectWithValue }) => {
	const res = await authApi.addNewUser(userData)
	console.log(res)

	if (res.status !== 201) {
		return rejectWithValue('Server error')
	}

	return res.data
})

export const fetchByLogin = createAsyncThunk<
	UserToken,
	UserData,
	{ rejectValue: string }
>('user/fetchByLogin', async (userData, { rejectWithValue }) => {
	const res = await authApi.login(userData)
	// console.log(res)
	if (res.status !== 200) {
		return rejectWithValue('Server error')
	}

	return res.data
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleRedirect(state, action: PayloadAction<boolean>) {
			state.redirect = action.payload
		},
		setToken(state, action: PayloadAction<string | null>) {
			state.token = action.payload
		},
		removeToken(state) {
			state.token = null
			removeLSToken()
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(fetchByAddNewUser.pending, state => {
			state.loading = true
		})
		addCase(fetchByAddNewUser.fulfilled, (state, action) => {
			state.loading = false
			if (action.payload.access) {
				state.redirect = true
			}
		})
		addCase(fetchByAddNewUser.rejected, (state, action) => {
			state.loading = false
			if (action.error.message?.includes('400')) {
				state.error = 'Ваши пароли не совпадают!'
			}
		})
		addCase(fetchByLogin.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByLogin.fulfilled, (state, action) => {
			state.loading = false
			state.token = action.payload.access
			setLSToken(action.payload.access)
		})
		addCase(fetchByLogin.rejected, (state, action) => {
			state.loading = false
			if (action.error.message?.includes('401')) {
				state.error = 'Пользователь не найден!'
			}
		})
	},
})

export const { toggleRedirect, setToken, removeToken } = userSlice.actions

export default userSlice.reducer

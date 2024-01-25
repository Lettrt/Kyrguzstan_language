import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    UserData,
    UserReq,
    UserToken,
    Logout,
    UserInfo,
    Refresh,
} from '../moduls'
import { authApi } from '../../axios'
import { removeLSToken, setLSId, setLSRefresh, setLSToken } from '../../LS'
import { StringLiteral } from 'typescript'

type UserState = {
    loading: boolean
    error: null | string
    token: null | string
    token2: null | string
    id: null | undefined | number
    redirect: boolean
    user: null | UserInfo
}

const initialState: UserState = {
    error: null,
    loading: false,
    token: null,
    token2: null,
    id: null,
    redirect: false,
    user: null,
}

export const fetchByAddNewUser = createAsyncThunk<
    UserReq,
    UserData,
    { rejectValue: string }
>('user/fetchByAddNewUser', async (UserData, { rejectWithValue }) => {
    const res = await authApi.addNewUser(UserData)
    // console.log(res)
    if (res.status !== 201) {
        return rejectWithValue('Server error')
    }
    return res.data as UserReq
})

export const fetchByLogin = createAsyncThunk<
    UserToken,
    UserData,
    { rejectValue: string }
>('user/fetchByLogin', async (UserData, { rejectWithValue }) => {
    const res = await authApi.login(UserData)
    console.log(res);
    if (res.status !== 201) {
        return rejectWithValue('Server error')
    }
    return res.data as UserToken
})

export const fetchByUserData = createAsyncThunk<
    UserInfo,
    number,
    { rejectValue: string }
>('user/fetchByUserData', async (id, { rejectWithValue }) => {
    const res = await authApi.getUserData(id)
    console.log(res)
    if (res.status !== 200) {
        return rejectWithValue('Server error')
    }
    return res.data as UserInfo
})

export const fetchByChangeLogin = createAsyncThunk<UserInfo, Logout, { rejectValue: string }>(
    'user/fetchByChangeLogin',
    async (logout, { rejectWithValue }) => {
        const res = await authApi.putChangeLogin(logout)
        console.log(res);
        // if (res.status !== 200) {
        //     return rejectWithValue('Server error')
        // }
        return res.data as UserInfo
    }
)

// export const fetchByLogOut = createAsyncThunk<
// 	string,
// 	UserToken,
// 	{ rejectValue: string }
// >('user/fetchByLogOut', async (refresh, { rejectWithValue }) => {
// 	const res = await authApi.LogOut(refresh)
// 	console.log(res)
// 	// if (res.status !== 200) {
// 	// 	return rejectWithValue('Server error')
// 	// }
// 	return ''
// })

// export const fetchByLogOut = createAsyncThunk<
// 	void,
// 	Refresh,
// 	{ rejectValue: string }
// >('user/fetchByLogOut', async (refresh, { rejectWithValue }) => {
// 	const res = await authApi.LogOut(refresh)
// 	console.log(res)
// })

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
        setRefresh(state, action: PayloadAction<string | null>) {
            state.token2 = action.payload
        },
        setId(state, action: PayloadAction<string | null>) {
            state.id = Number(action.payload)
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
            state.token2 = action.payload.refresh
            setLSToken(action.payload.access)
            setLSRefresh(action.payload.refresh)
            state.id = action.payload.user?.id
            setLSId(String(action.payload.user?.id))
        })
        addCase(fetchByLogin.rejected, (state, action) => {
            state.loading = false
            if (action.error.message?.includes('401')) {
                state.error = 'Пользователь не найден!'
            }
        })

        // addCase(fetchByLogOut.pending, state => {
        // 	state.loading = true
        // 	state.error = null
        // })
        // addCase(fetchByLogOut.fulfilled, (state, action) => {
        // 	state.loading = false
        // 	state.token = action.payload.refresh
        // 	setLSToken(action.payload.refresh)
        // })
        // addCase(fetchByLogOut.rejected, (state, action) => {
        // 	state.loading = false
        // 	if (action.error.message?.includes('401')) {
        // 		state.error = 'Пользователь не найден!'
        // 	}
        // })

        // ===============================

        addCase(fetchByUserData.pending, state => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByUserData.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        addCase(fetchByUserData.rejected, (state, action) => {
            state.loading = false
            if (action.error.message?.includes('401')) {
                state.error = 'User not fount'
            }
        })
        // ====================
        addCase(fetchByChangeLogin.pending, state => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByChangeLogin.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        addCase(fetchByChangeLogin.rejected, (state, action) => {
            state.loading = false
            if (action.error.message?.includes('400')) {
                state.error = 'User not fount'
            }
        })
    },
})

export const { toggleRedirect, setToken, setRefresh, setId } = userSlice.actions

export default userSlice.reducer

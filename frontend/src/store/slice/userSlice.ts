import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../axios"
import { Login, Logout, UserInfo } from "../moduls"



type UserState = {
    loading: boolean
    error: null | string
    token: null | string
    id: null | number
    redirect: boolean
    user: null | UserInfo
}

const initialState: UserState = {
    error: null,
    loading: false,
    token: null,
    id: 3,
    redirect: false,
    user: null
}

export const fetchByUserData = createAsyncThunk<UserInfo, number, { rejectValue: string }>(
    'user/fetchByUserData',
    async (id, { rejectWithValue }) => {
        const res = await authApi.getUserData(id)
        // console.log(res);
        if (res.status !== 200) {
            return rejectWithValue('Server error')
        }
        return res.data as UserInfo
    }
)

export const fetchByChangeLogin = createAsyncThunk<UserInfo, Logout, { rejectValue: string }>(
    'user/fetchByChangeLogin',
    async (logout, { rejectWithValue }) => {
        const res = await authApi.putChangeLogin(logout)
        // console.log(res);
        if (res.status !== 200) {
            return rejectWithValue('Server error')
        }
        return res.data as UserInfo
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: ({ addCase }) => {

        // user information
        addCase(fetchByUserData.pending, (state) => {
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
        addCase(fetchByChangeLogin.pending, (state) => {
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
    }
})


export default userSlice.reducer
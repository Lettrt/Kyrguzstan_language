import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IFilms } from "../moduls"
import { authApi } from "../../axios"
import { AxiosError } from "axios"



type UserState = {
    loading: boolean
    error: null | string | undefined
    token: null | string
    redirect: boolean
    detail: IFilms | null
}

const initialState: UserState = {
    error: null,
    loading: false,
    token: null,
    redirect: false,
    detail: null,
}

export const fetchByDetailfilm = createAsyncThunk<IFilms, string, { rejectValue: string }>(
    ' detail/fetchByDetailfilm',
    async (id, { rejectWithValue }) => {
        try {
            const res = await authApi.getById(id)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data
            return data as IFilms
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error

        }
    }
)

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByDetailfilm.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByDetailfilm.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false
        })
        addCase(fetchByDetailfilm.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })

    }
})


export default detailSlice.reducer
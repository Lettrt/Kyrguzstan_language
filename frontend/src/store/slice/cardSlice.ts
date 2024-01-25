import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IFilms } from "../moduls"
import { authApi } from "../../axios"
import { AxiosError } from "axios"



type UserState = {
    loading: boolean
    error: null | string | undefined
    card: IFilms[]
}

const initialState: UserState = {
    error: null,
    loading: false,
    card: []
}

export const fetchByListFilms = createAsyncThunk<IFilms[], void, { rejectValue: string }>(
    'card,fetchByListFilms',
    async (_, { rejectWithValue }) => {
        try {
            const res = await authApi.getAllFilms()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('server error')
            }
            return res.data.items

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

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByListFilms.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByListFilms.fulfilled, (state, action) => {
            state.card = action.payload
            state.loading = false
        })
        addCase(fetchByListFilms.rejected, (state, action) => {
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

export default cardSlice.reducer
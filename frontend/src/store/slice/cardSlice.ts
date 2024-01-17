import { createSlice } from "@reduxjs/toolkit"



type UserState = {
    loading: boolean
    error: null | string
    card: null
}

const initialState: UserState = {
    error: null,
    loading: false,
    card: null
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {

    },
    extraReducers: ({ addCase }) => {

    }
})


export default cardSlice.reducer
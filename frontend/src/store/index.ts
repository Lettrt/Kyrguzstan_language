import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import cardSlice from "./slice/cardSlice";


export const store = configureStore({
    // devTools:false
    reducer: {
        user: userSlice,
        card: cardSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
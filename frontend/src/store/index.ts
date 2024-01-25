import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import cardSlice from "./slice/cardSlice";
import detailSlice from "./slice/detailSlice";


export const store = configureStore({
    // devTools:false
    reducer: {
        user: userSlice,
        card: cardSlice,
        detail: detailSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
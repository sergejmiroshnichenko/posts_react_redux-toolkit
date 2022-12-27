import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postsSlice from './postsSlice'


export const store = configureStore({
    devTools: true,
    reducer: {
        user: userSlice,
        posts: postsSlice
    },
})
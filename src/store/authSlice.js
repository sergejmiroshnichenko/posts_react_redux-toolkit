import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoadedIn: localStorage.getItem('isLoggedIn') === 'true',
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoadedIn.push(localStorage.setItem('isLoggedIn', 'true'))
        }
    },
})

export default authSlice.reducer
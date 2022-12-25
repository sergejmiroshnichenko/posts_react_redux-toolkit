import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue, dispatch }) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(setUsers(result.data))
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            // state.users = action.payload;
        },
        [getUsers.rejected]: () => console.log('rejected'),
    }
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer
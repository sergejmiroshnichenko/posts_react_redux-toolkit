import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {
        try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users').catch(err => {
            if (!err.response.status.ok) {
                throw new Error(`${err.config.url} server error: ${err.response.status}`);
            }
            throw err;
        });
        // dispatch(setUsers(result.data))
        return response.data
        } catch (err) {
            return rejectWithValue (err.message);
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    // reducers: {
    //     setUsers: (state, action) => {
    //         state.users = action.payload
    //     }
    // },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from 'utils/consts'
import axios from 'axios'
import { delay } from 'utils/delay'


const initialState = {
    users: [],
    status: null,
    error: null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            await delay(300)
            const response = await axios.get(`${ BASE_URL }/users/`)
            console.log('response.data>>>>', response.data)
            return response.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer
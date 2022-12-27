import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { delay } from '../utils/delay'


const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (userId,_, { rejectWithValue }) => {

        try {
            await delay(300)
            const response = await axios.get(`https://jsonplaceholder.typicode.com//users/${userId}/posts`).catch(err => {
                if (!err.response.status.ok) {
                    throw new Error(`${err.config.url} server error: ${err.response.status}`);
                }
                throw err;
            });
            // dispatch(setUsers(response.data))
            console.log(response.data)
            return response.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
        // }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // reducers: {
    //     setUsers: (state, action) => {
    //         state.users = action.payload
    //     }
    // },

    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.users = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export default postsSlice.reducer
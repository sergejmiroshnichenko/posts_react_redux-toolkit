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
    async (userId, _, { rejectWithValue }) => {
        try {
            await delay(300)
            const user = await axios.get(`https://jsonplaceholder.typicode.com//users/${userId}`)
            const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

            console.log('user.data', user.data)
            console.log('posts.data', posts.data)
            return  {
                user: user.data,
                posts: posts.data
            }
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export default postsSlice.reducer
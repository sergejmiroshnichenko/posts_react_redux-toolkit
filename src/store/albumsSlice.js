import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// import { delay } from "../utils/delay";


const initialState = {
    albums: [],
    status: null,
    error: null,
}
export const getAlbumsUser = createAsyncThunk(
    'albums/getAlbumsUser',
    async (userId, { rejectWithValue }) => {
        try {
            // await delay(300)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
            console.log('response.data >>>>>>>>>.', response.data)
            // return response.data;
            return response.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)
const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        albumsClear: (state) => {
            state.data = null;
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAlbumsUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAlbumsUser.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.albums = action.payload;
            })
            .addCase(getAlbumsUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export const { albumsClear } = albumsSlice.actions

export default albumsSlice.reducer;
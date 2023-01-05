import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    albums: [],
    currentUserId: null,
    status: null,
    error: null,
}

export const getAlbumsUser = createAsyncThunk(
    'albums/getAlbumsUser',
    async (userId, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
            dispatch(albumsSlice.actions.setCurrentUserId(userId))
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
        },
        setCurrentUserId: (state, action) => {
            state.currentUserId = action.payload;
        },
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

export const { albumsClear, setCurrentUserId } = albumsSlice.actions

export default albumsSlice.reducer;
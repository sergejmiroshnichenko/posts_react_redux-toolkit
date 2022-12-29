import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import { delay } from "../utils/delay";


const initialState = {
    albums: [],
    status: null,
    error: null,
}

export const getAlbumsUser = createAsyncThunk(
    'albums/getAlbumsUser',
    async (userId,{rejectWithValue}) => {
        try {
            await delay(300)
            const response = await axios.get(`https://jsonplaceholder.typicode.com//users/${userId}/albums`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }

)

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
})

export default albumsSlice
import { createSlice } from '@reduxjs/toolkit';


export const postSlice = createSlice ({
    name: 'post',
    initialState: [],
    reducers: {
        getPosts: (state, action) => {
            state = action.payload;
        }
    }
})
export default postSlice.reducer;
export const { getPosts } = postSlice.actions;


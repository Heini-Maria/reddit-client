import { createSlice } from '@reduxjs/toolkit';

export const diySlice = createSlice ({
    name: 'sewing',
    initialState: 'sewing',
    reducers: {
        getPosts: (state, action) => {
            state = action.payload;
        }
    }
})
export default postSlice.reducer;
export const { getPosts } = postSlice.actions;
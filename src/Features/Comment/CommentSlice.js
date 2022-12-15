import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
    name: 'comment',
    initialState: [],
    reducers: {
        getComments: (state, action) => {
            state.value = action.payload;
        }
    } 
})
export default commentSlice.reducer;
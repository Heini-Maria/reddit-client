import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice ({
    name: 'comments',
    initialState: {value: false},
    reducers: {
        showComments: (state, action) => {
            state.value = action.payload;
        },
        hideComments: (state, action) => {
            state.value = action.payload;
        }
    }
}) 
export const { showComments } = commentsSlice.actions;
export const { hideComments } = commentsSlice.actions;

export default commentsSlice.reducer;
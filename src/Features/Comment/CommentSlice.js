import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
    name: 'comment',
    initialState: { value: { time: '30 days', userName:'Maria', comment:'OMG so cute!', voting: 5 }},
    reducers: {
        getComments: (state, action) => {
            state.value = action.payload;
        }
    } 
})
export default commentSlice.reducer;
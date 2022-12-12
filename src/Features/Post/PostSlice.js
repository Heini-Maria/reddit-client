import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice ({
    name: 'post',
    initialState: { value: { time:'26 minutes ago', userName:'Maria', title: "Needle felted hedgehog.. how cute isn't it?", image:'	https://i.redd.it/lfr3tvb5vj0a1.jpg', voting: 115, comments: 15, url:'https://www.reddit.com/r/Needlefelting/comments/yxpiuq/my_first_attempt_at_needle_felting_using_a/' }},
    reducers: {
        getPosts: (state, action) => {
            state.value = action.payload;
        }
    }
})
export default postSlice.reducer;


import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  posts: [],
}

export const feedSlice = createSlice({
  name: 'feedSlice',
  initialState,
  reducers: {
    setPosts(state,action){
      state.posts = action.payload;
    },
    setComments(state, action) {
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
    },
  },
})

export const {
  setPosts,
  setComments,
  toggleShowingComments
} = feedSlice.actions;

export default feedSlice.reducer;
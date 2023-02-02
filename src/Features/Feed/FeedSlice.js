import { createSlice } from '@reduxjs/toolkit';

export const feedSlice = createSlice({
  name: 'feedSlice',
  initialState: {
    posts: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setComments(state, action) {
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
    },
    setIsloading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setPosts,
  setComments,
  toggleShowingComments,
  setIsloading,
} = feedSlice.actions;

export default feedSlice.reducer;

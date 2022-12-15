import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../Features/Comments/CommentsSlice';
import postReducer from '../Features/Post/PostSlice';
import commentReducer from '../Features/Comment/CommentSlice';

export const store = configureStore({
    reducer: {
    comments: commentsReducer,
    post: postReducer,
    comment: commentReducer,
}
  });
import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../Features/Feed/FeedSlice'

export const store = configureStore({
    reducer: {
    feed: feedReducer,
}
  });
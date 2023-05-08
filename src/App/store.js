import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../Features/Feed/FeedSlice";
import searchReducer from "../Features/Search/SearchSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    search: searchReducer,
  },
});

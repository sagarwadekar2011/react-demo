import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import PostReducer from "./PostSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    posts: PostReducer,
  },
});

export default store;

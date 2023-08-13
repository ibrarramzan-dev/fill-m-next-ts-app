"use client";

import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Features/admin/adminSlice";
import moviesReducer from "./Features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

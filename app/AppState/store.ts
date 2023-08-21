"use client";

import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Features/admin/adminSlice";
import moviesReducer from "./Features/movies/moviesSlice";
import puzzleReducer from "./Features/puzzle/puzzleSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    puzzle: puzzleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

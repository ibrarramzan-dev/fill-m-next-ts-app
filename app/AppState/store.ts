"use client";

import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Features/admin/adminSlice";
import puzzleReducer from "./Features/puzzle/puzzleSlice";
import summaryReducer from "./Features/summary/summarySlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    puzzle: puzzleReducer,
    summary: summaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

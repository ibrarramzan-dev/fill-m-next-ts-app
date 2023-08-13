"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface MovieState {
  list: string[];
}

const initialState: MovieState = {
  list: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    feedMovies: (state, action) => action.payload,
  },
});

export const { feedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

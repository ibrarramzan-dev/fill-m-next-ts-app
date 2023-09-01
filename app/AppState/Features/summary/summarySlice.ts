"use client";

import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

interface SummaryResultInterface {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
  E: boolean;
  F: boolean;
  G: boolean;
  H: boolean;
  I: boolean;
}

interface SummaryInterface {
  result: SummaryResultInterface;
}

const initialState: SummaryInterface = {
  result: {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
  },
};

export const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    correctCell: (state, action) => ({
      ...action.payload,
    }),
  },
});

export const { correctCell } = summarySlice.actions;

export default summarySlice.reducer;

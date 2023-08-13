"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface Admin {
  dashboard: {
    isSidebarOpened: boolean;
  };
}

const initialState: Admin = {
  dashboard: {
    isSidebarOpened: false,
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toggleSidebar: (state: Admin, action) => ({
      ...state,
      dashboard: {
        isSidebarOpened: action.payload,
      },
    }),
  },
});

export const { toggleSidebar } = adminSlice.actions;

export default adminSlice.reducer;

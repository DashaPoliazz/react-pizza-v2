import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFilterSlice } from "../../types/Slices/filterSlice";

const initialState: IFilterSlice = {
  sortByFilter: undefined,
  orderFilter: undefined,
  searchQuery: undefined,
  filter: undefined,
  title: undefined,
  category: undefined,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSortByFilter: (state, action: PayloadAction<string>) => {
      state.sortByFilter = action.payload;
    },
    setOrderFilter: (state, action: PayloadAction<"ask" | "desc">) => {
      state.orderFilter = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.sortByFilter = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const filterSliceActions = filterSlice.actions;

export const filterSliceReducer = filterSlice.reducer;

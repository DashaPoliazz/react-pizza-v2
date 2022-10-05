import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice } from "../../types/Slices/filterSlice";

const initialState: IFilterSlice = {
  sortByFilter: null,
  orderFilter: null,
  searchQuery: null,
  filter: null,
  title: null,
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
  },
});

export const {
  setSortByFilter,
  setOrderFilter,
  setSearchQuery,
  setFilter,
  setTitle,
} = filterSlice.actions;

export const filterSliceReducer = filterSlice.reducer;

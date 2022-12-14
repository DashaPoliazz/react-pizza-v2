import { configureStore } from "@reduxjs/toolkit";

import { mockApi } from "./Api/mock.api";
import { cartSliceReducer } from "./Slices/CartSlice";
import { filterSliceReducer } from "./Slices/FilterSlice";

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    filterSlice: filterSliceReducer,
    cartSlice: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

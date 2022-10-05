import { configureStore } from "@reduxjs/toolkit";
import { mockApi } from "./Api/mock.api";

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  loadAllPizzasSearchQuery,
  IPizza,
} from "../../types/Api/mock.ts/mockTypes";

export const mockApi = createApi({
  reducerPath: "mock/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://633d78f6f2b0e623dc74a31e.mockapi.io",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    loadAllPizzas: build.query<IPizza[], loadAllPizzasSearchQuery>({
      query: (searchQuery: loadAllPizzasSearchQuery) => {
        const { endpoint, filter, order, search, sortBy, title } = searchQuery;

        return {
          url: endpoint,
          params: {
            filter,
            order,
            search,
            sortBy,
            title,
          },
        };
      },
    }),
  }),
});

export const { useLazyLoadAllPizzasQuery } = mockApi;

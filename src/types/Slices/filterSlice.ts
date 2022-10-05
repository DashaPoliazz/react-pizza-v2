export interface IFilterSlice {
  sortByFilter: string | undefined;
  orderFilter: "ask" | "desc" | undefined;
  searchQuery: string | undefined;
  filter: string | undefined;
  title: string | undefined;
  category: number | undefined;
}

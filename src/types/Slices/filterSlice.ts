export interface IFilterSlice {
  sortByFilter: string | null;
  orderFilter: "ask" | "desc" | null;
  searchQuery: string | null;
  filter: string | null;
  title: string | null;
}

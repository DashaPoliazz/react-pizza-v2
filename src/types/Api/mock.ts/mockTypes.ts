export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface loadAllPizzasSearchQuery {
  endpoint: string;
  sortBy?: string;
  order?: "ask" | "desc";
  search?: string;
  filter?: string;
  title?: string;
  category?: number;
}

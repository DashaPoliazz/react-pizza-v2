export interface ICartSliceState {
  products: IProductCart[];
}

export interface IProductCart {
  id: number;
  imageUrl: string;
  title: string;
  types: string;
  sizes: number;
  price: number;
  category: number;
  rating: number;
  quantity: number;
}

export interface ICartSliceState {
  products: IProductCart[];
  totalQuantity: number;
  totalPrice: number;
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

export interface IRemoveProductFromCart {
  id: number;
  isTotalRemove?: boolean;
}

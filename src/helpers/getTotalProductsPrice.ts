import { IProductCart } from "../types/Slices/cartSlice";

export const getTotalProductsPrice = (elements: IProductCart[]) => {
  return elements.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);
};

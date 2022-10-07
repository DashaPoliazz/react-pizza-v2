import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartSliceState, IProductCart } from "../../types/Slices/cartSlice";

const initialState: ICartSliceState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProductCart>) => {
      const foundedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!foundedProduct) {
        state.products.push(action.payload);
      } else {
        foundedProduct.quantity++;
      }
    },
    // setTotalQuantity: (state, PayloadAction<IProductCart>),
    clearProduct: (state) => {
      state.products.length = 0;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
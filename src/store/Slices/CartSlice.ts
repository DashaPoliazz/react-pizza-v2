import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isElementInArrayExist } from "../../helpers/isElementInArrayExist";
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
      const isProductExist = isElementInArrayExist(
        action.payload.id,
        state.products
      );

      if (!isProductExist) {
        state.products.push(action.payload);
      } else {
        isProductExist.quantity++;
      }
    },
    // setTotalQuantity: (state, PayloadAction<IProductCart>),
    clearProduct: (state) => {
      state.products.length = 0;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const isProductExist = isElementInArrayExist(
        action.payload,
        state.products
      );

      if (isProductExist.quantity > 1) {
        isProductExist.quantity -= 1;
      } else {
        state.products = state.products.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;

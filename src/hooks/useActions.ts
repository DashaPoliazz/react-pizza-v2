import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../store/Slices/CartSlice";

import { filterSliceActions } from "../store/Slices/FilterSlice";

const actions = {
  ...filterSliceActions,
  ...cartSliceActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

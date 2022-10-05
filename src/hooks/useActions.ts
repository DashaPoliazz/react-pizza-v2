import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { filterSliceActions } from "../store/Slices/FilterSlice";

const actions = {
  ...filterSliceActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

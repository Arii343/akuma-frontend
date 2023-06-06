import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: () => ({
      isLoading: true,
    }),
    hideLoading: () => ({
      isLoading: false,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

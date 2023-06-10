import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  showSkeleton: false,
  showSpinner: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showSkeleton: (currentState: UiStateStructure) => ({
      ...currentState,
      showSkeleton: true,
    }),
    hideSkeleton: (currentState: UiStateStructure) => ({
      ...currentState,
      showSkeleton: false,
    }),
    showSpinner: (currentState: UiStateStructure) => ({
      ...currentState,
      showSpinner: true,
    }),
    hideSpinner: (currentState: UiStateStructure) => ({
      ...currentState,
      showSpinner: false,
    }),
  },
});

export const {
  showSkeleton: showSkeletonActionCreator,
  hideSkeleton: hideSkeltonActionCreator,
  showSpinner: showSpinnerActionCreator,
  hideSpinner: hideSpinnerActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

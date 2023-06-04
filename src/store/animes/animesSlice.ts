import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimeStateStructure, AnimeStructure } from "./types";

const initialState: AnimeStateStructure = {
  animes: [],
};

const animesSlice = createSlice({
  name: "animes",
  initialState,
  reducers: {
    loadAnimes: (
      _currentState: AnimeStateStructure,
      action: PayloadAction<AnimeStructure[]>
    ) => ({
      animes: [...action.payload],
    }),
  },
});

export const { loadAnimes: loadAnimesActionCreator } = animesSlice.actions;
export const animesReducer = animesSlice.reducer;

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

    deleteAnime: (
      currentState: AnimeStateStructure,
      action: PayloadAction<string>
    ) => ({
      animes: currentState.animes.filter(
        (anime) => anime.id !== action.payload
      ),
    }),

    createAnime: (
      currentState: AnimeStateStructure,
      action: PayloadAction<AnimeStructure>
    ) => ({
      animes: [...currentState.animes, action.payload],
    }),
  },
});

export const {
  loadAnimes: loadAnimesActionCreator,
  deleteAnime: deleteAnimeActionCreator,
  createAnime: createAnimeActionCreator,
} = animesSlice.actions;
export const animesReducer = animesSlice.reducer;

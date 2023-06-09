import { animesMock } from "../../mocks/animes/animesMocks";
import {
  animesReducer,
  deleteAnimeActionCreator,
  loadAnimesActionCreator,
} from "./animesSlice";
import { AnimeStateStructure, AnimeStructure } from "./types";

describe("Given a loadAnimes reducer", () => {
  describe("When it receives a empty currentState and loadAnimes action", () => {
    test("Then it should return a new state with the animes", () => {
      const animes: AnimeStructure[] = animesMock;

      const currentState: AnimeStateStructure = {
        animes: [],
      };

      const expectedNewState: AnimeStateStructure = {
        animes: [...animes],
      };

      const action = loadAnimesActionCreator(animes);
      const newState = animesReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a deleteAnime reducer", () => {
  describe("When it receives a 'One punch man' anime id and a list of animes", () => {
    test("Then it should return a new state without 'One punch man' anime", () => {
      const currentState: AnimeStateStructure = {
        animes: animesMock,
      };

      const id = animesMock[3].id;
      const action = deleteAnimeActionCreator(id);
      const newState = animesReducer(currentState, action);
      const expectedState = {
        animes: animesMock.filter((anime) => anime.id !== action.payload),
      };

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

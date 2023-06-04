import { animesMock } from "../../mocks/animes/animesMocks";
import { animesReducer, loadAnimesActionCreator } from "./animesSlice";
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

import { renderHook } from "@testing-library/react";
import useAnimes from "./useAnimes";
import { animesMock } from "../../mocks/animes/animesMocks";

describe("Given a useAnimes custom hook", () => {
  describe("When the getAnimes function is called", () => {
    test("Then it should return a animes collection", async () => {
      const {
        result: {
          current: { getAnimes },
        },
      } = renderHook(() => useAnimes());

      const animes = await getAnimes();

      expect(animes).toStrictEqual(animesMock);
    });
  });
});

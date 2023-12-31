import { renderHook } from "@testing-library/react";
import useAnimes from "./useAnimes";
import {
  animeMiraiNikkiFormParsedMock,
  animeOnePieceMock,
  animesMock,
  newAnimeMiraiNikkiMock,
} from "../../mocks/animes/animesMocks";
import { wrapWithStore } from "../../utils/testUtils";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { vi } from "vitest";
import snackBar from "notistack";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useAnimes custom hook", () => {
  describe("When the getAnimes function is called", () => {
    test("Then it should return a animes collection", async () => {
      const {
        result: {
          current: { getAnimes },
        },
      } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

      const animes = await getAnimes();

      expect(animes).toStrictEqual(animesMock);
    });
  });

  describe("When the getAnimes function rejects", () => {
    test("Then it should throw the 'An error has ocurred while loading anime' error", async () => {
      server.resetHandlers(...errorHandlers);

      snackBar.useSnackbar = vi
        .fn()
        .mockReturnValue({ enqueueSnackbar: vi.fn() });

      const expectedMessage = "An error has ocurred while loading anime";

      const {
        result: {
          current: { getAnimes },
        },
      } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

      await getAnimes();

      expect(snackBar.useSnackbar().enqueueSnackbar).toHaveBeenCalledWith(
        expectedMessage,
        { variant: "error" }
      );
    });
  });

  describe("When deleteAnime function is called with an existing anime id", () => {
    test("Then it should return 200", async () => {
      const expectedStatus = 200;
      const animeId = animeOnePieceMock.id;

      const {
        result: {
          current: { deleteAnime },
        },
      } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

      const status = await deleteAnime(animeId);

      expect(status).toStrictEqual(expectedStatus);
    });
  });

  describe("When deleteAnime function is called with a non existing anime id", () => {
    test("Then it should return undefined", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedStatus = undefined;
      const animeId = animeOnePieceMock.id;

      const {
        result: {
          current: { deleteAnime },
        },
      } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

      const status = await deleteAnime(animeId);

      expect(status).toStrictEqual(expectedStatus);
    });
  });

  describe("When the createAnime function is called and receives 'Mirai Nikki' anime data", () => {
    test("Then it should return the 'Mirai Nikki' anime data", async () => {
      const expectedAnime = newAnimeMiraiNikkiMock;
      const {
        result: {
          current: { createAnime },
        },
      } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

      const newAnime = await createAnime(animeMiraiNikkiFormParsedMock);

      expect(newAnime).toStrictEqual(expectedAnime);
    });
  });
});

describe("When the createAnime function is called and rejects", () => {
  test("Then the error message 'Could not create the anime' should be shown to the user", async () => {
    server.resetHandlers(...errorHandlers);

    snackBar.useSnackbar = vi
      .fn()
      .mockReturnValue({ enqueueSnackbar: vi.fn() });

    const expectedMessage = "Could not create the anime";

    const {
      result: {
        current: { createAnime },
      },
    } = renderHook(() => useAnimes(), { wrapper: wrapWithStore });

    await createAnime(animeMiraiNikkiFormParsedMock);

    expect(snackBar.useSnackbar().enqueueSnackbar).toHaveBeenCalledWith(
      expectedMessage,
      { variant: "error" }
    );
  });
});

import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";
import {
  invalidUserCredentialsMock,
  tokenMock,
  validUserCredentialsMock,
} from "../../mocks/user/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useUser custom hook", () => {
  const userCredentials: UserCredentials = validUserCredentialsMock;
  describe("When the getUserToken function is called with a username and password", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(userCredentials);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When the getUserToken function resolves", () => {
    test("Then it should show the 'You have successfully logged in' info message", async () => {
      const snackBar = await import("notistack");

      snackBar.useSnackbar = vi
        .fn()
        .mockReturnValue({ enqueueSnackbar: vi.fn() });

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      await getUserToken(userCredentials);

      expect(snackBar.useSnackbar().enqueueSnackbar).toHaveBeenCalledWith(
        "You have successfully logged in",
        { variant: "info" }
      );
    });
  });
  describe("When the getUserToken function rejects", () => {
    test("Then it should throw the 'Wrong credentials' error", async () => {
      server.resetHandlers(...errorHandlers);

      const userCredentials: UserCredentials = invalidUserCredentialsMock;

      const snackBar = await import("notistack");

      snackBar.useSnackbar = vi
        .fn()
        .mockReturnValue({ enqueueSnackbar: vi.fn() });

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      await getUserToken(userCredentials);

      expect(snackBar.useSnackbar().enqueueSnackbar).toHaveBeenCalledWith(
        "Wrong credentials",
        { variant: "error" }
      );
    });
  });
});

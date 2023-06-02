import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";
import { tokenMock } from "../../mocks/user/userMocks";

describe("Given a useUser custom hook", () => {
  describe("When the getUserToken function is called with a username and password", () => {
    test("Then it should return a token", async () => {
      const mockUserCredentials: UserCredentials = {
        email: "admin@admin.net",
        password: "admin",
      };
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });
});

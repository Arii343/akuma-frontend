import { renderHook } from "@testing-library/react";
import { tokenMock, userDataMock } from "../../mocks/user/userMocks";
import useToken from "./useToken";

describe("Given a useTokenData custom hook", () => {
  describe("When it receives a token", () => {
    test("Then it should return user data from the token received", () => {
      const token = tokenMock;

      const expectedUserData = userDataMock;

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(expectedUserData);
    });
  });
});

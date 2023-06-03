import { emptyUserMock, loggedInUserMock } from "../../mocks/user/userMocks";
import { userWithTokenMock } from "../../mocks/user/userMocks";
import { UserStateStructure } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives a empty currentState and loginUser action", () => {
    test("Then it should return a new state with the user logged", () => {
      const user = userWithTokenMock;

      const currentState: UserStateStructure = {
        id: "",
        token: "",
        isLogged: false,
      };

      const expectedNewState: UserStateStructure = {
        ...user,
        isLogged: true,
      };

      const action = loginUserActionCreator(user);
      const newState = userReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a logoutUser reducer", () => {
  describe("When it is called", () => {
    test("Then it should return a new state with initial state values", () => {
      const expectedNewState = emptyUserMock;
      const currentState = loggedInUserMock;

      const action = logoutUserActionCreator();
      const newState = userReducer(currentState, action);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});

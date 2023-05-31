import { UserStateStructure, UserTokenStructure } from "../../store/user/types";

export const emptyUserMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const userWithTokenMock: UserTokenStructure = {
  id: "1",
  token: "jdfnjbBBwefffrfvfv",
};

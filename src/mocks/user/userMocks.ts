import {
  UserCredentials,
  UserData,
  UserStateStructure,
  UserTokenStructure,
} from "../../store/user/types";

export const emptyUserMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const userWithTokenMock: UserTokenStructure = {
  id: "1",
  token: "jdfnjbBBwefffrfvfv",
};

export const loggedInUserMock: UserStateStructure = {
  id: "4",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc5MDE3YjIxOTVmYzUwM2M1MTMzM2IiLCJpYXQiOjE2ODU2NTE5NDksImV4cCI6MTY4NTczODM0OX0.nZyumE1_KkIVy9eeb5HW9739Vop5cpaF6YSnXsgXJb4",
  isLogged: true,
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc5MDE3YjIxOTVmYzUwM2M1MTMzM2IiLCJpYXQiOjE2ODU2NTE5NDksImV4cCI6MTY4NTczODM0OX0.nZyumE1_KkIVy9eeb5HW9739Vop5cpaF6YSnXsgXJb4";

export const userDataMock: UserData = {
  id: "6479017b2195fc503c51333b",
};

export const validUserCredentialsMock: UserCredentials = {
  email: "admin@admin.net",
  password: "admin",
};

export const invalidUserCredentialsMock: UserCredentials = {
  email: "admin@admin.com",
  password: "admin123",
};

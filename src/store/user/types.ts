export interface UserTokenStructure {
  id: string;
  token: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
}

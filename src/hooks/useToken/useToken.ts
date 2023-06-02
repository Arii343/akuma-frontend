import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserTokenStructure } from "../../store/user/types";

const useToken = () => {
  const getTokenData = useCallback(
    (token: string): Partial<UserTokenStructure> => {
      const decodedToken: { sub: string } = jwt_decode(token);

      const userLoggedData: Partial<UserTokenStructure> = {
        id: decodedToken.sub,
      };

      return userLoggedData;
    },
    []
  );

  return {
    getTokenData,
  };
};

export default useToken;

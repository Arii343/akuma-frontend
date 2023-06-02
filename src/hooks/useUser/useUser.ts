import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../store/user/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string> => {
      const response = await axios.post<{ token: string }>(
        `${apiUrl}user/login`,
        userCredentials
      );

      return response.data.token;
    },
    []
  );

  return {
    getUserToken,
  };
};

export default useUser;

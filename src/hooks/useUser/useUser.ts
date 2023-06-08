import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../store/user/types";
import { useSnackbar } from "notistack";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const { enqueueSnackbar } = useSnackbar();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        const response = await axios.post<{ token: string }>(
          `${apiUrl}user/login`,
          userCredentials
        );
        enqueueSnackbar("You have successfully logged in", { variant: "info" });

        return response.data.token;
      } catch (error) {
        enqueueSnackbar("Wrong credentials", { variant: "error" });
      }
    },
    [enqueueSnackbar]
  );

  return {
    getUserToken,
  };
};

export default useUser;

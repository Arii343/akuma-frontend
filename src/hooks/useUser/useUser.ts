import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../store/user/types";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "../../store";
import {
  hideSpinnerActionCreator,
  showSpinnerActionCreator,
} from "../../store/ui/uiSlice";
import { feedbackMessage } from "../../utils/feedbackMessage";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        dispatch(showSpinnerActionCreator());
        const response = await axios.post<{ token: string }>(
          `${apiUrl}user/login`,
          userCredentials
        );

        dispatch(hideSpinnerActionCreator());
        enqueueSnackbar(feedbackMessage.successLogin, { variant: "info" });

        return response.data.token;
      } catch (error) {
        dispatch(hideSpinnerActionCreator());
        enqueueSnackbar(feedbackMessage.errorLogin, { variant: "error" });
      }
    },
    [dispatch, enqueueSnackbar]
  );

  return {
    getUserToken,
  };
};

export default useUser;

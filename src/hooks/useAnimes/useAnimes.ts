import axios from "axios";
import { useCallback } from "react";
import { AnimeStructure } from "../../store/animes/types";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideSkeltonActionCreator,
  hideSpinnerActionCreator,
  showSkeletonActionCreator,
  showSpinnerActionCreator,
} from "../../store/ui/uiSlice";
import { useSnackbar } from "notistack";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimes = () => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const getAnimes = useCallback(async (): Promise<
    AnimeStructure[] | undefined
  > => {
    try {
      dispatch(showSkeletonActionCreator());
      const response = await axios.get<{ animes: AnimeStructure[] }>(
        `${apiUrl}anime`
      );

      dispatch(hideSkeltonActionCreator());

      return response.data.animes;
    } catch (error) {
      enqueueSnackbar("An error has ocurred while loading anime", {
        variant: "error",
      });
    }
  }, [dispatch, enqueueSnackbar]);

  const deleteAnime = async (id: string) => {
    try {
      const configuration = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      dispatch(showSpinnerActionCreator());
      await axios.delete(`${apiUrl}anime/${id}`, configuration);

      dispatch(hideSpinnerActionCreator());
    } catch (error) {
      dispatch(hideSpinnerActionCreator());
    }
  };

  return {
    getAnimes,
    deleteAnime,
  };
};

export default useAnimes;

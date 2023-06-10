import axios from "axios";
import { useCallback } from "react";
import { AnimeStructure } from "../../store/animes/types";
import { useAppDispatch } from "../../store";
import {
  hideSkeltonActionCreator,
  showSkeletonActionCreator,
} from "../../store/ui/uiSlice";
import { useSnackbar } from "notistack";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimes = () => {
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

  return {
    getAnimes,
  };
};

export default useAnimes;

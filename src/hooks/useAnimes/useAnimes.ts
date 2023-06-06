import axios from "axios";
import { useCallback } from "react";
import { AnimeStructure } from "../../store/animes/types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimes = () => {
  const dispatch = useAppDispatch();
  const getAnimes = useCallback(async (): Promise<AnimeStructure[]> => {
    dispatch(showLoadingActionCreator());

    const response = await axios.get<{ animes: AnimeStructure[] }>(
      `${apiUrl}anime`
    );

    dispatch(hideLoadingActionCreator());

    return response.data.animes;
  }, [dispatch]);

  return {
    getAnimes,
  };
};

export default useAnimes;

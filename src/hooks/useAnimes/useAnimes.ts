import axios from "axios";
import { useCallback } from "react";
import { AnimeStructure } from "../../store/animes/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useAnimes = () => {
  const getAnimes = useCallback(async (): Promise<AnimeStructure[]> => {
    const response = await axios.get<{ animes: AnimeStructure[] }>(
      `${apiUrl}anime`
    );

    return response.data.animes;
  }, []);

  return {
    getAnimes,
  };
};

export default useAnimes;

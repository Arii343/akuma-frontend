import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import HomePageStyled from "./HomePageStyled";
import { loadAnimesActionCreator } from "../../store/animes/animesSlice";
import AnimeList from "../../components/AnimeList/AnimeList";
import useAnimes from "../../hooks/useAnimes/useAnimes";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimes } = useAnimes();

  useEffect(() => {
    (async () => {
      const animes = await getAnimes();
      dispatch(loadAnimesActionCreator(animes));
    })();
  }, [dispatch, getAnimes]);

  return (
    <HomePageStyled className="home-page">
      <h1 className="home-page__title">Anime</h1>
      <AnimeList />
    </HomePageStyled>
  );
};

export default HomePage;

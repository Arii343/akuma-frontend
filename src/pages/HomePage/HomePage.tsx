import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import HomePageStyled from "./HomePageStyled";
import { loadAnimesActionCreator } from "../../store/animes/animesSlice";
import { animesMock } from "../../mocks/animes/animesMocks";
import AnimesList from "../../components/AnimesList/AnimesList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAnimesActionCreator(animesMock));
  }, [dispatch]);

  return (
    <HomePageStyled className="home-page">
      <h1 className="home-page__title">Anime</h1>
      <AnimesList />
    </HomePageStyled>
  );
};

export default HomePage;

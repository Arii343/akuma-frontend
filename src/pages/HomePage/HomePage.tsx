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

      if (animes) {
        dispatch(loadAnimesActionCreator(animes));
        const firstAnime = animes[0].image;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstAnime;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
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

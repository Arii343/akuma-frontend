import { useAppSelector } from "../../store";
import AnimeListStyled from "./AnimesListStyled";

const AnimesList = (): React.ReactElement => {
  const animes = useAppSelector((state) => state.animes.animes);

  return (
    <AnimeListStyled>
      {animes.map((anime) => (
        <h1 key={anime.id}>{anime.englishTitle}</h1>
      ))}
    </AnimeListStyled>
  );
};

export default AnimesList;

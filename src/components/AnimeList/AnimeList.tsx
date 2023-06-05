import { useAppSelector } from "../../store";
import AnimeCard from "../AnimeCard /AnimeCard";
import AnimeListStyled from "./AnimeListStyled";

const AnimeList = (): React.ReactElement => {
  const animes = useAppSelector((state) => state.animes.animes);

  return (
    <AnimeListStyled>
      {animes.map((anime) => (
        <AnimeCard
          imageUrl={anime.image}
          title={anime.englishTitle}
          key={anime.id}
        />
      ))}
    </AnimeListStyled>
  );
};

export default AnimeList;

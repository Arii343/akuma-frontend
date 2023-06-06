import { useAppSelector } from "../../store";
import AnimeCard from "../AnimeCard /AnimeCard";
import AnimeCardSkeleton from "../AnimeCardSkeleton/AnimeCardSkeleton";
import AnimeListStyled from "./AnimeListStyled";

const AnimeList = (): React.ReactElement => {
  const animes = useAppSelector((state) => state.animes.animes);
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <AnimeListStyled>
      {isLoading
        ? Array.from({ length: 10 }).map((_element, index) => (
            <AnimeCardSkeleton key={index} />
          ))
        : animes.map((anime) => (
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

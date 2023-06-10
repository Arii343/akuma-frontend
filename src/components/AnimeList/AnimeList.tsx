import { useAppDispatch, useAppSelector } from "../../store";
import { deleteAnimeActionCreator } from "../../store/animes/animesSlice";
import AnimeCard from "../AnimeCard /AnimeCard";
import AnimeCardSkeleton from "../AnimeCardSkeleton/AnimeCardSkeleton";
import AnimeListStyled from "./AnimeListStyled";

const AnimeList = (): React.ReactElement => {
  const animes = useAppSelector((state) => state.animes.animes);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const dispatch = useAppDispatch();

  const handleDeleteAnime = (id: string) => {
    dispatch(deleteAnimeActionCreator(id));
  };

  return (
    <AnimeListStyled>
      {isLoading
        ? Array.from({ length: 10 }).map((_element, index) => (
            <AnimeCardSkeleton key={index} />
          ))
        : animes.map((anime) => (
            <AnimeCard
              id={anime.id}
              imageUrl={anime.image}
              title={anime.englishTitle}
              deleteAnime={handleDeleteAnime}
              key={anime.id}
            />
          ))}
    </AnimeListStyled>
  );
};

export default AnimeList;

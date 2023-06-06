import AnimeCardSkeletonStyled from "./AnimeCardSkeletonStyled";

const AnimeCardSkeleton = () => {
  return (
    <AnimeCardSkeletonStyled
      className="anime-card-skeleton"
      aria-label="anime-card-loader"
    >
      <div className="anime-card-skeleton__image"></div>
      <div className="anime-card-skeleton__title"></div>
    </AnimeCardSkeletonStyled>
  );
};

export default AnimeCardSkeleton;

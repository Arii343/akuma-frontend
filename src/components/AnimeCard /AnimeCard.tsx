import AnimeCardStyled from "./AnimeCardStyled";

interface AnimeCardProps {
  imageUrl: string;
  title: string;
}

const AnimeCard = ({ imageUrl, title }: AnimeCardProps): React.ReactElement => {
  return (
    <AnimeCardStyled className="anime-card">
      <img
        src={imageUrl}
        alt={`Anime ${title}`}
        className="anime-card__image"
        height="205px"
        width="144px"
      />
      <h2 className="anime-card__title">{title}</h2>
    </AnimeCardStyled>
  );
};

export default AnimeCard;

import Button from "../Button/Button";
import AnimeCardStyled from "./AnimeCardStyled";

interface AnimeCardProps {
  id: string;
  imageUrl: string;
  title: string;
  showAdminView: boolean;
  deleteAnime: (id: string) => void;
}

const AnimeCard = ({
  id,
  imageUrl,
  title,
  showAdminView,
  deleteAnime,
}: AnimeCardProps): React.ReactElement => {
  const handleDeleteClick = () => {
    deleteAnime(id);
  };

  return (
    <AnimeCardStyled className="anime-card" aria-label={`${title} anime card`}>
      <img
        src={imageUrl}
        alt={`Anime ${title}`}
        className="anime-card__image"
        height="205px"
        width="144px"
      />
      {showAdminView && (
        <Button
          onClick={handleDeleteClick}
          ariaLabel={`Delete ${title} anime`}
          className="anime-card__button anime-card__button--delete"
        >
          <img src="./img/delete.svg" alt="trash icon" width={32} height={36} />
        </Button>
      )}
      <h2 className="anime-card__title">{title}</h2>
    </AnimeCardStyled>
  );
};

export default AnimeCard;

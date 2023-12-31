import { useState } from "react";
import Button from "../Button/Button";
import AnimeFormStyled from "./AnimeFormStyled";
import { AnimeDataStructure } from "../../store/animes/types";

export interface AnimeFormData {
  englishTitle: string;
  japaneseTitle: string;
  releaseYear: number | undefined;
  rating: string;
  demographics: string;
  genres: string;
  image: string;
  score: number | undefined;
  rank: number | undefined;
  popularity: number | undefined;
  type: string;
  source: string;
  episodes: number | undefined;
  status: string;
  duration: string;
  synopsis: string;
}

interface AnimeFormProps {
  initialAnimeFormState?: AnimeFormData;
  submitButtonText?: "Create" | "Save";
  onSubmit: (animeForm: AnimeDataStructure) => void;
}

const initialAnimeData: AnimeFormData = {
  englishTitle: "",
  japaneseTitle: "",
  releaseYear: undefined,
  rating: "",
  demographics: "",
  genres: "",
  image: "",
  score: undefined,
  rank: undefined,
  popularity: undefined,
  type: "",
  source: "",
  episodes: undefined,
  status: "",
  duration: "",
  synopsis: "",
};

const AnimeForm = ({
  initialAnimeFormState = initialAnimeData,
  submitButtonText = "Create",
  onSubmit,
}: AnimeFormProps): React.ReactElement => {
  const [animeForm, setAnimeForm] = useState<AnimeFormData>(
    initialAnimeFormState
  );

  const handleAnimeFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, id } = event.target;

    setAnimeForm((animeForm) => ({
      ...animeForm,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const animeData: AnimeDataStructure = {
      ...animeForm,
      releaseYear: Number(animeForm.releaseYear),
      score: Number(animeForm.score),
      rank: Number(animeForm.rank),
      popularity: Number(animeForm.popularity),
      episodes: Number(animeForm.episodes),
      genres: animeForm.genres.split(",").map((genre) => genre.trim()),
      demographics: animeForm.demographics
        .split(",")
        .map((demographic) => demographic.trim()),
    };

    onSubmit(animeData);
    setAnimeForm(initialAnimeData);
  };

  return (
    <AnimeFormStyled
      className="anime-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="englishTitle">
          English title
        </label>
        <input
          value={animeForm.englishTitle}
          id="englishTitle"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex My Hero Academia Season 6"
          aria-label="Write the anime english title"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="japaneseTitle">
          Japanese title
        </label>
        <input
          value={animeForm.japaneseTitle}
          id="japaneseTitle"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex 僕のヒーローアカデミア"
          aria-label="Write the anime japanese title"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="releaseYear">
          Release year
        </label>
        <input
          value={animeForm.releaseYear}
          id="releaseYear"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="number"
          placeholder="ex 2022"
          aria-label="Write the anime release year"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="rating">
          Rating
        </label>
        <input
          value={animeForm.rating}
          id="rating"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex PG-13 - Teens 13 or older"
          aria-label="Write the anime rating"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="demographics">
          Demographics
        </label>
        <input
          value={animeForm.demographics}
          id="demographics"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex Shounen, Seinen"
          aria-label="Write the demographics of the anime"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="genres">
          Genres
        </label>
        <input
          value={animeForm.genres}
          id="genres"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex Action, Drama"
          aria-label="Write the anime genres"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="image">
          Image
        </label>
        <input
          value={animeForm.image}
          id="image"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex https://anime-image.png"
          aria-label="Insert anime image url"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="score">
          Score
        </label>
        <input
          value={animeForm.score}
          id="score"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="number"
          placeholder="ex 8.37"
          aria-label="Write the anime score out of ten"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="rank">
          Rank
        </label>
        <input
          value={animeForm.rank}
          id="rank"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="number"
          placeholder="ex 194"
          aria-label="Write the anime rank"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="popularity">
          Popularity
        </label>
        <input
          value={animeForm.popularity}
          id="popularity"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="number"
          placeholder="ex 380"
          aria-label="Write the anime popularity"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="type">
          Type
        </label>
        <input
          value={animeForm.type}
          id="type"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex TV"
          aria-label="Write the anime type"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="source">
          Source
        </label>
        <input
          value={animeForm.source}
          id="source"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex Manga"
          aria-label="Write the anime source"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="episodes">
          Episodes
        </label>
        <input
          value={animeForm.episodes}
          id="episodes"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="number"
          placeholder="ex 25"
          aria-label="Write the anime episodes"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="status">
          Status
        </label>
        <input
          value={animeForm.status}
          id="status"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex Finished Airing"
          aria-label="Write the anime status"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="duration">
          Duration
        </label>
        <input
          value={animeForm.duration}
          id="duration"
          onChange={handleAnimeFormChange}
          className="anime-form__input"
          type="text"
          placeholder="ex 23 min"
          aria-label="Write the anime duration"
          required
        />
      </section>
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="synopsis">
          Synopsis
        </label>
        <textarea
          value={animeForm.synopsis}
          id="synopsis"
          onChange={handleAnimeFormChange}
          className="anime-form__input anime-form__input--textarea"
          placeholder="ex With Tomura Shigaraki at its helm, the former Liberation Army is now known as the Paranormal Liberation Front. This organized criminal group poses an immense threat to the Hero Association..."
          aria-label="Write the anime synopsis"
          required
        />
      </section>
      <Button className="anime-form__button" type="submit">
        {submitButtonText}
      </Button>
    </AnimeFormStyled>
  );
};

export default AnimeForm;

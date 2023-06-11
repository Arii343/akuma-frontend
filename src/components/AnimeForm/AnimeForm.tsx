import Button from "../Button/Button";
import AnimeFormStyled from "./AnimeFormStyled";

const AnimeForm = (): React.ReactElement => {
  return (
    <AnimeFormStyled className="anime-form">
      <section className="anime-form__section">
        <label className="anime-form__label" htmlFor="englishTitle">
          English title
        </label>
        <input
          id="englishTitle"
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
          id="japaneseTitle"
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
          id="releaseYear"
          className="anime-form__input"
          type="text"
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
          id="rating"
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
          id="demographics"
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
          id="genres"
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
          id="image"
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
          id="score"
          className="anime-form__input"
          type="text"
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
          id="rank"
          className="anime-form__input"
          type="text"
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
          id="popularity"
          className="anime-form__input"
          type="text"
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
          id="type"
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
          id="source"
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
          id="episodes"
          className="anime-form__input"
          type="text"
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
          id="status"
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
          id="duration"
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
          id="synopsis"
          className="anime-form__input anime-form__input--textarea"
          placeholder="ex With Tomura Shigaraki at its helm, the former Liberation Army is now known as the Paranormal Liberation Front. This organized criminal group poses an immense threat to the Hero Association..."
          aria-label="Write the anime synopsis"
          required
        />
      </section>
      <Button className="anime-form__button">Create</Button>
    </AnimeFormStyled>
  );
};

export default AnimeForm;

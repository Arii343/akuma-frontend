import { useRef } from "react";
import AnimeForm from "../../components/AnimeForm/AnimeForm";
import { useAppDispatch } from "../../store";
import { createAnimeActionCreator } from "../../store/animes/animesSlice";
import { AnimeDataStructure } from "../../store/animes/types";
import CreateAnimePageStyled from "./CreateAnimePageStyled";
import scrollTo from "../../utils/componentUtils";
import useAnimes from "../../hooks/useAnimes/useAnimes";

const CreateAnimePage = (): React.ReactElement => {
  const { createAnime } = useAnimes();
  const dispatch = useAppDispatch();
  const pageTitleRef = useRef<HTMLHeadingElement>(null);

  const handleCreateAnimeSubmit = async (newAnime: AnimeDataStructure) => {
    const createdAnime = await createAnime(newAnime);
    dispatch(createAnimeActionCreator(createdAnime));

    scrollTo(pageTitleRef);
  };

  return (
    <CreateAnimePageStyled className="create-anime">
      <h1 className="create-anime__title" ref={pageTitleRef}>
        Create Anime
      </h1>
      <AnimeForm onSubmit={handleCreateAnimeSubmit} />
    </CreateAnimePageStyled>
  );
};

export default CreateAnimePage;

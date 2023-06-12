import { useRef } from "react";
import AnimeForm from "../../components/AnimeForm/AnimeForm";
import { useAppDispatch } from "../../store";
import { createAnimeActionCreator } from "../../store/animes/animesSlice";
import { AnimeDataStructure } from "../../store/animes/types";
import CreateAnimePageStyled from "./CreateAnimePageStyled";
import scrollTo from "../../utils/componentUtils";

const CreateAnimePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const pageTitleRef = useRef<HTMLHeadingElement>(null);

  const handleSubmit = (newAnime: AnimeDataStructure) => {
    dispatch(createAnimeActionCreator({ ...newAnime, id: "_provisional_id" }));
    scrollTo(pageTitleRef);
  };

  return (
    <CreateAnimePageStyled className="create-anime">
      <h1 className="create-anime__title" ref={pageTitleRef}>
        Create Anime
      </h1>
      <AnimeForm onSubmit={handleSubmit} />
    </CreateAnimePageStyled>
  );
};

export default CreateAnimePage;

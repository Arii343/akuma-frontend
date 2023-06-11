import AnimeForm from "../../components/AnimeForm/AnimeForm";
import CreateAnimePageStyled from "./CreateAnimePageStyled";

const CreateAnimePage = (): React.ReactElement => {
  return (
    <CreateAnimePageStyled className="create-anime">
      <h1 className="create-anime__title">Create Anime</h1>
      <AnimeForm />
    </CreateAnimePageStyled>
  );
};

export default CreateAnimePage;

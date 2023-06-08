import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <NotFoundPageStyled className="notFound-page">
      <section className="notFound-page__header">
        <img
          src="./img/notFoundError-404.webp"
          alt="Goku expelling rainbow with the number 404"
          height={270}
          width={311}
          className="notFound-page__image"
        />
      </section>
      <section className="notFound-page__body">
        <span className="notFound-page__title">Ooops!</span>
        <span className="notFound-page__subtitle">Page not found</span>
      </section>
      <section className="notFound-page__footer">
        <Button onClick={handleOnClick} className="notFound-page__button">
          Go back to Home
        </Button>
      </section>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;

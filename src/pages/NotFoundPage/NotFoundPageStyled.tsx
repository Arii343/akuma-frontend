import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .notFound-page__header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 20px 0 20px;
  }

  .notFound-page__body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 35px;
    gap: 10px;
  }

  .notFound-page__image {
    width: 100%;
    height: auto;
    max-width: 300px;
  }

  .notFound-page__title {
    font-size: ${(props) => props.theme.font.size.extraExtraLarge};
    font-weight: ${(props) => props.theme.font.weight.extraBold};
  }

  .notFound-page__subtitle {
    font-size: ${(props) => props.theme.font.size.large};
    font-weight: ${(props) => props.theme.font.weight.medium};
  }

  .notFound-page__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
  }

  .notFound-page__button {
    width: 345px;
    height: 48px;
    background-color: ${(props) => props.theme.backgroundColor.denary};
    color: ${(props) => props.theme.color.septendary};
    font-size: ${(props) => props.theme.font.size.small};
    border-radius: 4px;
    padding-top: 5px;
  }
`;

export default NotFoundPageStyled;

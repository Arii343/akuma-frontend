import styled from "styled-components";

const AnimeFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  padding: ${(props) => props.theme.spacing.large};

  .anime-form__section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .anime-form__label {
    color: ${(props) => props.theme.color.secondary};
    font-size: ${(props) => props.theme.font.size.small};
    font-weight: ${(props) => props.theme.font.weight.medium};
  }

  .anime-form__input {
    background-color: ${(props) => props.theme.backgroundColor.nonary};
    border-radius: 6px;
    height: 48px;
    width: 100%;
    padding: ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.color.secondary};
    font-weight: ${(props) => props.theme.font.weight.semiBold};
    border: none;
    font-size: ${(props) => props.theme.font.size.extraSmall};

    ::placeholder {
      font-weight: ${(props) => props.theme.font.weight.medium};
      color: ${(props) => props.theme.color.terciary};
    }
  }

  .anime-form__title {
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.font.size.medium};
    padding-top: 5px;
  }

  .anime-form__input--textarea {
    font-family: inherit;
    height: 121px;
  }

  .anime-form__button {
    height: 48px;
    color: ${(props) => props.theme.color.septendary};
    background-color: ${(props) => props.theme.backgroundColor.denary};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: ${(props) => props.theme.font.size.small};
  }
`;

export default AnimeFormStyled;

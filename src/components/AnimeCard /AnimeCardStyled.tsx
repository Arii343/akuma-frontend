import styled from "styled-components";

const AnimeCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .anime-card__image {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
      0 4px 4px rgba(103, 132, 187, 0.05);
    object-fit: cover;
    background-color: ${(props) => props.theme.backgroundColor.octonary};
  }

  .anime-card__button {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }

  .anime-card__button--delete {
    background-color: ${(props) => props.theme.backgroundColor.quinary};
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .anime-card__title {
    font-size: ${(props) => props.theme.font.size.extraSmall};
    color: ${(props) => props.theme.color.primary};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 17px;
  }
`;

export default AnimeCardStyled;

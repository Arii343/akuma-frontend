import styled from "styled-components";

const AnimeCardStyled = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .anime-card__image {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
      0 4px 4px rgba(103, 132, 187, 0.05);
    object-fit: cover;
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

import styled from "styled-components";

const AnimeCardSkeletonStyled = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  .anime-card-skeleton__image {
    width: 100%;
    height: 205px;
    border-radius: 6px;
    padding-top: 100%;
    position: relative;
    background-color: #adc0d2;
  }

  .anime-card-skeleton__title {
    width: 100px;
    height: 17px;
    border-radius: 5px;
    background-color: #adc0d2;
  }
`;

export default AnimeCardSkeletonStyled;

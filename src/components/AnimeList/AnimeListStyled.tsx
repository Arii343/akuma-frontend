import styled from "styled-components";

const AnimeListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  grid-gap: 20px 12px;
  margin-top: 20px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  }
`;

export default AnimeListStyled;

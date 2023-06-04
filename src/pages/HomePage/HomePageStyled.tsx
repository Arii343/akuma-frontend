import styled from "styled-components";

const HomePageStyled = styled.div`
  padding: ${(props) => props.theme.spacing.large};

  .home-page__title {
    color: ${(props) => props.theme.color.secondary};
    font-size: ${(props) => props.theme.font.size.extraLarge};
  }
`;

export default HomePageStyled;

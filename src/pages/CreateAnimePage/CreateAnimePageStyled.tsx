import styled from "styled-components";

const CreateAnimePageStyled = styled.div`
  margin-top: ${(props) => props.theme.spacing.extraExtraLarge};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .create-anime__title {
    color: ${(props) => props.theme.color.secondary};
    font-weight: ${(props) => props.theme.font.weight.extraBold};
    font-size: ${(props) => props.theme.font.size.extraLarge};
  }
`;

export default CreateAnimePageStyled;

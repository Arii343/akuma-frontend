import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.medium};
  position: relative;

  .logo {
    height: 35px;
  }
`;

export default HeaderStyled;

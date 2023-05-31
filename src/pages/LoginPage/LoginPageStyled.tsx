import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacing.extraExtraLarge};

  .login__title {
    color: ${(props) => props.theme.color.secondary};
    font-weight: ${(props) => props.theme.font.weight.extraBold};
    font-size: ${(props) => props.theme.font.size.extraLarge};
  }
`;

export default LoginPageStyled;

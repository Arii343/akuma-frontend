import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px ${(props) => props.theme.spacing.large};
  gap: ${(props) => props.theme.spacing.extraLarge};
  width: 100%;

  .login-form__label {
    background-color: ${(props) => props.theme.backgroundColor.nonary};
    border-radius: 6px;
    display: flex;
    align-items: center;
    height: 48px;
    gap: ${(props) => props.theme.spacing.small};
    padding: ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.color.secondary};
    font-weight: ${(props) => props.theme.font.weight.semiBold};

    :focus-within {
      outline: rgb(18, 172, 253) auto 1px;
    }
  }

  .login-form__input {
    all: unset;
    padding-top: 4px;
    width: 100%;

    ::placeholder {
      font-weight: ${(props) => props.theme.font.weight.medium};
      color: ${(props) => props.theme.color.terciary};
    }
  }

  .login-form__submit-button {
    background-color: ${(props) => props.theme.backgroundColor.quaternary};
    height: 48px;
    border-radius: 6px;
    color: ${(props) => props.theme.color.septendary};
    font-size: ${(props) => props.theme.font.size.small};
    margin: 20px 0;
  }
`;

export default LoginFormStyled;

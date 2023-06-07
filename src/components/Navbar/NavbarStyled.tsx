import styled from "styled-components";

const NavbarStyled = styled.nav`
  .navbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
    width: 48px;
    height: 48px;
    border-radius: 6px;
    cursor: pointer;
    z-index: 2;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: ${(props) => props.theme.spacing.medium};
    background-color: ${(props) => props.theme.backgroundColor.secondary};
    color: ${(props) => props.theme.color.senary};
    gap: ${(props) => props.theme.spacing.large};
    font-size: ${(props) => props.theme.font.size.large};
    position: absolute;
    top: 78px;
    left: 0;
    border-radius: 0 0 6px 6px;
    z-index: 1;
  }

  .navbar-list__button {
    background-color: transparent;
    color: ${(props) => props.theme.color.senary};
    font-size: ${(props) => props.theme.font.size.large};
    cursor: pointer;
  }

  .navbar-list--close {
    opacity: 0;
    visibility: hidden;
    transition: 250ms ease;
  }

  .navbar-list--open {
    opacity: 1;
    visibility: visible;
    transition: 250ms ease;
  }

  .active {
    color: ${(props) => props.theme.color.quinary};
  }

  .navbar-toggle {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export default NavbarStyled;

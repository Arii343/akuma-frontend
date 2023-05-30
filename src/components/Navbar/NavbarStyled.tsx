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
  }

  .close {
    opacity: 0;
    visibility: hidden;
    transition: 250ms ease;
  }

  .open {
    opacity: 1;
    visibility: visible;
    transition: 250ms ease;
  }

  .active {
    color: ${(props) => props.theme.color.quinary};
  }
`;

export default NavbarStyled;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../routers/paths/paths";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Button from "../Button/Button";

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLogout = () => {
    dispatch(logoutUserActionCreator());
  };

  return (
    <NavbarStyled>
      <Button className="navbar-button" onClick={toggleMenu}>
        <img src="./img/burger.svg" alt="burger icon" width={36} height={36} />
      </Button>
      {isOpen && (
        <div
          className="navbar-toggle"
          onClick={toggleMenu}
          tabIndex={0}
          role="button"
          onKeyUp={toggleMenu}
        ></div>
      )}
      <ul
        className={`navbar-list ${
          isOpen ? "navbar-list--open" : "navbar-list--close"
        }`}
        onClick={toggleMenu}
        tabIndex={0}
        role="menu"
        onKeyUp={toggleMenu}
      >
        <li className="navbar-list__item">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        {isLogged ? (
          <>
            <li className="navbar-list__item">
              <NavLink to={"/create"}>Create</NavLink>
            </li>
            <li className="navbar-list__item">
              <Button
                onClick={handleClickLogout}
                className="navbar-list__button"
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <li className="navbar-list__item">
            <NavLink to={paths.login}>Login</NavLink>
          </li>
        )}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

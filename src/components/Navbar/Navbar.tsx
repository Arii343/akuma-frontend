import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import { paths } from "../../routers/paths/paths";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Button from "../Button/Button";

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    const handler = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLogout = () => {
    dispatch(logoutUserActionCreator());
  };

  return (
    <NavbarStyled>
      <button className="navbar-button" onClick={toggleMenu}>
        <img src="./img/burger.svg" alt="burger icon" width={36} height={36} />
      </button>
      <ul className={`navbar-list ${isOpen ? "open" : "close"}`}>
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

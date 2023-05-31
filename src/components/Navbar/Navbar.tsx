import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <li className="navbar-list__item">
          <NavLink to={"/create"}>Create</NavLink>
        </li>
        <li className="navbar-list__item">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img className="logo" src="./img/akuma.svg" alt="akuma logo" />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;

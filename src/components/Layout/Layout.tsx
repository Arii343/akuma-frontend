import Header from "../Header/Header";
import LayoutSytled from "./LayoutStyled";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <LayoutSytled>
      <Header />
      <Outlet />
    </LayoutSytled>
  );
};

export default Layout;

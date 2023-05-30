import LayoutSytled from "./LayoutStyled";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <LayoutSytled>
      <Outlet />
    </LayoutSytled>
  );
};

export default Layout;

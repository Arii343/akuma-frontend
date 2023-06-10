import { useAppSelector } from "../../store";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import LayoutSytled from "./LayoutStyled";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  const showSpinner = useAppSelector((state) => state.ui.showSpinner);
  return (
    <LayoutSytled>
      <Header />
      <Outlet />
      {showSpinner && <Loader />}
    </LayoutSytled>
  );
};

export default Layout;

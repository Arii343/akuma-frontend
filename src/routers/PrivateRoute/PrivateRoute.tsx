import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store";

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;

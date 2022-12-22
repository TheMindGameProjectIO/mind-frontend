import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

interface IValidateRouteProps {
  condition: boolean;
  navigate: string;
}

const ValidateRoute: FC<IValidateRouteProps> = ({ condition, navigate }) => {
  return condition ? <Outlet /> : <Navigate to={navigate} />;
};

export default ValidateRoute;

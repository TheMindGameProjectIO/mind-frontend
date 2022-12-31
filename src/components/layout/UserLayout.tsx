import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthController } from "../../api";
import { useAppDispatch } from "../../redux/hooks";
import { clear, set } from "../../redux/slices/userSlice";
import QueryWrapper, { QueryContext, TQueryContext } from "../QueryWrapper";
import { User } from "../../types";
import { useDispatch } from "react-redux";

const UserLayout = () => {
  return (
    <QueryWrapper queryKey="me" queryFn={() => AuthController.me()}>
      <UserLayoutContent />
    </QueryWrapper>
  );
};

const UserLayoutContent = () => {
  const { data } = useContext<TQueryContext<User>>(QueryContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set(data));

    return () => {
      dispatch(clear());
    };
  });

  return <Outlet />;
};

export default UserLayout;

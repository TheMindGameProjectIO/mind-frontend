import { ReactNode, FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { authRoutes, privateRoutes, publicRoutes } from "../../routes";
import { LayoutContext } from "./Layout";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { FiLogOut } from "react-icons/fi";

interface INavbarProps {
  setModal: (value: boolean) => void;
}

const Navbar: FC<INavbarProps> = ({ setModal }) => {
  const { currentLink } = useContext(LayoutContext);
  const isAuth = useAppSelector(selectIsAuth);
  return (
    <div className="flex items-center justify-evenly w-full max-w-[500px]">
      <NavbarItem current={currentLink === 1} to={publicRoutes.index}>
        Home
      </NavbarItem>
      {isAuth ? (
        <NavbarItem current={currentLink === 2} to={privateRoutes.lobbiesRoutes.create}>
          Lobby
        </NavbarItem>
      ) : null}
      {isAuth ? (
        <FiLogOut onClick={() => setModal(true)} className="cursor-pointer" />
      ) : (
        <div className="flex items-center gap-6">
          <NavbarItem current={currentLink === 3} to={authRoutes.login}>
            Login
          </NavbarItem>
          <NavbarItem current={currentLink === 4} to={authRoutes.signup}>
            Signup
          </NavbarItem>
        </div>
      )}
      {!isAuth ? (
        <NavbarItem current={currentLink == 5} to={authRoutes.forgotPassword}>
          Forgot password
        </NavbarItem>
      ) : null}
    </div>
  );
};

interface INavbarItemProps {
  children: ReactNode;
  to: string;
  current: boolean;
}

const NavbarItem: FC<INavbarItemProps> = ({ to, children, current }) => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink
      className={`text-cr-gray ${current ? "py-1 px-6 rounded-full" : ""}`}
      style={{ backgroundColor: current ? "rgba(242, 216, 186, 0.25)" : "" }}
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default Navbar;

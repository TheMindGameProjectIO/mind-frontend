import { ReactNode, FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { LayoutContext } from "./Layout";

const Navbar = () => {
  const { currentLink } = useContext(LayoutContext);

  return (
    <div className="flex items-center justify-evenly w-full max-w-[500px]">
      <NavbarItem current={currentLink === 1} to={publicRoutes.index}>
        Home
      </NavbarItem>
      <NavbarItem current={currentLink === 2} to={privateRoutes.lobbiesRoutes.list()}>
        Lobby
      </NavbarItem>
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
      style={{ backgroundColor: current ? `rgba(242, 216, 186, 0.25)` : "" }}
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default Navbar;

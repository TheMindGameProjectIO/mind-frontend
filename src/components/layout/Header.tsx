import Logo from "../Logo";
import Navbar from "./Navbar";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsAuth, unauthorize } from "../../redux/slices/authSlice";
import { useState } from "react";
import Button from "../ui/Button";
import WarningModal from "../ui/WarningModal";

const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  const logout = () => {
    dispatch(unauthorize());
    localStorage.clear();
    setModal(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 center-content bg-dark-blue-400 z-40">
        <div
          className="w-full max-w-main flex items-center py-3 px-6 justify-evenly"
          style={{ textShadow: "0px 5px 20px rgba(189, 170, 147, 0.5)" }}
        >
          <Logo />
          <Navbar />
          {isAuth ? <FiLogOut onClick={() => setModal(true)} className="cursor-pointer" /> : null}
        </div>
      </header>
      <WarningModal title="Are you sure you want to log out?" visible={modal} onClose={() => setModal(false)}>
        <Button onClick={() => logout()}> Yes </Button>
        <Button onClick={() => setModal(false)}> No </Button>
      </WarningModal>
    </>
  );
};

export default Header;

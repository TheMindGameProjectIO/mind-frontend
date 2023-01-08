import Logo from "../Logo";
import Navbar from "./Navbar";
import { FiLogOut, FiAlertCircle } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsAuth, unauthorize } from "../../redux/slices/authSlice";
import { useState } from "react";
import Modal from "../Modal";
import Button from "../ui/Button";

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
      <Modal visible={modal} onClose={() => setModal(false)}>
        <div className="bg-main-blue p-6 rounded-xl">
          <div className="center-content">
            <FiAlertCircle className="h-16 w-16" />
          </div>
          <div>
            <h1 className="text-2xl font-bold my-3">Are you sure you want to log out?</h1>
            <div className="flex items-center gap-3">
              <Button onClick={() => logout()}> Yes </Button>
              <Button onClick={() => setModal(false)}> No </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;

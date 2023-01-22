import { FC, ReactNode } from "react";

export interface IModalProps {
  children: ReactNode;
  visible?: boolean;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ onClose, visible, children }) => {
  return (
    <>
      {visible ? (
        <div onClick={() => onClose()} className="z-50 fixed left-0 top-0 bg-black/60 full-screen center-content ">
          <div onClick={(e) => e.stopPropagation()} className="modal">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

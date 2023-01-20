import Modal, { IModalProps } from "../Modal";
import { FC, ReactNode } from "react";
import { FiAlertCircle } from "react-icons/fi";

interface IWarningModalProps extends Partial<IModalProps> {
  title: string;
}

const WarningModal: FC<IWarningModalProps> = ({ children, visible, onClose = () => {}, title }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="bg-main-blue p-6 rounded-xl">
        <div className="center-content">
          <FiAlertCircle className="h-16 w-16" />
        </div>
        <div>
          <h1 className="text-2xl font-bold my-3 max-w-[350px]">{title}</h1>
          <div className="flex items-center gap-3">{children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;

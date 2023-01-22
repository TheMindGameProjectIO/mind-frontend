import { FC } from "react";
import Modal, { IModalProps } from "./Modal";
import { FiXCircle, FiSend } from "react-icons/fi";
import socket from "../utils/socket/socket";

interface IVotingProps extends Partial<IModalProps> {
  author: string;
  agreed: number;
  total: number;
}

const Voting: FC<IVotingProps> = ({ visible, author, agreed, total }) => {
  return (
    <Modal visible={visible} onClose={() => null}>
      <div
        className="max-w-[600px] text-center text-[20px] px-12 sm:px-24 py-12"
        style={{
          background: "rgba(7, 17, 34, 0.9)",
          boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          color: "#F2D8BA",
        }}
      >
        <div>
          <h1 className="text-[40px] sm:text-[50px] leading-10"> Looks like {author} started the voting! </h1>
          <hr className="my-6" />
        </div>

        <div className="flex justify-evenly gap-3">
          <div className="center-content flex-col gap-y-2">
            <span>
              {agreed} / {total}
            </span>
            <FiSend
              onClick={() => {
                socket.connection.emit("game:player:shootingstar", true);
              }}
              className="h-12 w-12 cursor-pointer"
            />
          </div>
          <div className="center-content flex-col gap-y-2">
            <FiXCircle
              onClick={() => {
                socket.connection.emit("game:player:shootingstar", false);
              }}
              className="h-12 w-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Voting;

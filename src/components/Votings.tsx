import { FC } from "react";
import Modal, { IModalProps } from "./Modal";
import { FiXCircle, FiSend } from "react-icons/fi";

interface IVotingProps extends Partial<IModalProps> {
  author: string;
  agreed: number;
  disagreed: number;
}

const Voting: FC<IVotingProps> = ({ visible, author, agreed, disagreed }) => {
  return (
    <Modal visible={visible} onClose={() => {}}>
      <div
        className="max-w-[600px] text-center text-[20px] px-24 py-12"
        style={{
          background: "rgba(7, 17, 34, 0.9)",
          boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          color: "#F2D8BA",
        }}
      >
        <div>
          <h1 className="text-[50px] leading-10"> Looks like {author} started the voting! </h1>
          <hr className="my-6" />
        </div>

        <div className="flex items-center justify-evenly gap-3">
          <div className="center-content flex-col gap-y-2">
            <span>{agreed}</span>
            <FiSend className="h-12 w-12 cursor-pointer" />
          </div>
          <div className="center-content flex-col gap-y-2">
            <span>{disagreed}</span>
            <FiXCircle className="h-12 w-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Voting;

import { FC } from "react";
import Modal, { IModalProps } from "./Modal";

type IRulesProps = Partial<IModalProps>;

const Rules: FC<IRulesProps> = ({ visible, onClose = () => null }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
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
          <h1 className="text-[50px]"> How to play </h1>
          <hr className="my-6" />
        </div>

        <div className="flex-col center-content gap-y-3">
          <p>
            Collectively you must play these cards into the center of the table on a single discard pile in ascending
            order but you cannot communicate with one another in any way as to which cards you hold.
          </p>

          <p>
            You simply stare into one another, and when you feel the time is right, you play your lowest card. If no one
            holds a card lower than what you played, great, the game continues!
          </p>

          <p>
            If someone did, all players discard face up all cards lower than what you played, and you lose one life.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Rules;

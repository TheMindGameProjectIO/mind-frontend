import { FC, useEffect } from "react";
import socket from "../../utils/socket/socket";
import { FiX } from "react-icons/fi";

interface IReactionProps {
  emoji: string;
  className?: string;
  emojiOfAuthor: boolean;
}

const hideEmoji = () => {
  socket.connection.emit("game:player:react", null as unknown as string);
};

const Reaction: FC<IReactionProps> = ({ emoji, className, emojiOfAuthor }) => {
  useEffect(() => {
    if (emojiOfAuthor) {
      const timer = setTimeout(() => {
        hideEmoji();
      }, 30000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [emoji]);

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className="bg-white text-[3rem] p-1 center-content"
        style={{
          borderRadius: "35% 35% 35% 0",
        }}
      >
        <p> {emoji} </p>
      </div>
      {emojiOfAuthor ? (
        <FiX
          onClick={() => {
            hideEmoji();
          }}
          className="cursor-pointer text-[1.5rem] ml-3"
        />
      ) : null}
    </div>
  );
};

export default Reaction;

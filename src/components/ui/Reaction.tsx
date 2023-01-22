import { FC, useEffect } from "react";
import socket from "../../utils/socket/socket";

interface IReactionProps {
  emoji: string;
  className?: string;
}

const Reaction: FC<IReactionProps> = ({ emoji, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      socket.connection.emit("game:player:react", null as unknown as string);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [emoji]);

  return (
    <div
      className={`bg-white text-[3rem] p-1 center-content ${className}`}
      style={{
        borderRadius: "35% 35% 35% 0",
      }}
    >
      <p> {emoji} </p>
    </div>
  );
};

export default Reaction;

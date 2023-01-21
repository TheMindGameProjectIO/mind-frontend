import { createContext, ReactNode, FC } from "react";
import { TCard } from "../types";
import socket from "../utils/socket/socket";

export const SHOOTING_STAR = "0";

interface IGameProviderProps {
  children: ReactNode;
}

type TGameContext = {
  playCard: (card: TCard) => void;
};

export const GameContext = createContext<TGameContext>({
  playCard: () => {},
});

const GameProvider: FC<IGameProviderProps> = ({ children }) => {
  const playCard = (card: TCard) => {
    if (card !== SHOOTING_STAR) {
      socket.connection.emit("game:player:play", card);
    } else {
      socket.connection.emit("game:player:shootingstar", true);
    }
  };

  return <GameContext.Provider value={{ playCard }}>{children}</GameContext.Provider>;
};

export default GameProvider;

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
      console.log(`card:played:${card}`);
      socket.connection.emit("game:player:play", card);
    }
  };

  return <GameContext.Provider value={{ playCard }}>{children}</GameContext.Provider>;
};

export default GameProvider;

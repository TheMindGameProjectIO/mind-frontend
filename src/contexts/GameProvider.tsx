import { createContext, ReactNode, FC, useState } from "react";
import { SHOOTING_STAR } from "../components/card/ShootingStar";
import { TCard } from "../types";

interface IGameProviderProps {
  children: ReactNode;
  serverCards: number[];
}

type TGameContext = {
  playCard: (card: number) => void;
  cards: number[];
};

export const GameContext = createContext<TGameContext>({
  playCard: () => {},
  cards: [],
});

const GameProvider: FC<IGameProviderProps> = ({ children, serverCards }) => {
  const [cards, setCards] = useState<TCard[]>(serverCards);

  const playCard = (card: TCard) => {
    if (card !== SHOOTING_STAR) {
      setCards([...cards, card]);
    }
  };

  return <GameContext.Provider value={{ playCard, cards }}>{children}</GameContext.Provider>;
};

export default GameProvider;

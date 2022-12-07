import { createContext, ReactNode, FC, useState } from 'react';

interface IGameProviderProps {
    children: ReactNode;
}

type TGameContext = {
    playCard: (card: number) => void;
    cards: number[];
}

export const GameContext = createContext<TGameContext>({
    playCard: () => { },
    cards: []
});

const GameProvider: FC<IGameProviderProps> = ({ children }) => {
    const [cards, setCards] = useState<number[]>([1, 2, 3, 4, 5]);

    const playCard = (card: number) => {
        setCards([...cards, card]);
    }

    return (
        <GameContext.Provider value={{ playCard, cards }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
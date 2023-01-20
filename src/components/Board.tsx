import { FC } from "react";
import { TCard } from "../types";
import PlayingCard from "./card/PlayingCard";
import Box from "./ui/Box";

interface IBoardProps {
  cards: TCard[];
}

const Board: FC<IBoardProps> = ({ cards }) => {
  return (
    <Box className="w-full max-w-[600px]">
      {cards.length !== 0 ? (
        <PlayingCard className="board-card" size="large" value={cards[cards.length - 1]} toPlay={false} />
      ) : (
        <p className="text-2xl front-bold p-20"> No cards here... </p>
      )}
    </Box>
  );
};

export default Board;

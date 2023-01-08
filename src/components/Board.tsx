import { FC, useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import PlayingCard from "./card/PlayingCard";
import Box from "./ui/Box";

interface IBoardProps {}

const Board: FC<IBoardProps> = () => {
  const { cards } = useContext(GameContext);

  return (
    <Box className="w-full max-w-[600px]">
      {cards.length !== 0 ? (
        <PlayingCard size="large" value={cards[cards.length - 1]} toPlay={false} />
      ) : (
        <p className="text-2xl front-bold p-20"> No cards here... </p>
      )}
    </Box>
  );
};

export default Board;

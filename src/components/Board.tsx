import { FC, useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import LiveCard from "./card/LiveCard";
import PlayingCard from "./card/PlayingCard";
import ShootingStar from "./card/ShootingStar";
import Box from "./ui/Box";

interface IBoardProps {}

const Board: FC<IBoardProps> = () => {
  const { cards } = useContext(GameContext);

  return (
    <Box className="w-full max-w-[600px]">
      <PlayingCard size="large" value={cards[cards.length - 1]} toPlay={false} />
    </Box>
  );
};

export default Board;

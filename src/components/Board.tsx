import { FC, useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import LiveCard from "./card/LiveCard";
import PlayingCard from "./card/PlayingCard";
import ShootingStar from "./card/ShootingStar";

interface IBoardProps {}

const Board: FC<IBoardProps> = () => {
  const { cards } = useContext(GameContext);

  return <div className="bg-red-100">{<ShootingStar />}</div>;
};

export default Board;

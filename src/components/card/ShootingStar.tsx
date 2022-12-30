import { useContext } from "react";
import { GameContext } from "../../contexts/GameProvider";
import Card from "./Card";
import { Star } from "../../assets/svg";

export const SHOOTING_STAR = 0;

const ShootingStar = () => {
  const { playCard } = useContext(GameContext);

  const onClick = () => {
    // TODO: add voting
    playCard(SHOOTING_STAR);
  };

  return (
    <Card onClick={onClick}>
      <div
        className="w-[120px] h-[120px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Star})`,
        }}
      />
    </Card>
  );
};

export default ShootingStar;

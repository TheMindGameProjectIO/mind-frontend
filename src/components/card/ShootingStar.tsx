import { FC, useContext } from "react";
import { GameContext, SHOOTING_STAR } from "../../contexts/GameProvider";
import Card, { CardSize } from "./Card";
import { Star } from "../../assets/svg";

interface IShootingStarProps {
  size?: CardSize;
  className?: string;
  toPlay?: boolean;
  onPlay?: () => void;
}

const ShootingStar: FC<IShootingStarProps> = ({ size = "medium", className, toPlay = false, onPlay }) => {
  const { playCard } = useContext(GameContext);

  const onClick = () => {
    if (toPlay && onPlay) {
      playCard(SHOOTING_STAR);
      onPlay();
    }
  };

  return (
    <Card className={className} onClick={onClick} size={size}>
      <div
        className={`bg-cover bg-center ${toPlay ? "cursor-pointer" : ""}`}
        style={{
          backgroundImage: `url(${Star})`,
          width: size === "small" ? "80px" : "120px",
          height: size === "small" ? "80px" : "120px",
        }}
      />
    </Card>
  );
};

export default ShootingStar;

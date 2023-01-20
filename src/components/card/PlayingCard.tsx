import Card, { CardSize } from "./Card";
import { FC, useContext } from "react";
import { hideValue } from "../../helpers";
import { GameContext } from "../../contexts/GameProvider";
import { TCard } from "../../types/card";

interface IPlayingCardProps {
  value?: TCard;
  toPlay?: boolean;
  onPlay?: (card: TCard) => void;
  hide?: boolean;
  size?: CardSize;
  className?: string;
}

const PlayingCard: FC<IPlayingCardProps> = ({
  hide = false,
  value = "0",
  onPlay = (card: TCard) => {},
  toPlay = true,
  size = "medium",
  className,
}) => {
  const { playCard } = useContext(GameContext);

  const onClick = () => {
    if (toPlay && value) {
      playCard(value);
      onPlay(value);
    }
  };

  return (
    <Card
      size={size}
      onClick={onClick}
      className={`${toPlay ? "cursor-pointer hover:-translate-y-3 transition-all" : ""} ${className}`}
    >
      <div
        className={`${
          !hide ? "text-[3rem]" : size === "small" ? "text-[0.4rem]" : "text-[1.3rem]"
        } font-bold text-main-blue center-content px-6 py-3 rounded-full`}
      >
        {!hide ? value : "The Mind"}
      </div>
      <p className="card-side-number left-6 top-2"> {hideValue(hide, value)} </p>
      <p className="card-side-number left-6 bottom-2 rotate-180"> {hideValue(hide, value)} </p>
      <p className="card-side-number right-6 top-2"> {hideValue(hide, value)} </p>
      <p className="card-side-number right-6 bottom-2 rotate-180"> {hideValue(hide, value)} </p>
    </Card>
  );
};

export default PlayingCard;

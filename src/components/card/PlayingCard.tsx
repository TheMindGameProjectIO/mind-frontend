import Card from "./Card";
import { FC, useContext } from "react";
import { hideValue } from "../../helpers";
import { GameContext } from "../../contexts/GameProvider";

interface IPlayingCardProps {
  value: number;
  toPlay?: boolean;
  onPlay?: (value: number) => void;
  hide?: boolean;
}

const PlayingCard: FC<IPlayingCardProps> = ({ hide = false, value, onPlay = (value: number) => {}, toPlay = true }) => {
  const { playCard } = useContext(GameContext);

  const onClick = () => {
    if (toPlay) {
      playCard(value);
      onPlay(value);
    }
  };

  return (
    <Card onClick={onClick}>
      <div
        className={`${
          !hide ? "text-[3rem]" : "text-[1.3rem]"
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

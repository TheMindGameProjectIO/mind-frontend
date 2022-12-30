import { FC, ReactNode, MouseEvent } from "react";
import BgImage from "../../assets/img/card.jpg";

interface ICardProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[150px] h-[200px] center-content bg-contain bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;

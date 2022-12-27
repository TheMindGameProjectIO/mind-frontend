import { FC, ReactNode, MouseEvent } from "react";

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
        backgroundImage: `url(${require("../../assets/img/card.jpg")})`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;

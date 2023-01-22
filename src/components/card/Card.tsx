import { FC, ReactNode, MouseEvent } from "react";
import BgImage from "../../assets/img/card.jpg";

export type CardSize = "small" | "medium" | "large";

interface ICardProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
  className?: string;
  size?: CardSize;
}

const Card: FC<ICardProps> = ({ children, onClick, className, size = "medium" }) => {
  return (
    <div
      onClick={onClick}
      className={`center-content bg-cover bg-no-repeat bg-center relative rounded-xl ${className}`}
      style={{
        backgroundImage: `url(${BgImage})`,
        width: size === "small" ? "80px" : size === "medium" ? "143px" : "150px",
        height: size === "small" ? "100px" : "180px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;

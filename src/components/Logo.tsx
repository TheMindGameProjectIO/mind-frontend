import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { publicRoutes } from "../routes";

interface ILogoProps {
  clickable?: boolean;
  className?: string;
}

const Logo: FC<ILogoProps> = ({ clickable = true }) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (clickable) {
      navigate(publicRoutes.index);
    }
  };

  return (
    <div onClick={onClick}>
      <p className={`text-main-light text-4xl font-bold ${clickable ? "cursor-pointer" : ""}`}> MG </p>
    </div>
  );
};

export default Logo;

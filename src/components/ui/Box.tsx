import { FC, ReactNode } from "react";

interface IBoxProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  onClick?: () => void;
}

const Box: FC<IBoxProps> = ({ children, className, light = false, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`${!light ? "bg-dark-blue-100" : "bg-dark-blue-200"} p-3 rounded-[20px] center-content ${className}`}
      style={{
        boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </div>
  );
};

export default Box;

import { FC, ReactNode, MouseEvent } from "react";

type ButtonType = "button" | "submit" | "reset";

interface IButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  className?: string;
}

const Button: FC<IButtonProps> = ({ children, disabled = false, type = "button", className }) => {
  return (
    <button
      disabled={disabled}
      className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

import { FC, ReactNode } from "react";

interface IInputErrorProps {
  children: ReactNode;
  className?: string;
}

const InputError: FC<IInputErrorProps> = ({ children, className }) => {
  return <span className={`text-red-400 font-bold ${className}`}> {children} </span>;
};

export default InputError;

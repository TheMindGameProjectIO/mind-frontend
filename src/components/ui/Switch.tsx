import { FC } from "react";
import { ligthInputClassName } from "../../helpers";

export interface ISwicthProps {
  onChange: (value: boolean) => void;
  checked: boolean;
  placeholders?: { on: string; off: string };
  className?: string;
}

const Switch: FC<ISwicthProps> = ({ checked, onChange, placeholders, className }) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`${ligthInputClassName} relative cursor-pointer w-full max-w-[300px] h-[45px] rounded-full text-dark-blue-600 center-content ${className}`}
    >
      {/* circle */}
      <div
        className={`w-[40px] h-[40px] bg-dark-blue-600 rounded-full absolute trasition-all duration-200 ${
          !checked ? "-translate-x-14" : " translate-x-14"
        }`}
      />
      <p> {checked ? placeholders?.on : placeholders?.off} </p>
    </div>
  );
};

export default Switch;

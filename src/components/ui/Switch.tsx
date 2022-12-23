import { FC } from "react";

interface ISwicthProps {
  onChange: (value: boolean) => void;
  checked: boolean;
  placeholders: { on: string; off: string };
}

const Switch: FC<ISwicthProps> = ({ checked, onChange, placeholders }) => {
  return <div></div>;
};

export default Switch;

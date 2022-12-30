import Field from "./Field";
import { FC } from "react";
import { ISwicthProps } from "../Switch";
import Switch from "../Switch";

interface ISwitchFieldProps extends ISwicthProps {
  label: string;
}

const SwitchField: FC<ISwitchFieldProps> = ({ label, onChange, checked, placeholders }) => {
  return (
    <Field label={label}>
      <Switch onChange={onChange} checked={checked} placeholders={placeholders} />
    </Field>
  );
};

export default SwitchField;

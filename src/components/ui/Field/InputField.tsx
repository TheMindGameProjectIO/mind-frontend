import Field from "./Field";
import { FC } from "react";
import Input from "../Input";
import { ligthInputClassName } from "../../../helpers";

interface IInputFieldProps {
  label: string;
  placeholder: string;
  innerRef?: any;
}

const InputField: FC<IInputFieldProps> = ({ label, placeholder, innerRef }) => {
  return (
    <Field label={label}>
      <Input<string> placeholder={placeholder} className={ligthInputClassName} ref={innerRef} />
    </Field>
  );
};

export default InputField;

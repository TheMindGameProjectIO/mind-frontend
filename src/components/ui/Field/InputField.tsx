import Field from "./Field";
import Input from "../Input";
import { ligthInputClassName } from "../../../helpers";

interface IInputFieldProps<T> {
  label: string;
  placeholder: string;
  innerRef?: any;
  transform?: (value: string) => T;
}

export default function InputField<T>({ label, placeholder, innerRef, transform }: IInputFieldProps<T>) {
  return (
    <Field label={label}>
      <Input<T> placeholder={placeholder} className={ligthInputClassName} ref={innerRef} transform={transform} />
    </Field>
  );
}

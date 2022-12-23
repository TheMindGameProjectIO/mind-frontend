import { FC, ReactNode } from "react";

interface IFieldProps {
  label: string;
  children: ReactNode;
}

const Field: FC<IFieldProps> = ({ label, children }) => {
  return (
    <div>
      <h3 className="text-main-light border-2 rounded-[20px] border-cr-gray px-4 py-3"> {label} </h3>
      {children}
    </div>
  );
};

export default Field;

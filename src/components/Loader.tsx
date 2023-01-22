import { FC } from "react";

interface IILoaderProps {
  scale?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Loader: FC<IILoaderProps> = ({ scale, className, width = 64, height = 64 }) => {
  return <div className={`lds-dual-ring ${className}`} style={{ scale, width, height }} />;
};

export default Loader;

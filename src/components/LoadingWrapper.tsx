import { FC, ReactNode } from "react";

interface ILoadingWrapperProps {
  children: ReactNode;
  isLoading: boolean;
}

const LoadingWrapper: FC<ILoadingWrapperProps> = ({ children, isLoading }) => {
  return <>{isLoading ? <p>Loading...</p> : children}</>;
};

export default LoadingWrapper;

import { createContext, FC, ReactNode } from "react";
import { useQuery } from "react-query";
import PageLoader from "./PageLoader";
import ServerError from "./ServerErrror";

interface IQueryWrapperProps {
  children: ReactNode;
  queryKey: any[] | string;
  queryFn: () => Promise<any>;
}

export type TQueryContext<T = any> = {
  data: T;
  error: any;
};
export const QueryContext = createContext<TQueryContext>({ data: null, error: null });

const QueryWrapper: FC<IQueryWrapperProps> = ({ children, queryFn, queryKey }) => {
  const { data, isLoading, isError, error } = useQuery(queryKey, queryFn);

  if (isLoading) return <PageLoader />;
  if (isError) return <ServerError />;

  return <QueryContext.Provider value={{ data, error }}>{children}</QueryContext.Provider>;
};

export default QueryWrapper;

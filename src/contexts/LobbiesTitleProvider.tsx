import { createContext, useState, FC, ReactNode } from "react";

interface ILobbiesTitleProviderProps {
  children: ReactNode;
}

type TLobbiesTitleContext = {
  title: string;
  changeTitle: (title: string) => void;
};
export const LobbiesTitleContext = createContext<TLobbiesTitleContext>({ title: "", changeTitle: () => null });

const LobbiesTitleProvider: FC<ILobbiesTitleProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>("Public lobbies");

  const changeTitle = (title: string) => {
    setTitle(title);
  };

  return <LobbiesTitleContext.Provider value={{ title, changeTitle }}>{children}</LobbiesTitleContext.Provider>;
};

export default LobbiesTitleProvider;

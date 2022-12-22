import { FC, ReactNode, createContext } from "react";
import Copyright from "../../components/ui/Copyright";
import Header from "./Header";

interface ILayoutProps {
  children: ReactNode;
  header?: boolean;
  currentLink?: number;
}

type TLayoutContext = { currentLink?: number };
export const LayoutContext = createContext<TLayoutContext>({ currentLink: 1 });

const Layout: FC<ILayoutProps> = ({ children, header = true, currentLink }) => {
  return (
    <LayoutContext.Provider value={{ currentLink }}>
      <div>
        {header ? <Header /> : null}
        <div className="flex justify-center">
          <main className={`w-full max-w-main px-6`}>{children}</main>
        </div>
        {/* <Copyright /> */}
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;

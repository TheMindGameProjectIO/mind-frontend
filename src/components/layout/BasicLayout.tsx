import Layout from "./Layout";
import { Outlet } from "react-router-dom";
import { FC } from "react";

interface IBasicLayoutProps {
  header: boolean;
}

const BasicLayout: FC<IBasicLayoutProps> = ({ header }) => {
  return (
    <Layout header={header}>
      <Outlet />
    </Layout>
  );
};

export default BasicLayout;

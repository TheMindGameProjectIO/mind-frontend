import { Outlet } from "react-router";
import Layout from "./Layout";

const LobbiesLayout = () => {
  return (
    <Layout>
      <div className="center-content full-screen bg-main-light">
        <div className="bg-dark-blue-200">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default LobbiesLayout;

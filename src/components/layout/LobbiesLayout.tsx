import { Outlet } from "react-router";
import Layout from "./Layout";

const LobbiesLayout = () => {
  return (
    <Layout>
      <div className="center-content full-screen bg-about-game-background bg-no-repeat bg-contain bg-center">
        <div className="bg-dark-blue-200">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default LobbiesLayout;

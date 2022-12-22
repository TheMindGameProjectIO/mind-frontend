import { Outlet } from "react-router";
import Layout from "./Layout";

const LobbiesLayout = () => {
  return (
    <Layout>
      <div className="center-content full-screen bg-about-game-background bg-no-repeat bg-contain bg-center">
        <div className="bg-dark-blue-500 rounded-[20px]" style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)" }}>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default LobbiesLayout;

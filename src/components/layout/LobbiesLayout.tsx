import { Outlet } from "react-router";
import Layout from "./Layout";

const LobbiesLayout = () => {
  return (
    <Layout currentLink={2}>
      <div className="center-content full-screen bg-about-game-background bg-no-repeat md:bg-contain bg-center">
        <div
          className="bg-dark-blue-500 rounded-[20px] px-12 py-8"
          style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default LobbiesLayout;

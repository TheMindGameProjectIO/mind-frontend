import { Outlet } from "react-router";
import Layout from "./Layout";
import { useContext } from "react";
import { LobbiesTitleContext } from "../../context/LobbiesTitleProvider";

const LobbiesLayout = () => {
  const { title } = useContext(LobbiesTitleContext);

  return (
    <Layout currentLink={2}>
      <div className="center-content flex-col full-screen bg-about-game-background bg-no-repeat xl:bg-contain bg-center">
        <h1 className="mb-8 text-[3rem] text-dark-blue-600"> {title} </h1>
        <div
          className="bg-main-blue rounded-[20px] px-12 py-8"
          style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default LobbiesLayout;

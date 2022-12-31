import Loader from "./Loader";

const PageLoader = () => {
  return (
    <div className="center-content full-screen absolute z-50 left-0 top-0 bg-main-blue">
      <Loader scale="1" />
    </div>
  );
};

export default PageLoader;

import Logo from "../Logo";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 center-content bg-dark-blue-100">
      <div
        className="w-full max-w-main flex items-center py-3 px-6"
        style={{ textShadow: "0px 5px 20px rgba(189, 170, 147, 0.5)" }}
      >
        <Logo />
      </div>
    </header>
  );
};

export default Header;

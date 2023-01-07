import GameTitle from "../../components/ui/GameTitle";
import LinkButton from "../../components/ui/LinkButton";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { authRoutes, privateRoutes } from "../../routes";

const AuthOpportunity = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className="bg-center bg-cover bg-mind-game-background flex flex-col items-center justify-center text-center font-play">
      <GameTitle className="font-audiowide text-main-light text-[2.5rem] md:text-[3.7rem] md:max-w-[495px] mb-5 mt-9" />
      <h2 className="text-main-gray text-[0.9rem] md:text-[1.35rem] font-play">
        The Mind is more than just a game. It's an <br /> experiment, a journey, a team <br /> experience
      </h2>

      {!isAuth ? (
        <>
          <LinkButton
            path={authRoutes.login}
            text="Log in"
            classname="bg-main-light rounded-[30px] w-24 py-2 m-4 mt-10 drop-shadow-3xl"
          />
          <LinkButton
            path={authRoutes.signup}
            text="Sign up"
            classname="bg-main-light rounded-[30px] w-24 py-2 mb-16 drop-shadow-3xl"
          />
        </>
      ) : (
        <LinkButton
          path={privateRoutes.lobbiesRoutes.create}
          text="Create a lobby"
          classname="bg-main-light rounded-[30px] my-16 px-4 py-2 drop-shadow-3xl"
        />
      )}
    </div>
  );
};

export default AuthOpportunity;

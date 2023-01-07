import { useRef, useState, MouseEvent } from "react";
import Loader from "../components/Loader";
import PageLink from "../components/PageLink";
import GameTitle from "../components/ui/GameTitle";
import Input from "../components/ui/Input";
import InputError from "../components/ui/InputError";
import { authRoutes } from "../routes";
import { isEmail, isNotEmpty } from "../validators";

const ForgotPasswordPage = () => {
  const emailRef = useRef<any>();
  const [error, setError] = useState("no error");

  const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value;

    if (!isNotEmpty(email)) {
      setError("empty email");
      return;
    }

    if (!isEmail(email)) {
      setError("invalid email");
      return;
    }

    setError("no error");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-center bg-cover bg-mind-game-background font-play">
      <div className="md:flex gap-12">
        <div className="p-6 md:mb-0">
          <GameTitle />
          <h2 className="text-main-gray text-center md:text-left text-[1.5rem] md:text-[2rem] md:max-w-[200px]">
            We have your back
          </h2>
        </div>

        <form className="forgotPassword" onSubmit={onSubmit}>
          <h2 className="text-main-light text-center font-bold text-[2.7rem]"> Forgot password? </h2>
          <h3 className="text-little-white text-center md:text-left px-12 mt-4 mb-12">
            We'll send you an email with a link that
            <br className="hidden md:block" /> allows you to set a new password
          </h3>

          {/* Email input box */}
          <div className="px-12">
            <Input<string> ref={emailRef} placeholder="Email" />
            {error == "empty email" ? <InputError> Please provide email </InputError> : null}
            {error == "invalid email" ? <InputError> Entered email is invalid </InputError> : null}

            <div className="w-full flex flex-col justify-center">
              <div className="flex items-center">
                {/* TODO: Uncomment the section below when you'll connect it to Back End */}
                {/* <input className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold ${requestLoading ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" value='Confirm' /> */}
                {/* {requestLoading ? <Loader scale='0.5' className='relative top-2' /> : null} */}
              </div>

              <p className="text-little-white text-center mt-4">
                Go back to
                <PageLink className="text-main-light font-bold underline mt-4" to={authRoutes.login}>
                  login
                </PageLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

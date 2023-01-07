import { MouseEvent, useRef, useState, MutableRefObject, FC } from "react";
import { authRoutes } from "../routes";
import { isEmail, isNotEmpty, length } from "../validators";
import { ACCESS_TOKEN_KEY, AuthController, TLoginData } from "../api";
import { Validations } from "../enums";
import { AxiosError } from "axios";
import Loader from "../components/Loader";
import InputError from "../components/ui/InputError";
import useLoading from "../hooks/useLoading";
import Input from "../components/ui/Input";
import PageLink from "../components/PageLink";
import GameTitle from "../components/ui/GameTitle";
import { NavigateFunction, useNavigate } from "react-router";
import Button from "../components/ui/Button";
import { useAppDispatch } from "../redux/hooks";
import { authorize } from "../redux/slices/authSlice";
import { set } from "../redux/slices/userSlice";

const LoginPage = () => {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const navigate: NavigateFunction = useNavigate();
  const [error, setError] = useState<string>("no error");
  const dispatch = useAppDispatch();

  const [loginRequest, requestLoading] = useLoading({
    callback: async (data: TLoginData) => {
      const { user, jwtToken } = await AuthController.login(data);
      localStorage.setItem(ACCESS_TOKEN_KEY, jwtToken as string);

      dispatch(authorize());
      dispatch(set(user));
      navigate(-1);
    },
    onError: (error: any) => {
      if (error instanceof AxiosError) {
        if (error.response?.status == 404 || error.response?.status == 400) {
          setError("invalid credentials");
          return;
        }

        setError("server errror");
      }
    },
  });

  const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!isNotEmpty(email)) {
      setError("empty email");
      return;
    }

    if (!isEmail(email)) {
      setError("invalid email");
      return;
    }

    if (!isNotEmpty(password)) {
      setError("empty password");
      return;
    }

    if (!length(password, { min: Validations.MINIMAL_PASSWORD_LENGTH })) {
      setError("password's length");
      return;
    }

    setError("no error");
    await loginRequest({ email, password });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-center bg-cover bg-mind-game-background font-play">
      <div className="md:flex gap-12">
        <div className="p-6 md:mb-0">
          <GameTitle />
          <div className="text-main-gray text-[1.5rem] md:text-[2rem] md:max-w-[200px]">
            <h2 className="my-6"> Welcome back</h2>
            <h2> Good to see you again</h2>
          </div>
        </div>
        <form className="auth" onSubmit={onSubmit}>
          <div className="text-main-light mb-12">
            <h2 className="font-bold text-[3rem]"> Log in </h2>
            <h3 className="text-white">
              New user?
              <PageLink to={authRoutes.signup} className="text-main-light font-bold">
                Create an account
              </PageLink>
            </h3>
          </div>

          {/* //? Authentication via Google */}
          {/* //? Authentication via Facebook */}

          {/* Input boxes */}

          {error == "invalid credentials" ? <InputError> Email or password is wrong </InputError> : null}
          {error == "server error" ? <InputError> Something went wrong </InputError> : null}
          <Input<string> ref={emailRef} placeholder="Email" />
          {error == "empty email" ? <InputError> Please provide email </InputError> : null}
          {error == "invalid email" ? <InputError> Entered email is invalid </InputError> : null}

          <PasswordInput passwordRef={passwordRef} />
          {error == "empty password" ? <InputError> Please provide password </InputError> : null}
          {error == "password's length" ? (
            <InputError>
              Password's length must contain at least {Validations.MINIMAL_PASSWORD_LENGTH} characters
            </InputError>
          ) : null}

          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center">
              <Button disabled={requestLoading} type="submit">
                Log in
              </Button>
              {requestLoading ? <Loader scale="0.5" className="relative top-2" /> : null}
            </div>
          </div>
          <PageLink className="text-white text-center p-2" to={authRoutes.forgotPassword}>
            Forgot password?
          </PageLink>
        </form>
      </div>
    </div>
  );
};

interface IPasswordInputProps {
  passwordRef: MutableRefObject<HTMLInputElement>;
}

const PasswordInput: FC<IPasswordInputProps> = ({ passwordRef }) => {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <>
      <Input<string> className="mt-3" ref={passwordRef} placeholder="Password" hideValue={passwordHidden} />
      <div className="text-start text-white" onClick={() => setPasswordHidden(!passwordHidden)}>
        {passwordHidden ? "Show" : "Hide"} password{" "}
      </div>
    </>
  );
};

export default LoginPage;

import { MouseEvent, useRef, useState } from "react";
import { authRoutes } from "../routes";
import { isEmail, isNotEmpty, length } from "../validators";
import { MINIMAL_PASSWORD_LENGTH, MINIMAL_USERNAME_LENGTH } from "../api";
import { AxiosError } from "axios";
import { signup, TSignUpData } from "../api";
import { NavigateFunction, useNavigate } from "react-router";
import useLoading from "../hooks/useLoading";
import InputError from "../components/ui/InputError";
import Loader from "../components/Loader";
import PageLink from "../components/PageLink";
import Input from "../components/ui/Input";
import GameTitle from "../components/ui/GameTitle";
import Button from "../components/ui/Button";

const SignupPage = () => {
  const emailRef = useRef<any>();
  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();
  const repeatPasswordRef = useRef<any>();

  const navigate: NavigateFunction = useNavigate();
  const [error, setError] = useState<string>("no error");
  const [signupRequest, requestLoading] = useLoading({
    callback: async (data: TSignUpData) => {
      await signup(data);
      navigate(authRoutes.index);
    },
    onError: (error: any) => {
      if (error instanceof AxiosError) {
        if (error.response?.status == 409) setError("email exists");
      }
    },
  });

  const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const repeatPassword = repeatPasswordRef?.current.value;

    // Email validation
    if (!isNotEmpty(email)) {
      setError("empty email");
      return;
    }

    if (!isEmail(email)) {
      setError("not email");
      return;
    }

    // Username validation
    if (!isNotEmpty(username)) {
      setError("empty username");
      return;
    }

    if (!length(username, { min: MINIMAL_USERNAME_LENGTH })) {
      setError("short username");
      return;
    }

    // Password validation
    if (!isNotEmpty(password)) {
      setError("empty password");
      return;
    }

    if (!length(password, { min: MINIMAL_PASSWORD_LENGTH })) {
      setError("short password");
      return;
    }

    // Repeat password validation
    if (!isNotEmpty(repeatPassword)) {
      setError("empty repeatPassword");
      return;
    }

    if (!(password === repeatPassword)) {
      setError("wrong repeatPassword");
      return;
    }

    setError("no error");
    await signupRequest({
      email,
      password,
      confirmPassword: repeatPassword,
      nickname: username,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="h-screen flex items-center justify-center bg-center bg-cover bg-mind-game-background font-play">
        <div className="md:flex gap-12">
          <div className="p-6 md:mb-0">
            <GameTitle />

            <div className="text-main-gray text-[1.5rem] md:text-[2rem] md:max-w-[200px]">
              <h2 className="leading-10.5">
                Create an account and spend <br /> quality time with your friends{" "}
              </h2>
            </div>
          </div>
          <form
            className="flex flex-col w-screen max-w-[400px] bg-transparent-blue py-8 px-12 rounded-xl"
            onSubmit={onSubmit}
          >
            <div className="text-main-light mb-12">
              <h2 className="font-bold text-[3rem]"> Sign Up </h2>
              <h3 className="text-white">
                Already did?
                <PageLink to={authRoutes.login()} className="text-main-light font-bold">
                  Log in
                </PageLink>
              </h3>
            </div>

            {/* //? Authentication via Google */}
            {/* //? Authentication via Facebook */}

            {/* Input boxes */}
            <Input<string> ref={emailRef} placeholder="Email" />
            {error === "empty email" ? <InputError> Please, provide an email </InputError> : null}
            {error === "not email" ? <InputError> Please, provide a valid email </InputError> : null}
            {error === "email exists" ? (
              <InputError> This email already exists. Provide another email. </InputError>
            ) : null}

            <Input<string> ref={usernameRef} placeholder="Username" className="mt-3" />
            {error === "empty username" ? <InputError> Please, create a username </InputError> : null}
            {error === "short username" ? <InputError> Username must contain at least 3 characters </InputError> : null}

            <Input<string> ref={passwordRef} placeholder="Password" className="mt-7" hideValue={true} />
            {error === "empty password" ? <InputError> Please, create a password </InputError> : null}
            {error === "short password" ? <InputError> Password must contain at least 6 characters </InputError> : null}

            <Input<string> ref={repeatPasswordRef} placeholder="Repeat Password" className="mt-3" hideValue={true} />
            {error === "empty repeatPassword" ? <InputError> Please, rewrite the password </InputError> : null}
            {error === "wrong repeatPassword" ? <InputError> The rewritten password is incorrect </InputError> : null}

            <div className="w-full flex flex-col justify-center">
              <div className="flex items-center">
                <Button disabled={requestLoading} type="submit">
                  Create account
                </Button>
                {requestLoading ? <Loader scale="0.5" className="relative top-2" /> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

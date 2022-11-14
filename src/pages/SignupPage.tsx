import { MouseEvent, useRef, useState, MutableRefObject, FC } from "react";
import { GameName } from "./LoginPage";
import { authRoutes } from "../routes";
import PageLink from "../components/PageLink";
import Input from "../components/ui/Input";

const SignupPage = () => {
    const emailRef = useRef<any>();
    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();
    const repeatPasswordRef = useRef<any>();



    const onSubmit = (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const username = usernameRef.current?.value;
        const repeatPassword = repeatPasswordRef?.current.value;

        console.log(email);
        console.log(password);
        console.log(username);
        console.log(repeatPassword);

        // Validation happens here
        // TODO: implement validation

        // Sending request happens here if validation was proceeded
        // TODO: implement sending request with axios   
    }

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div className='md:flex gap-12'>
                    <div className='p-6 md:mb-0'>
                        <GameName />
                        <div className='text-main-gray text-[1.5rem] md:text-[2rem] md:max-w-[200px]'>
                            <h2 className='leading-10.5'> Create an account and spend <br /> quality time with your friends </h2>
                        </div>
                    </div>
                    <form
                        className='flex flex-col w-screen max-w-[400px] bg-transparent-blue py-8 px-12 rounded-xl'
                        onSubmit={onSubmit}
                    >
                        <div className='text-main-light mb-12'>
                            <h2 className='font-bold text-[3rem]'> Sign Up </h2>
                            <h3 className='text-white'> Already did?
                                <PageLink
                                    to={authRoutes.index}
                                    className='text-main-light font-bold'
                                >
                                    Log in
                                </PageLink>
                            </h3>
                        </div>
                        <Input innerRef={emailRef} placeholder='Email' />
                        <Input innerRef={usernameRef} placeholder='Username' className='mt-3' />
                        <Input innerRef={passwordRef} placeholder='Password' className='mt-7' hideValue={true} />
                        <Input innerRef={repeatPasswordRef} placeholder='Repeat Password' className='mt-3' hideValue={true} />
                        <div className='w-full flex flex-col justify-center'>
                            <input className='block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold' type="submit" value='Create account' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupPage;
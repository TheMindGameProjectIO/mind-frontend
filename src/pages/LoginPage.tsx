import { MouseEvent, useRef, useState, MutableRefObject, FC } from 'react';
import PageLink from '../components/PageLink';
import { authRoutes } from '../routes';
import Input from '../components/ui/Input';

export const GameName = () =>
{
    return (
        <>
        <h1
            className = 'text-main-light text-[3rem] md:text-[4rem] font-bold md:max-w-[300px]'
            style={{
                mixBlendMode: 'normal',
                textShadow: '0px 5px 20px rgba(189, 170, 147, 0.5)'
            }}
        > The Mind  Game </h1>
        </>
    )
}

const LoginPage = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    const onSubmit = (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        console.log(email);
        console.log(password);

        // Validation happens here
        // TODO: implement validation

        // Sending request happens here if validation was proceeded
        // TODO: implement sending request with axios   
    }

    return (
        <div className='h-screen flex items-center justify-center bg-center bg-cover bg-mind-game-background'>
           <div className='md:flex gap-12'>
                <div className='p-6 md:mb-0'>
                <GameName />
                <div className='text-main-gray text-[1.5rem] md:text-[2rem] md:max-w-[200px]'>
                    <h2 className='my-6'> Welcome back</h2>
                    <h2> Good to see you again</h2>
                </div>
                </div>
                <form
                    className='flex flex-col w-screen max-w-[400px] bg-transparent-blue py-8 px-12 rounded-xl'
                    onSubmit={onSubmit}
                >
                    <div className='text-main-light mb-12'>
                        <h2 className='font-bold text-[3rem]'> Log in </h2>
                        <h3 className='text-white'> New user?
                            <PageLink
                                to={authRoutes.signup}
                                className='text-main-light font-bold'
                            >
                                Create an account
                            </PageLink>
                        </h3>
                    </div>
                    <Input innerRef={emailRef} placeholder = 'Email' />
                    <PasswordInput passwordRef={passwordRef} />
                    <div className='w-full flex flex-col justify-center'>
                        <input className='block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold' type="submit" value='Log in' />
                        <PageLink className='text-white text-center' to={authRoutes.forgotPassword}> Forgot Password? </PageLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

interface IPasswordInputProps {
    passwordRef: MutableRefObject<HTMLInputElement>
}

const PasswordInput: FC<IPasswordInputProps> = ({ passwordRef }) => {
    const [passwordHidden, setPasswordHidden] = useState(true);

    return (
        <>
            <Input className='mt-3' innerRef={passwordRef} placeholder='Password' hideValue={passwordHidden} />
            <button className='text-start text-white' onClick={() => setPasswordHidden(!passwordHidden)}> {passwordHidden ? 'Show' : 'Hide'} password </button>
        </>
    )
}

export default LoginPage;
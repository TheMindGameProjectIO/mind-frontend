import { MouseEvent, useRef, useState, MutableRefObject, FC } from 'react';
import { authRoutes } from '../routes';
import { isEmail, isNotEmpty, length } from '../validators';
import { login, MINIMAL_PASSWORD_LENGTH, TLoginData } from '../api';
import { AxiosError } from 'axios';
import Loader from '../components/Loader';
import InputError from '../components/ui/InputError';
import useLoading from '../hooks/useLoading';
import Input from '../components/ui/Input';
import PageLink from '../components/PageLink';
import GameTitle from '../components/ui/GameTitle';
import Copyright from '../components/ui/Copyright';

const LoginPage = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const [error, setError] = useState<string>('no error');

    const [loginRequest, requestLoading] = useLoading({
        callback: async (data: TLoginData) => {
            const response = await login(data);
            // TODO: add stroing access token in localStorage
        },
        onError: (error: any) => {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) { // TODO: change 401 to other exception status
                    setError('invalid credentials');
                }
            }
        }
    });

    const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!isNotEmpty(email)) {
            setError('empty email');
            return;
        }

        if (!isEmail(email)) {
            setError('invalid email');
            return;
        }

        if (!isNotEmpty(password)) {
            setError('empty password');
            return;
        }

        if (!length(password, { min: MINIMAL_PASSWORD_LENGTH })) {
            setError("password's length");
            return;
        }

        setError('no error');
        await loginRequest({ email, password });
    }

    return (
        <div className = 'flex flex-col'>
            <div className='h-screen flex items-center justify-center bg-center bg-cover bg-mind-game-background font-play'>
                <div className='md:flex gap-12'>
                    <div className='p-6 md:mb-0'>
                        <GameTitle />
                        <div className='text-main-gray text-[1.5rem] md:text-[2rem] md:max-w-[200px]'>
                            <h2 className='my-6'> Welcome back</h2>
                            <h2> Good to see you again</h2>
                        </div>
                    </div>
                    <form className='auth' onSubmit={onSubmit}>
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

                        {/* //? Authentication via Google */}
                        {/* //? Authentication via Facebook */}

                        {/* Input boxes */}

                        {error == 'invalid credentials' ? <InputError> Email or password is wrong </InputError> : null}
                        <Input innerRef={emailRef} placeholder='Email' />
                        {error == 'empty email' ? <InputError> Please provide email </InputError> : null}
                        {error == 'invalid email' ? <InputError> Entered email is invalid </InputError> : null}

                        <PasswordInput passwordRef={passwordRef} />
                        {error == 'empty password' ? <InputError> Please provide password </InputError> : null}
                        {error == "password's length" ? <InputError> Password's length must contain at least {MINIMAL_PASSWORD_LENGTH} characters </InputError> : null}

                        <div className='w-full flex flex-col justify-center'>
                            <div className='flex items-center'>
                                <input className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold ${requestLoading ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" value='Log in' />
                                {requestLoading ? <Loader scale='0.5' className='relative top-2' /> : null}
                            </div>
                            <PageLink className='text-white text-center' to={authRoutes.forgotPassword}> Forgot Password? </PageLink>
                        </div>
                    </form>
                </div>
            </div>
            <Copyright />
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
            <div className='text-start text-white' onClick={() => setPasswordHidden(!passwordHidden)}> {passwordHidden ? 'Show' : 'Hide'} password </div>
        </>
    )
}

export default LoginPage;
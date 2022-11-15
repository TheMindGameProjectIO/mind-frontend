import { MouseEvent, useRef, useState, MutableRefObject, FC } from 'react';
import PageLink from '../components/PageLink';
import { authRoutes } from '../routes';
import Input from '../components/ui/Input';
import { isEmail, isNotEmpty, length } from '../validators';
import { login, MINIMAL_PASSWORD_LENGTH } from '../api';
import InputError from '../components/ui/InputError';
import { AxiosError } from 'axios';
import Loader from '../components/Loader';

export const GameName = () => {
    return (
        <>
            <h1
                className='text-main-light text-[2.5rem] md:text-[4rem] font-bold md:max-w-[300px]'
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
    const [error, setError] = useState<string>('no error');
    const [requestLoading, setRequestLoading] = useState<boolean>(false);

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
        try {
            setRequestLoading(true);
            const accessToken = await login({ email, password });
            console.log(accessToken);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) { // TODO: change 401 to other exception status
                    setError('invalid credentials');
                }
            }
        } finally {
            setRequestLoading(false);
        }
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='md:flex gap-12'>
                <div className='p-6 md:mb-0'>
                    <GameName />
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

                    {error == 'invalid credentials' ? <InputError> Email or password is wrong </InputError> : null}
                    {error == 'empty email' ? <InputError> Please provide email </InputError> : null}
                    {error == 'invalid email' ? <InputError> Entered email is invalid </InputError> : null}
                    <Input innerRef={emailRef} placeholder='Email' />

                    {error == 'empty password' ? <InputError> Please provide password </InputError> : null}
                    {error == "password's length" ? <InputError> Password's length must contain at least {MINIMAL_PASSWORD_LENGTH} characters </InputError> : null}
                    <PasswordInput passwordRef={passwordRef} />
                    <div className='w-full flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <input className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold ${requestLoading ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" value='Log in' />
                            {requestLoading ? <Loader scale='0.5' className='relative top-2' /> : null}
                        </div>
                        <PageLink className='text-white text-center' to={authRoutes.forgotPassword}> Forgot Password? </PageLink>
                    </div>
                </form>
            </div>
        </div >
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
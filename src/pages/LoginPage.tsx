import { MouseEvent, useRef } from 'react';
import PageLink from '../components/PageLink';
import { authRoutes } from '../routes';
import Input from '../components/ui/Input';

const LoginPage = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

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
        <div className='h-screen flex items-center justify-center'>
            <div>
                <form className='flex flex-col w-screen max-w-[300px]' onSubmit={onSubmit}>
                    <h2> Log in </h2>
                    <h3> New user? <PageLink to={authRoutes.signup}> Create an account </PageLink> </h3>
                    <Input innerRef={emailRef} placeholder='Email' />
                    <Input className='mt-3' innerRef={passwordRef} placeholder='Password' hideValue={true} />
                    <input type="submit" value='Log in' />
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
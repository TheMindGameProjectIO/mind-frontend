import { useRef, useState, MouseEvent } from "react"
import Loader from "../components/Loader";
import PageLink from "../components/PageLink";
import GameTitle from "../components/ui/GameTitle";
import Input from "../components/ui/Input";
import InputError from "../components/ui/InputError";
import { authRoutes } from "../routes";
import { isEmail, isNotEmpty } from "../validators";
import Copyright from "../components/ui/Copyright";

const ForgotPasswordPage = () => {
    const emailRef = useRef<any>();
    const [error, setError] = useState("no error");

    const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current?.value;

        if (!isNotEmpty(email)) {
            setError('empty email');
            return;
        }

        if (!isEmail(email)) {
            setError('invalid email');
            return;
        }

        setError("no error");
    }

    return (
        <div>
            ForgotPasswordPage
            <Copyright />
        </div>
    );
}

export default ForgotPasswordPage;
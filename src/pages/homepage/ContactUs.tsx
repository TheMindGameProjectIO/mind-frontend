import { MouseEvent, useRef, useState } from "react";
import Input from "../../components/ui/Input";
import InputError from "../../components/ui/InputError";
import { isEmail, isNotEmpty, length } from "../../validators"

const ContactUs = () =>
{
    const firstNameRef = useRef<any>();
    const lastNameRef = useRef<any>();
    const emailRef = useRef<any>();
    const messageRef = useRef<any>();

    const [error, setError] = useState("no error");

    const inputClassName: string = "bg-main-light rounded-[18px] my-2";

    const onSubmit = async (event: MouseEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        if (!isNotEmpty(firstName)) {
            setError("empty first name");
            return;
        }

        if (!isNotEmpty(lastName)) {
            setError("empty last name");
            return;
        }

        if (!isNotEmpty(email)) {
            setError("empty email");
            return;
        }
        
        if (!isEmail(email)) {
            setError("invalid email");
            return;
        }


        if (!isNotEmpty(message)) {
            setError("empty message");
            return;
        }

        {/* // TODO: Connect it with the backend */}
    }

    return (
    <div className = "flex items-center justify-center bg-center bg-cover bg-contact-us-background font-play pt-10 pb-10">
        <div className = "bg-transparent-blue flex flex-col md:flex-row rounded-xl md:w-3/4 md:max-w-3xl">
            <div className = "flex flex-col mt-9 md:mt-6 md:ml-10 text-center md:min-w-max md:text-left items-center md:items-start">
                <h1 className = "text-main-light text-[2.5rem] md:text-[3rem] font-bold"> Contact us </h1>
                <h2 className = "text-cr-gray text-[1.5rem] md:text-[1.4rem] md:mb-4 md:mt-2"> Need to get in <br className = "hidden md:block" /> touch with us? </h2>
                <h2 className = "text-cr-gray text-[1.5rem] md:text-[1.4rem]"> Fill out the form <br className = "hidden md:block"/>with your inquiry. </h2>
            </div>

            <form className = 'contactus' onSubmit = { onSubmit }>
                <div className = "flex flex-col md:flex-row mt-5">
                    <Input className = {inputClassName + " md:mr-3"}  placeholder = "First name" innerRef = { firstNameRef } />
                    {((error === "empty first name") && (window.innerWidth < 768)) ? <InputError> Please, provide your first name </InputError> : null}

                    <Input className = {inputClassName}  placeholder = "Last name" innerRef = { lastNameRef } />
                    {((error === "empty last name") && (window.innerWidth < 768)) ? <InputError> Please, provide your last name </InputError> : null}
                </div>

                {/* As the location of names' boxes depend on screen size, error message must be displayed in appropriate place */}
                {((error === "empty first name") && (window.innerWidth >= 768)) ? <InputError> Please, provide your first name </InputError> : null}
                {((error === "empty last name") && (window.innerWidth >= 768)) ? <InputError> Please, provide your last name </InputError> : null}

                <div>
                    <Input className = {inputClassName} placeholder = "Your email" innerRef = { emailRef } />
                    {error === "empty email" ? <InputError> Please, provide an email </InputError> : null}
                    {error === "invalid email" ? <InputError> Please, provide a valid email </InputError> : null}

                    <textarea className = {inputClassName + " resize-none w-full placeholder-placeholder-color pt-2 pl-2 h-20"} placeholder = "Your message" ref = {messageRef} />
                    
                    {/* //? FIXME: This text is closer to the Submit button, rather than to the text area. */}
                    {error === "empty message" ? <InputError> Please, provide a message </InputError> : null}
                    

                    <input className={`block w-full bg-main-gray py-2 px-4 rounded-full font-bold`} type = "submit" value = 'Submit' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUs;
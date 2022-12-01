import { AxiosError } from "axios";
import { MouseEvent, useRef, useState } from "react";
import Loader from "../../components/Loader";
import Input from "../../components/ui/Input";
import InputError from "../../components/ui/InputError";
import useLoading from "../../hooks/useLoading";
import { isEmail, isNotEmpty, length } from "../../validators"
import { contactus, TContactUsData } from "../../api";

const ContactUs = () => {
    const firstNameRef = useRef<any>();
    const lastNameRef = useRef<any>();
    const emailRef = useRef<any>();
    const messageRef = useRef<any>();

    const [error, setError] = useState<string>("no error");
    const inputClassName: string = "bg-main-light rounded-[18px] my-2";

    const [contactUsRequest, requestLoading] = useLoading({
        callback: async (data: TContactUsData) => {
            await contactus(data);
        },
        onError: (error: any) => {
            if (error instanceof AxiosError) {
                setError("something is wrong");
            }
        }
    })

    const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
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

        await contactUsRequest({
            firstname: firstName,
            lastname: lastName,
            email,
            message
        });
    }

    return (
        <div className="flex items-center justify-center bg-center bg-cover bg-contact-us-background font-play pt-10 pb-10">
            <div className="bg-transparent-blue flex flex-col md:flex-row rounded-xl md:w-3/4 md:max-w-3xl">
                <div className="flex flex-col mt-9 md:mt-6 md:ml-10 text-center md:min-w-max md:text-left items-center md:items-start">
                    <h1 className="text-main-light text-[2.5rem] md:text-[3rem] font-bold"> Contact us </h1>
                    <h2 className="text-cr-gray text-[1.5rem] md:text-[1.4rem] md:mb-4 md:mt-2"> Need to get in <br className="hidden md:block" /> touch with us? </h2>
                    <h2 className="text-cr-gray text-[1.5rem] md:text-[1.4rem]"> Fill out the form <br className="hidden md:block" />with your inquiry. </h2>
                </div>

                <form className='contactus' onSubmit={onSubmit}>
                    <div className="flex flex-col md:flex-row mt-5">
                        <Input<string> className={inputClassName + " md:mr-3"} placeholder="First name" ref={firstNameRef} />
                        {((error === "empty first name") && (window.innerWidth < 768)) ? <InputError> Please, provide your first name </InputError> : null}

                        <Input<string> className={inputClassName} placeholder="Last name" ref={lastNameRef} />
                        {((error === "empty last name") && (window.innerWidth < 768)) ? <InputError> Please, provide your last name </InputError> : null}
                    </div>

                    {/* As the location of names' boxes depend on screen size, error message must be displayed in appropriate place */}
                    {((error === "empty first name") && (window.innerWidth >= 768)) ? <InputError> Please, provide your first name </InputError> : null}
                    {((error === "empty last name") && (window.innerWidth >= 768)) ? <InputError> Please, provide your last name </InputError> : null}

                    <div>
                        <Input<string> className={inputClassName} placeholder="Your email" ref={emailRef} />
                        {error === "empty email" ? <InputError> Please, provide an email </InputError> : null}
                        {error === "invalid email" ? <InputError> Please, provide a valid email </InputError> : null}

                        <textarea className={inputClassName + " resize-none w-full placeholder-placeholder-color pt-2 pl-2 h-20"} placeholder="Your message" ref={messageRef} />

                        {error === "empty message" ? <InputError> Please, provide a message </InputError> : null}

                        {error === "something is wrong" ? <InputError> Something went wrong, please try again later. </InputError> : null}

                        <div className='flex items-center'>
                            <button className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold ${requestLoading ? "opacity-50 cursor-not-allowed" : ''}`} type="submit"> Submit </button>
                            {requestLoading ? <Loader scale='0.5' className='relative top-2' /> : null}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;
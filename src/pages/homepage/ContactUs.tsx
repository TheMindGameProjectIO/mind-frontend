import { useRef } from "react";
import Input from "../../components/ui/Input";

const ContactUs = () =>
{
    const firstNameRef = useRef<any>();
    const lastNameRef = useRef<any>();
    const emailRef = useRef<any>();
    const messageRef = useRef<any>();

    const inputClassName: string = "bg-main-light rounded-[6px] ";

    return (
    <div className = "flex items-center justify-center bg-center bg-cover bg-contact-us-background font-play pt-10 pb-10">
        <div className = "bg-transparent-blue flex flex-row">
            <div className = "flex flex-col mt-6">
                <h1 className = ""> Contact us </h1>
                <h2> Need to get in touch with us? </h2>
                <h2> Fill out the form with your inquiry. </h2>
            </div>

            <div className = "mt-6">
                <div className = "flex flex-row justify-between">
                    <Input className = {inputClassName + ""}  placeholder = "First name" innerRef = { firstNameRef } />
                    <Input className = {inputClassName + ""}  placeholder = "Last name" innerRef = { lastNameRef } />
                </div>

                <div>
                    <Input className = {inputClassName} placeholder = "Your email" innerRef = { emailRef } />
                    <Input className = {inputClassName} placeholder = "Your message" innerRef = { messageRef } />
                </div>

                <div className='w-full flex flex-col justify-center'>
                    <div className='flex items-center'>
                        <input className={`block w-full bg-main-gray py-2 px-4 rounded-full mt-6 font-bold`} type = "submit" value = 'Submit' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;
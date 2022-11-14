import { MutableRefObject, ChangeEvent } from 'react';

interface IInputProps {
    hideValue?: boolean;
    className?: string;
    placeholder: string;
    innerRef: MutableRefObject<HTMLInputElement>;
    transform?: <OutputType>(value: string) => OutputType;
}

export default function Input<OutputType>({ className, placeholder, innerRef, transform, hideValue = false }: IInputProps) {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (transform) {
            e.target.value = transform<OutputType>(e.target.value) as any; // Transform function converts string value to any other type
            // as you can see we explicity have type of input = 'text' and if you need something else
            // you can provide transform function in props 
        }
    }

    return (
        <input
            type={hideValue ? 'password' : 'text'}
            ref={innerRef}
            placeholder={placeholder}
            onChange={onChange}
            className={`bg-main-gray text-input outline-none placeholder-input p-3 w-full ${className}`}
        />
    );
}
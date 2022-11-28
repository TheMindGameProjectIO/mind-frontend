import { MutableRefObject, ChangeEvent, forwardRef, LegacyRef } from 'react';

interface IInputProps<OutputType> {
    hideValue?: boolean;
    className?: string;
    placeholder: string;
    transform?: (value: string) => OutputType;
}

function Input<OutputType>({ className, placeholder, transform, hideValue = false }: IInputProps<OutputType>, ref: LegacyRef<HTMLInputElement>) {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (transform) {
            e.target.value = transform(e.target.value) as any; // Transform function converts string value to any other type
            // as you can see we explicity have type of input = 'text' and if you need something else
            // you can provide transform function in props 
        }
    }

    return (
        <input
            type={hideValue ? 'password' : 'text'}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            className={`rounded-[6px] bg-main-gray text-input outline-none placeholder-input p-3 w-full ${className}`}
        />
    );
}

export default forwardRef(Input) as <OutputType>(props: IInputProps<OutputType> & { ref?: MutableRefObject<HTMLInputElement> }) => JSX.Element;
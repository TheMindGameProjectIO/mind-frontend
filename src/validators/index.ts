type TLengtiOptions = {
    min: number;
    max?: number;
}

export const isEmail = (value: string) => value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const isNotEmpty = (value: string) => value != '';
export const length = (value: string, options: TLengtiOptions) => {
    const { min, max } = options;
    const limitIsNotPassed = max ? value.length <= max : true;
    return value.length >= min && limitIsNotPassed;
} 
import { useState } from 'react';

interface IUseLoadingParams {
    callback: (data?: any) => Promise<void>;
    onError: (error?: any) => void;
}

const useLoading = ({ callback, onError }: IUseLoadingParams) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const applyLoading = async (data?: any) => {
        try {
            setIsLoading(true);
            await callback(data);
        } catch (error) {
            onError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return [applyLoading, isLoading] as [(data?: any) => Promise<void>, boolean];
}

export default useLoading;
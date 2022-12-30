import axios from 'axios'
import { API_BASE_URL } from './config'

export type TSignUpData = {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
}

export const signup = async (data: TSignUpData) => {
    const url = API_BASE_URL + '/auth/register';
    const response = await axios.post(url, data);
    return response.data;
}
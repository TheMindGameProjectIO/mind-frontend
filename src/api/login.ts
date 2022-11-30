import axios from "axios";
import { API_BASE_URL } from "./config";

export type TLoginData = {
    email: string;
    password: string;
}

export const login = async (data: TLoginData) => {
    const url = API_BASE_URL + '/auth/login';
    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
    return response;
}
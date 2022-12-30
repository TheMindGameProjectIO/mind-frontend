import axios from "axios";
import { API_BASE_URL } from "./config";

export type TContactUsData = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}

export const contactus 
= async (data: TContactUsData) => {
    const url = API_BASE_URL + '/general/contactus';
    const response = await axios.post(url, data);
    return response;
}
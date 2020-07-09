import axios from 'axios';
import { API_URL } from '../config';

export const getAllNovedades = async () => {
    try {
        const response = await axios.get(`${API_URL}/novedades`);

        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

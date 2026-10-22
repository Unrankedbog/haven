import axios from "axios";

const API_URL = 'https://fb3a3a3447c3aba9.mokky.dev';

export const api = {
    getCategories: async () =>{
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    },
    getProducts: async () =>{
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    }
}
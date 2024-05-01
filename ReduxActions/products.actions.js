import axios from 'axios';
import { APP_API_URL } from '../config';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PANTS = 'GET_PANTS';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${APP_API_URL}/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf`);
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data,
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
        }
    };
};




export const getPants = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf`);
            dispatch({
                type: GET_PANTS,
                payload: response.data,
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
        }
    };
};










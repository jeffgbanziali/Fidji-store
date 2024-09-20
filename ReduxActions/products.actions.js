import axios from 'axios';
import { APP_API_URL } from '../config';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PANTS = 'GET_PANTS';
export const GET_COATS = 'GET_COATS';
export const GET_TSHIRTS = 'GET_TSHIRTS';
export const GET_SHIRTS = 'GET_TSHIRT';
export const GET_SWEATSHIRTS = 'GET_SWEATSHIRTS';





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

export const getShirt = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf');
            const data = await response.json();
            const filteredData = data.filter(item => item.categories.some(cat => cat.id === 93));
            dispatch({ type: GET_SHIRTS, payload: filteredData });
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
};

export const getPants = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf');
            const data = await response.json();
            const filteredData = data.filter(item => item.categories.some(cat => cat.id === 92 || cat.id === 132));
            dispatch({ type: GET_PANTS, payload: filteredData });
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
};

export const getCoats = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf');
            const data = await response.json();
            const filteredData = data.filter(item => item.categories.some(cat => cat.id === 89));
            dispatch({ type: GET_COATS, payload: filteredData });
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
};

export const getSweatshirt = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf');
            const data = await response.json();
            const filteredData = data.filter(item => item.categories.some(cat => cat.id === 91));
            dispatch({ type: GET_SWEATSHIRTS, payload: filteredData });
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
};

export const getTshirt = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf');
            const data = await response.json();
            const filteredData = data.filter(item => item.categories.some(cat => cat.id === 105 || cat.id === 94));
            dispatch({ type: GET_TSHIRTS, payload: filteredData });
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
};










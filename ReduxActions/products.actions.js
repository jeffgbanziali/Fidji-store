import { getProducts, getFilteredProducts } from './api';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_SHIRTS = 'GET_SHIRTS';
export const GET_PANTS = 'GET_PANTS';
export const GET_COATS = 'GET_COATS';
export const GET_SWEATSHIRTS = 'GET_SWEATSHIRTS';
export const GET_TSHIRTS = 'GET_TSHIRTS';

export const fetchProducts = () => async (dispatch) => {
    try {
        const data = await getProducts();
        dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchProducts:', error);
    }
};

export const fetchShirts = () => async (dispatch) => {
    try {
        const data = await getFilteredProducts([93]);
        dispatch({ type: GET_SHIRTS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchShirts:', error);
    }
};

export const fetchPants = () => async (dispatch) => {
    try {
        const data = await getFilteredProducts([92, 132]);
        dispatch({ type: GET_PANTS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchPants:', error);
    }
};

export const fetchCoats = () => async (dispatch) => {
    try {
        const data = await getFilteredProducts([89]);
        dispatch({ type: GET_COATS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchCoats:', error);
    }
};

export const fetchSweatshirts = () => async (dispatch) => {
    try {
        const data = await getFilteredProducts([91]);
        dispatch({ type: GET_SWEATSHIRTS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchSweatshirts:', error);
    }
};

export const fetchTshirts = () => async (dispatch) => {
    try {
        const data = await getFilteredProducts([105, 94]);
        dispatch({ type: GET_TSHIRTS, payload: data });
    } catch (error) {
        console.error('Erreur dans fetchTshirts:', error);
    }
};

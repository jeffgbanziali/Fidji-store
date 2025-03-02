import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';

// Définition des types d'actions
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

// Action pour récupérer les catégories
export const fetchCategories = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
        const response = await axios.get(`${APP_API_URL}/wc/v3/products/categories`, {
            params: {
                consumer_key: CUSTOMER_KEY,
                consumer_secret: SECRET_KEY
            }
        });

        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: error.response?.data || error.message
        });
    }
};

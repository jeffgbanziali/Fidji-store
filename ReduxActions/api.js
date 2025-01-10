import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';




export const wpApiClient = (token) =>
    axios.create({
        baseURL: `${APP_API_URL}/wp/v2`, // APP_API_URL contient déjà wp-json
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });


export const wooApiClient = axios.create({
    baseURL: `${APP_API_URL}/wc/v3`,
    params: {
        consumer_key: CUSTOMER_KEY,
        consumer_secret: SECRET_KEY,
    },

});

export const getProducts = async () => {
    try {
        const response = await wooApiClient.get('/products', {
            params: { per_page: 100 },
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        throw error;
    }
};

export const getFilteredProducts = async (categoryIds) => {
    try {
        const response = await wooApiClient.get('/products', {
            params: { per_page: 100 },
        });
        return response.data.filter((item) =>
            item.categories.some((cat) => categoryIds.includes(cat.id))
        );
    } catch (error) {
        console.error('Erreur lors de la récupération des produits filtrés:', error);
        throw error;
    }
};

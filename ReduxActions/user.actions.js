import axios from 'axios';
import { APP_API_URL } from '../config';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const GET_USER = "GET_USER";


export const getUser = (userToken) => {
    return async (dispatch) => {
        try {
            // Récupérer l'utilisateur à partir de l'API WordPress
            const userResponse = await axios.get('https://boutiquefidji.com/wp-json/wp/v2/users/me', {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });
            const user = userResponse.data;

            // Récupérer la liste de tous les clients à partir de l'API WooCommerce
            const customersResponse = await axios.get('https://boutiquefidji.com/wp-json/wc/v3/customers', {
                params: {
                    consumer_key: 'ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8',
                    consumer_secret: 'cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf'
                }
            });
            const customers = customersResponse.data;

            // Trouver le client correspondant à l'utilisateur WordPress
            const matchingCustomer = customers.find(customer => customer.id === user.id);

            // Fusionner les informations de l'utilisateur et du client
            const mergedUserData = {
                ...user,
                customerData: matchingCustomer
            };

            dispatch({ type: GET_USER, payload: mergedUserData });
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };
};

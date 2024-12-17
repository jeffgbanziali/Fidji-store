import { wpApiClient, wooApiClient } from './api';

export const GET_USER = "GET_USER";

export const getUser = (userToken) => {
    return async (dispatch) => {
        try {
            // Récupérer l'utilisateur à partir de l'API WordPress
            const userResponse = await wpApiClient(userToken).get('/users/me');
            const user = userResponse.data;

            // Récupérer la liste de tous les clients à partir de l'API WooCommerce
            const customersResponse = await wooApiClient.get('/customers');
            const customers = customersResponse.data;

            // Trouver le client correspondant à l'utilisateur WordPress
            const matchingCustomer = customers.find(
                (customer) => customer.id === user.id
            );

            // Fusionner les informations de l'utilisateur et du client
            const mergedUserData = {
                ...user,
                customerData: matchingCustomer || null, // Si aucun client correspondant
            };

            // Dispatch pour Redux
            dispatch({ type: GET_USER, payload: mergedUserData });
        } catch (error) {
            console.error('Erreur lors de la requête utilisateur :', error.message);
        }
    };
};

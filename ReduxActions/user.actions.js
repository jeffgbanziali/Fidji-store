import { wooApiClient, wpApiClient } from './api';

export const GET_USER = "GET_USER";



export const getUser = (userToken) => {
    return async (dispatch) => {
        try {
            const userResponse = await wpApiClient(userToken).get('/users/me');
            const user = userResponse.data;

            const customersResponse = await wooApiClient.get('/customers');
            const customers = customersResponse.data;

            const matchingCustomer = customers.find(
                (customer) => customer.id === user.id
            );

            const mergedUserData = {
                ...user,
                customerData: matchingCustomer || null,
            };

            console.log("Mon client est :", mergedUserData);

            dispatch({ type: GET_USER, payload: mergedUserData });
        } catch (error) {
            console.error('Erreur lors de la requête utilisateur :', error.response ? error.response.data : error.message);
        }
    };
};
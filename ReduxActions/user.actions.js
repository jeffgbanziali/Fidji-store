import { wooApiClient, wpApiClient } from './api';

export const GET_USER = "GET_USER";
export const UPDATE_SHIPPING_ADDRESS = "UPDATE_SHIPPING_ADDRESS";
export const UPDATE_BILLING_ADDRESS = "UPDATE_BILLING_ADDRESS";


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


            dispatch({ type: GET_USER, payload: mergedUserData });
        } catch (error) {
            console.error('Erreur lors de la requête utilisateur :', error.response ? error.response.data : error.message);
        }
    };
};



export const updateUserShippingAddress = (userToken, updatedShipping) => {
    return async (dispatch, getState) => {
        try {
            const { user } = getState().user;

            if (!user || !user.customerData) {
                throw new Error("Utilisateur non trouvé");
            }

            const userId = user.customerData.id;

            const response = await wooApiClient(userToken).put(`/customers/${userId}`, { shipping: updatedShipping });

            if (!response || !response.data) {
                throw new Error("Réponse API invalide");
            }


            dispatch({ type: UPDATE_SHIPPING_ADDRESS, payload: response.data.shipping });

        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'adresse de livraison :", error.response ? error.response.data : error.message);
        }
    };
};

// Action pour mettre à jour l'adresse de facturation
export const updateUserBillingAddress = (userToken, updatedBilling) => {
    return async (dispatch, getState) => {
        try {
            const { user } = getState().user;

            if (!user || !user.customerData) {
                throw new Error("Utilisateur non trouvé");
            }

            const userId = user.customerData.id;

            const response = await wooApiClient(userToken).put(`/customers/${userId}`, { billing: updatedBilling });

            if (!response || !response.data) {
                throw new Error("Réponse API invalide");
            }

            console.log("Adresse de facturation mise à jour :", response.data.billing);

            dispatch({ type: UPDATE_BILLING_ADDRESS, payload: response.data.billing });

        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'adresse de facturation :", error.response ? error.response.data : error.message);
        }
    };
};

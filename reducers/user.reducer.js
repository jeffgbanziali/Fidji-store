import {
    GET_USER,
    UPDATE_SHIPPING_ADDRESS,
    UPDATE_BILLING_ADDRESS,
} from '../ReduxActions/user.actions';

const initialState = {
    user: null, // L'utilisateur sera stocké ici après récupération
    loading: false,
    error: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };

        case UPDATE_SHIPPING_ADDRESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    customerData: {
                        ...state.user.customerData,
                        shipping: action.payload,
                    },
                },
            };

        case UPDATE_BILLING_ADDRESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    customerData: {
                        ...state.user.customerData,
                        billing: action.payload,
                    },
                },
            };


        default:
            return state;
    }
}

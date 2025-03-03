import {
    GET_USER,
    UPDATE_SHIPPING_ADDRESS,
    UPDATE_BILLING_ADDRESS,
    UPDATE_BILLING_ADDRESS_REQUEST,
    UPDATE_BILLING_ADDRESS_SUCCESS,
    UPDATE_BILLING_ADDRESS_FAILURE,
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

        case UPDATE_BILLING_ADDRESS_REQUEST:
            return { ...state, loading: true, error: null };

        case UPDATE_BILLING_ADDRESS_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    customerData: {
                        ...state.user.customerData,
                        billing: action.payload
                    }
                },
                loading: false
            };

        case UPDATE_BILLING_ADDRESS_FAILURE:
            return { ...state, loading: false, error: action.payload };


        default:
            return state;
    }
}

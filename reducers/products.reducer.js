import { GET_COATS, GET_PANTS, GET_PRODUCTS, GET_SHIRTS, GET_SWEATSHIRTS, GET_TSHIRTS } from '../ReduxActions/products.actions';

const initialState = {
    products: [],
    shirts: [],
    tshirts: [],
    pants: [],
    sweatshirts: [],
    coats: [],

};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: return {
            ...state,
            products: action.payload,
        };
        case GET_SHIRTS:
            return {
                ...state,
                shirts: action.payload,
            };
        case GET_COATS:
            return {
                ...state,
                coats: action.payload,
            };
        case GET_PANTS:
            return {
                ...state,
                pants: action.payload,
            };
        case GET_SWEATSHIRTS:
            return {
                ...state,
                sweatshirts: action.payload,
            };
        case GET_TSHIRTS:
            return {
                ...state,
                tshirts: action.payload,
            };
        default:
            return state;
    }
}

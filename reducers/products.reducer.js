import { GET_PRODUCTS } from '../ReduxActions/products.actions';

const initialState = {
    products: [],

};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

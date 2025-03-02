import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, } from '../ReduxActions/category.actions';

const initialState = {
    categories: [],
    loading: false,
    error: null
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true };

        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload };

        case FETCH_CATEGORIES_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

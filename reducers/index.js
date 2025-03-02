import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productsReducer from "./products.reducer";
import { categoriesReducer } from "./category.reducer";


export default combineReducers({
    // user: userReducer,
    userReducer,
    productsReducer,
    categories: categoriesReducer

});
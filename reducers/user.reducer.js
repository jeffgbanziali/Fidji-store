import {
    GET_USER,

} from '../ReduxActions/user.actions';

const initialState = {

};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
}
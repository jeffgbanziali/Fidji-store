import axios from 'axios';
import { APP_API_URL } from '../config';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const GET_USER = "GET_USER";


export const getUser = (userToken) => {

    return async (dispatch) => {
        try {
            const response = await axios.get('https://boutiquefidji.com/wp-json/wp/v2/users/me', {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            });

            dispatch({ type: GET_USER, payload: response.data });
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };
};

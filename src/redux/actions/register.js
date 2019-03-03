import axios from 'axios';
import { apiUrl } from './../../constants/globals';

import { REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED } from './types';

const authPath = '/auth/user';
const authUrl = `${apiUrl}${authPath}`;


export function register({ firstname, lastname, email, password, phone }) {
    return (dispatch) => {
        dispatch({ type: REGISTER_PENDING });
        return axios.post(authUrl, { firstname, lastname, email, password, phone })
            .then(function (response) {
                console.log(response);
                dispatch({ type: REGISTER_FULFILLED, payload: response.data });
            })
            .catch(function (error) {
                console.log('Problem registering. Error: ');
                console.log(error);
                dispatch({ type: REGISTER_REJECTED, payload: error });
            });

    }
}

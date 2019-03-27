import axios from 'axios';
import { apiUrl } from './../../constants/globals';

import { REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED } from './types';

const authPath = '/user';
const authUrl = `${apiUrl}${authPath}`;

export function register(userObj) {
    return (dispatch) => {
        dispatch({ type: REGISTER_PENDING });
        console.log('userObj in register action: ', userObj)
        return axios.post(authUrl, userObj)
            .then(function (response) {
                console.log('registered successfully: ', response);
                dispatch({ type: REGISTER_FULFILLED, payload: response.data });
            })
            .catch(function (error) {
                console.log('Problem registering. Error: ');
                console.log(error);
                dispatch({ type: REGISTER_REJECTED, payload: error });
            });
    }
}

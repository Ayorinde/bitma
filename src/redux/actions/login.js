import axios from 'axios';
import { apiUrl } from './../../constants/globals';

import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from './types';

const authPath = '/auth/user';
const authUrl = `${apiUrl}${authPath}`;

export function login(userObj) {
    return (dispatch) => {
        dispatch({ type: LOGIN_PENDING });
        console.log('userObj in login action: ', userObj)
        return axios.post(authUrl, userObj, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(function (response) {
                console.log('logged in successfully: ', response);
                dispatch({ type: LOGIN_FULFILLED, payload: response.data });
            })
            .catch(function (error) {
                console.log('Problem logging in. Error: ');
                console.log(error);
                dispatch({ type: LOGIN_REJECTED, payload: error });
            });
    }
}
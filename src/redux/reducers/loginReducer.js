import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    isLoggedIn: false,
    response: [],
    error: null,
};

const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_PENDING: {
            return {
                ...state,
                fetching: true,
                fetched: false
            };
        }
        case LOGIN_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                isLoggedIn: true,
                response: action.payload,
                error: null,
            };
        }
        case LOGIN_REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                isLoggedIn: false,
                error: action.payload
            };
        }
        default: {
            return {
                ...state
            }
        };
    }
};

export default login;
import { REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED } from '../actions/types';

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  isLoggedIn: false,
  response: [],
  error: null,
};

const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_PENDING: {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case REGISTER_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        isLoggedIn: true,
        response: action.payload,
        error: null,
      };
    }
    case REGISTER_REJECTED: {
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

export default register;
import { AUTH_USER, SIGN_OUT, AUTH_ERROR } from '../actions/action_types';

const initialState =  {
    authenticated: false,
    error: null
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true,
                error: null
            };
        case SIGN_OUT:
            return {
                ...state,
                authenticated: false,
                error: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload.message
            };
        default:
            return state;
    }
}
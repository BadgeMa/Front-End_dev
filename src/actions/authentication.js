import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* AUTH */

/* LOGIN */
export function loginRequest(username, password) {

	const LOGIN_URL = "http://52.78.88.51:8080/BadgeMaServer/login.do";

    return (dispatch) => {
            dispatch(login());

            return axios.get(LOGIN_URL, {
				params: {
					id: username,
					passwd: password
				}
			})
            .then((response) => {
                dispatch(loginSuccess(username));
            }).catch((error) => {
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* AUTHENTICATION*/
import {
	AUTH_LOGIN,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_REGISTER,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* LOGIN */
export function loginRequest(username, password) {

	const LOGIN_URL = "http://52.78.88.51:8080/BadgeMaServer/login.do";

	return (dispatch) => {
		dispatch(login());

		console.log("login Request");

		return axios.get(LOGIN_URL, {
			params: {
				id: username,
				passwd: password
			}
		}).then((response) => {
			let res = response.data.login_result[0].state;

			if(res === "ok") {
				dispatch(loginSuccess(username));
				console.log("Success");
			} else if(res === 'no') {
				dispatch(loginFailure());
				console.log("Fail!!");
			}
		}).catch((error) => {
			console.log(error);
			console.log("errrororo!");
			dispatch(loginFailure());
		});

		console.log("login Requrest");
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

/* REGISTER */
export function registerRequest(username, password) {

	const REGISTER_URL = '';

	console.log("register Request");

	return (dispatch) => {
		// inform register API is starting
		dispatch(register());

		return axios.get(REGISTER_URL,
		{
			params: {
				id: username,
				passwd: password
			}
		})
		.then((response) => {
			dispatch(registerSuccess());
		}).catch(() => {
			dispatch(registerFailure());
		});
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS
    };
}

export function registerFailure() {
    return {
        type: AUTH_REGISTER_FAILURE,
    };
}

import createRequestTypes from '../utils/action';

/* AUTH */

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILIURE = "AUTH_LOGIN_FAILURE";


/* BROWSER */
export const MENU_UPDATE = "MANU_UPDATE";


/* MiniCard */
export const GET_TOTAL_REPORT = createRequestTypes('GET_TOTAL_REPORT');
export const GET_COMPLETE_REPORT = createRequestTypes('GET_COMPLETE_REPORT');
export const GET_TOTAL_COUNCEL = createRequestTypes('GET_TOTAL_COUNCEL');
export const GET_COMPLETE_COUNCEL = createRequestTypes('GET_COMPLETE_COUNCEL');

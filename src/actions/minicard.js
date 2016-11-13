import {
	GET_TOTAL_REPORT,
	GET_COMPLETE_REPORT,
	GET_TOTAL_COUNCEL,
	GET_COMPLETE_COUNCEL
} from './ActionTypes'
import { createAction } from 'redux-actions';
import axios from 'axios';

/* MINICARD */
export const getTotalReport = createAction(GET_TOTAL_REPORT.REQUEST);
export const getCompleteReport = createAction(GET_COMPLETE_REPORT.REQUEST);
export const getTotalCouncel = createAction(GET_TOTAL_COUNCEL.REQUEST);
export const getCompleteCOUNCEL = createAction(GET_COMPLETE_COUNCEL.REQUEST);


export function totalReportRequest() {
	const TOTAL_REPORT_URL = "http://badgema.azurewebsites.net/BadgeMaCenter/reportNumber.do";

	return (dispatch) => {

			return axios.get(TOTAL_REPORT_URL,
			).then((response) => {
				dispatch(updateTotalReportSuccess(response));
			}).catch((error) => {
				dispatch(updateTotalReportFailure(error));
			});
	};
}

export function updateTotalReportSuccess(response) {
	return {
        type: GET_TOTAL_REPORT.SUCCESS,
		payload: {
			response
		}
    };
}

export function updateTotalReportFailure(error) {
	return {
		type: GET_TOTAL_REPORT.FAILURE,
		payload: {
			error
		}
	}
}

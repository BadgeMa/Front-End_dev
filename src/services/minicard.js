import request from '../utils/request';

export function get() {

	const TOTAL_REPORT_URL = "http://badgema.azurewebsites.net/BadgeMaCenter/reportNumber.do";

	return request(TOTAL_REPORT_URL);
}
